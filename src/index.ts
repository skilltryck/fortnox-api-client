import { Api, ApiConfig, ContentType, FolderFileRowWrap, RequestParams } from "./api"
import axios, { AxiosRequestConfig } from "axios"
import { HttpsAgent } from "agentkeepalive"
import { IFortnoxApiClientConfig, IFortnoxApiClientOptions, IAccessTokens, FortnoxScope } from "./interfaces"
import { FileBuffer } from "./file-buffer"
import https from "https"
import CacheableLookup from "cacheable-lookup"
import FormData from "form-data"
const fs = require("fs")

export { IFortnoxApiClientConfig, IFortnoxApiClientOptions, FortnoxScope, FileBuffer }

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup()
let dnsCacheInstalled = false

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000,
})

export class FortnoxApiClient {
  options: IFortnoxApiClientOptions
  config: Omit<IFortnoxApiClientConfig, "keepAliveAgent" | "dnsCache">
  readonly api: FortnoxApiClientInstance

  tokens: IAccessTokens = {}

  constructor(options: IFortnoxApiClientOptions, config: IFortnoxApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || "https://api.fortnox.se"
    config.timeout = config.timeout || 120000

    if (!options.clientId) {
      throw new Error("Fortnox API Client error: Missing options.clientId")
    }

    if (!options.clientSecret) {
      throw new Error("Fortnox API Client error: Missing options.clientSecret")
    }

    if (!options.accessToken && !options.refreshToken) {
      throw new Error(
        `Fortnox API Client error: Missing accessToken and refreshToken in constructor (on of them is required)`
      )
    }

    if (options.accessToken && options.refreshToken) {
      throw new Error(
        `Fortnox API Client error: Please provide either accessToken or refreshToken in the constructor`
      )
    }

    if (options.accessToken) {
      this.tokens.accessToken = options.accessToken
    }

    if (options.refreshToken) {
      this.tokens.refreshToken = options.refreshToken
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false })
        } else {
          config.httpsAgent = config.keepAliveAgent
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent)
        dnsCacheInstalled = true
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent
    delete config.dnsCache

    this.options = options
    this.config = config

    // Initialize Fortnox Api Client Instance
    this.api = new FortnoxApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker,
    })

    this.api.setSecurityData(this)

    // Install security worker manually
    this.installSecurityWorker()

    // Install axios error handler
    this.installErrorHandler()

    // Logga alla requests
    this.api.instance.interceptors.request.use(
      (config) => {
        // Log request details
        const logFilePath = "./logs/fortnox_requests.log"
        const ts = new Date().toISOString()
        const method = config.method?.toUpperCase() || "UNKNOWN"
        const request = config.url || "UNKNOWN"
        const requestData = config.data ? JSON.stringify(config.data, null, 2) : "UNKNOWN"
        const logMessage = `${ts} ${method} ${request} ${requestData}\n`

        fs.appendFileSync(logFilePath, logMessage, "utf8")

        return config
      },
      (error) => {
        throw error
      }
    )

    // Add a response interceptor to log the response
    this.api.instance.interceptors.response.use(
      (response) => {
        const logFilePath = "./logs/fortnox_requests.log"
        const responseLogMessage = `Response: ${JSON.stringify(response.data, null, 2)}\n\n`
        fs.appendFileSync(logFilePath, responseLogMessage, "utf8")
        return response
      },
      (error) => {
        throw error
      }
    )
  }

  // Add securityWorker as request interceptor because endpoints are not flagged as secure(?)
  private installSecurityWorker() {
    this.api.instance.interceptors.request.use(
      async (config) => {
        const securityWorker = this.config.securityWorker || this.securityWorker

        if (securityWorker) {
          const securityConfig = await securityWorker(this)

          if (securityConfig?.headers) {
            config.headers.set("Authorization", securityConfig.headers.Authorization)
          }
        }

        // // The API requires these headers to be set
        if (config.data instanceof FormData) {
          config.headers.set("Content-Type", "multipart/form-data")
        } else {
          config.headers.set("Content-Type", "application/json")
        }

        config.headers.set("Accept", "application/json")

        return config
      },
      (error) => {
        throw error
      }
    )
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response) {
          error.message =
            `Fortnox HTTP error ${error.response.status} (${error.response.statusText}): ` +
            JSON.stringify(error.response.data)
        }

        // Log error to a file
        const logFilePath = "./logs/fortnox_error.log"
        const ts = new Date().toISOString()
        const method = error.config?.method?.toUpperCase() || "UNKNOWN"
        const request = error.config?.url || "UNKNOWN"
        const requestData = error.config?.data ? JSON.stringify(error.config.data, null, 2) : "UNKNOWN"
        const errorMessage = `${ts} ${method} ${request} ${requestData} \nError: ${
          error.message
        } \n Response: ${JSON.stringify(error.response?.data || {}, null, 2)}\n\n`

        fs.appendFileSync(logFilePath, errorMessage, "utf8")

        throw error
      }
    )
  }

  async refreshTokens(): Promise<IAccessTokens> {
    if (!this.tokens.refreshToken) {
      throw new Error(`Fortnox API Client refreshTokens Error: Missing refreshToken`)
    }

    const params = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: this.tokens.refreshToken,
    })

    const accessTokenRequest = await axios
      .post("https://apps.fortnox.se/oauth-v1/token", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${this.options.clientId}:${this.options.clientSecret}`
          ).toString("base64")}`,
        },
      })
      .catch((error) => {
        if (error?.response) {
          error.message =
            `Fortnox HTTP error ${error.response.status} (${error.response.statusText}): ` +
            JSON.stringify(error.response.data)
        }

        throw error
      })

    this.tokens.accessToken = accessTokenRequest.data.access_token
    this.tokens.refreshToken = accessTokenRequest.data.refresh_token

    return this.tokens
  }

  // https://www.fortnox.se/developer/authorization/make-request
  private async securityWorker(fortnox: FortnoxApiClient): Promise<AxiosRequestConfig> {
    if (!fortnox.tokens.accessToken && fortnox.tokens.refreshToken) {
      await fortnox.refreshTokens()
    }

    const axiosRequestConfig: AxiosRequestConfig = {}

    axiosRequestConfig.headers = {
      Authorization: `Bearer ${fortnox.tokens.accessToken}`,
    }

    return axiosRequestConfig
  }

  static createAuthorizationUri(
    clientId: string,
    redirectUri: string,
    scope: FortnoxScope[],
    state: string,
    accountType: "service" | undefined
  ): string {
    // https://www.fortnox.se/developer/authorization/get-authorization-code

    if (!scope.length) {
      throw new Error(`Fortnox API Client createAuthorizationUri Error: Missing scope`)
    }

    const authorizationUri = new URL("https://apps.fortnox.se/oauth-v1/auth")

    authorizationUri.searchParams.append("client_id", clientId)
    authorizationUri.searchParams.append("redirect_uri", redirectUri)
    authorizationUri.searchParams.append("scope", scope.join(" "))
    authorizationUri.searchParams.append("state", state)
    authorizationUri.searchParams.append("access_type", "offline")
    authorizationUri.searchParams.append("response_type", "code")

    if (accountType) {
      authorizationUri.searchParams.append("account_type", accountType)
    }

    return authorizationUri.toString()
  }

  static async getTokensByAuthorizationCode(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    code: string
  ): Promise<IAccessTokens> {
    // https://www.fortnox.se/developer/authorization/get-access-token

    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
    })

    const accessTokenRequest = await axios
      .post("https://apps.fortnox.se/oauth-v1/token", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        },
      })
      .catch((error) => {
        if (error?.response) {
          error.message =
            `Fortnox HTTP error ${error.response.status} (${error.response.statusText}): ` +
            JSON.stringify(error.response.data)
        }

        throw error
      })

    return {
      accessToken: accessTokenRequest.data.access_token,
      refreshToken: accessTokenRequest.data.refresh_token,
    }
  }
}

class FortnoxApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config)
  }

  // Override createFormData because FormData needs to be imported manually
  protected createFormData(input: Record<string, unknown>): any {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof FileBuffer

        if (isFileType) {
          formData.append(key, formItem.buffer, {
            filename: formItem.name,
            contentType: formItem.type,
          })
        } else {
          formData.append(key, this.stringifyFormItem(formItem))
        }
      }

      return formData
    }, new FormData())
  }

  helpers = {}
}
