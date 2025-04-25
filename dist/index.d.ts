import { Api, ApiConfig } from "./api";
import { IFortnoxApiClientConfig, IFortnoxApiClientOptions, IAccessTokens, FortnoxScope } from "./interfaces";
import { FileBuffer } from "./file-buffer";
export { IFortnoxApiClientConfig, IFortnoxApiClientOptions, FortnoxScope, FileBuffer };
export declare class FortnoxApiClient {
    options: IFortnoxApiClientOptions;
    config: Omit<IFortnoxApiClientConfig, "keepAliveAgent" | "dnsCache">;
    readonly api: FortnoxApiClientInstance;
    tokens: IAccessTokens;
    constructor(options: IFortnoxApiClientOptions, config?: IFortnoxApiClientConfig);
    private installSecurityWorker;
    private installErrorHandler;
    refreshTokens(): Promise<IAccessTokens>;
    private securityWorker;
    static createAuthorizationUri(clientId: string, redirectUri: string, scope: FortnoxScope[], state: string, accountType: "service" | undefined): string;
    static getTokensByAuthorizationCode(clientId: string, clientSecret: string, redirectUri: string, code: string): Promise<IAccessTokens>;
}
declare class FortnoxApiClientInstance extends Api<any> {
    constructor(config?: ApiConfig<any>);
    protected createFormData(input: Record<string, unknown>): any;
    helpers: {};
}
