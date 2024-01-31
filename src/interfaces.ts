import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import * as https from 'https';

export type FortnoxScope =
  | 'salary'
  | 'bookkeeping'
  | 'archive'
  | 'connectfile'
  | 'article'
  | 'companyinformation'
  | 'settings'
  | 'invoice'
  | 'costcenter'
  | 'currency'
  | 'customer'
  | 'inbox'
  | 'payment'
  | 'noxfinansinvoice'
  | 'offer'
  | 'order'
  | 'price'
  | 'project'
  | 'profile'
  | 'supplier'
  | 'supplierinvoice';

export interface IAccessTokens {
  accessToken?: string;
  refreshToken?: string;
}

export interface IFortnoxApiClientOptions {
  /** Fortnox integration Client ID */
  clientId: string;
  /** Fortnox integration Client Secret */
  clientSecret: string;
  /** Access token if already available */
  accessToken?: string;
  /** Refresh token if already available */
  refreshToken?: string;
}

export interface IFortnoxApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://api.fortnox.se`.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}
