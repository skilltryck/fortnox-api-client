import { Api, ApiConfig } from './api';
import axios, { AxiosRequestConfig } from 'axios';
import { HttpsAgent } from 'agentkeepalive';
import { IFortnoxApiClientConfig, IFortnoxApiClientOptions, IAccessTokens, FortnoxScope } from './interfaces';
import { FileBuffer } from './file-buffer';
import https from 'https';
import CacheableLookup from 'cacheable-lookup';
import FormData from 'form-data';

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup();
let dnsCacheInstalled = false;

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000
});

export class FortnoxApiClient {
  options: IFortnoxApiClientOptions;
  config: Omit<IFortnoxApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: FortnoxApiClientInstance;

  tokens: IAccessTokens = {};

  constructor(options: IFortnoxApiClientOptions, config: IFortnoxApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'https://api.fortnox.se';
    config.timeout = config.timeout || 120000;

    if (!options.clientId) {
      throw new Error('Fortnox API Client error: Missing options.clientId');
    }

    if (!options.clientSecret) {
      throw new Error('Fortnox API Client error: Missing options.clientSecret');
    }

    if (options.accessToken) {
      this.tokens.accessToken = options.accessToken;
    }

    if (options.refreshToken) {
      this.tokens.refreshToken = options.refreshToken;
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Initialize Fortnox Api Client Instance
    this.api = new FortnoxApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });

    this.api.setSecurityData(this.tokens);

    // Install axios error handler
    this.installErrorHandler();
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        error.message =
          `Fortnox HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        throw error;
      }
    );
  }

  async refreshTokens(): Promise<IAccessTokens> {
    if (!this.tokens.refreshToken) {
      throw new Error(`Fortnox API Client refreshTokens Error: Missing refreshToken`);
    }

    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: this.tokens.refreshToken
    });

    const accessTokenRequest = await axios.post('https://api.fortnox.se/oauth-v1/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${this.options.clientId}:${this.options.clientSecret}`).toString('base64')}`
      }
    });

    this.tokens.accessToken = accessTokenRequest.data.access_token;
    this.tokens.refreshToken = accessTokenRequest.data.refresh_token;

    return this.tokens;

    // this.api.setSecurityData(this.tokens);
  }

  // https://www.fortnox.se/developer/authorization/make-request
  private async securityWorker(tokens: IAccessTokens) {
    if (!tokens.accessToken && !tokens.refreshToken) {
      throw new Error(`Fortnox API Client securityWorker Error: Missing accessToken and refreshToken`);
    }

    if (!tokens.accessToken && tokens.refreshToken) {
      await this.refreshTokens();
    }

    const axiosRequestConfig: AxiosRequestConfig = {};

    axiosRequestConfig.headers = {
      Authorization: `Bearer ${tokens.accessToken}`
    };

    return axiosRequestConfig;
  }

  static createAuthorizationUri(
    clientId: string,
    redirectUri: string,
    scope: FortnoxScope[],
    state: string,
    accountType: 'service' | undefined
  ): string {
    // https://www.fortnox.se/developer/authorization/get-authorization-code

    if (!scope.length) {
      throw new Error(`Fortnox API Client createAuthorizationUri Error: Missing scope`);
    }

    const authorizationUri = new URL('https://apps.fortnox.se/oauth-v1/auth');

    authorizationUri.searchParams.append('client_id', clientId);
    authorizationUri.searchParams.append('redirect_uri', redirectUri);
    authorizationUri.searchParams.append('scope', scope.join(' '));
    authorizationUri.searchParams.append('state', state);
    authorizationUri.searchParams.append('access_type', 'offline');
    authorizationUri.searchParams.append('response_type', 'code');

    if (accountType) {
      authorizationUri.searchParams.append('account_type', accountType);
    }

    return authorizationUri.toString();
  }

  static async getTokensByAuthorizationCode(
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    code: string
  ): Promise<IAccessTokens> {
    // https://www.fortnox.se/developer/authorization/get-access-token

    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri
    });

    const accessTokenRequest = await axios.post('https://api.fortnox.se/oauth-v1/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
      }
    });

    return { accessToken: accessTokenRequest.data.access_token, refreshToken: accessTokenRequest.data.refresh_token };
  }
}

class FortnoxApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  // Override createFormData because FormData needs to be imported manually
  protected createFormData(input: Record<string, unknown>): any {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof FileBuffer;

        if (isFileType) {
          formData.append(key, formItem.buffer, {
            filename: formItem.name,
            contentType: formItem.type
          });
        } else {
          formData.append(key, this.stringifyFormItem(formItem));
        }
      }

      return formData;
    }, new FormData());
  }

  helpers = {};
}
