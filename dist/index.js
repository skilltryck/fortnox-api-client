"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortnoxApiClient = exports.FileBuffer = void 0;
var api_1 = require("./api");
var axios_1 = __importDefault(require("axios"));
var agentkeepalive_1 = require("agentkeepalive");
var file_buffer_1 = require("./file-buffer");
Object.defineProperty(exports, "FileBuffer", { enumerable: true, get: function () { return file_buffer_1.FileBuffer; } });
var https_1 = __importDefault(require("https"));
var cacheable_lookup_1 = __importDefault(require("cacheable-lookup"));
var form_data_1 = __importDefault(require("form-data"));
var fs = require("fs");
// DNS cache to prevent ENOTFOUND and other such issues
var dnsCache = new cacheable_lookup_1.default();
var dnsCacheInstalled = false;
// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
var httpsAgent = new agentkeepalive_1.HttpsAgent({
    maxSockets: 32,
    maxFreeSockets: 10,
    timeout: 30000,
    freeSocketTimeout: 4500,
    socketActiveTTL: 60000,
});
var FortnoxApiClient = /** @class */ (function () {
    function FortnoxApiClient(options, config) {
        if (config === void 0) { config = {}; }
        this.tokens = {};
        // Set default config
        config.baseURL = config.baseURL || "https://api.fortnox.se";
        config.timeout = config.timeout || 120000;
        if (!options.clientId) {
            throw new Error("Fortnox API Client error: Missing options.clientId");
        }
        if (!options.clientSecret) {
            throw new Error("Fortnox API Client error: Missing options.clientSecret");
        }
        if (!options.accessToken && !options.refreshToken) {
            throw new Error("Fortnox API Client error: Missing accessToken and refreshToken in constructor (on of them is required)");
        }
        if (options.accessToken && options.refreshToken) {
            throw new Error("Fortnox API Client error: Please provide either accessToken or refreshToken in the constructor");
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
            }
            else {
                if (config.keepAliveAgent === false) {
                    config.httpsAgent = new https_1.default.Agent({ keepAlive: false });
                }
                else {
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
        this.api = new FortnoxApiClientInstance(__assign(__assign({}, this.config), { securityWorker: this.config.securityWorker || this.securityWorker }));
        this.api.setSecurityData(this);
        // Install security worker manually
        this.installSecurityWorker();
        // Install axios error handler
        this.installErrorHandler();
        // Logga alla requests
        this.api.instance.interceptors.request.use(function (config) {
            var _a;
            // Log request details
            var logFilePath = "./logs/fortnox_requests.log";
            var ts = new Date().toISOString();
            var method = ((_a = config.method) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "UNKNOWN";
            var request = config.url || "UNKNOWN";
            var requestData = config.data ? JSON.stringify(config.data, null, 2) : "UNKNOWN";
            var logMessage = "".concat(ts, " ").concat(method, " ").concat(request, " ").concat(requestData, "\n");
            fs.appendFileSync(logFilePath, logMessage, "utf8");
            return config;
        }, function (error) {
            throw error;
        });
        // Add a response interceptor to log the response
        this.api.instance.interceptors.response.use(function (response) {
            var logFilePath = "./logs/fortnox_requests.log";
            var responseLogMessage = "Response: ".concat(JSON.stringify(response.data, null, 2), "\n\n");
            fs.appendFileSync(logFilePath, responseLogMessage, "utf8");
            return response;
        }, function (error) {
            throw error;
        });
    }
    // Add securityWorker as request interceptor because endpoints are not flagged as secure(?)
    FortnoxApiClient.prototype.installSecurityWorker = function () {
        var _this = this;
        this.api.instance.interceptors.request.use(function (config) { return __awaiter(_this, void 0, void 0, function () {
            var securityWorker, securityConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        securityWorker = this.config.securityWorker || this.securityWorker;
                        if (!securityWorker) return [3 /*break*/, 2];
                        return [4 /*yield*/, securityWorker(this)];
                    case 1:
                        securityConfig = _a.sent();
                        if (securityConfig === null || securityConfig === void 0 ? void 0 : securityConfig.headers) {
                            config.headers.set("Authorization", securityConfig.headers.Authorization);
                        }
                        _a.label = 2;
                    case 2:
                        // // The API requires these headers to be set
                        if (config.data instanceof form_data_1.default) {
                            config.headers.set("Content-Type", "multipart/form-data");
                        }
                        else {
                            config.headers.set("Content-Type", "application/json");
                        }
                        config.headers.set("Accept", "application/json");
                        return [2 /*return*/, config];
                }
            });
        }); }, function (error) {
            throw error;
        });
    };
    FortnoxApiClient.prototype.installErrorHandler = function () {
        this.api.instance.interceptors.response.use(function (response) { return response; }, function (error) {
            var _a, _b, _c, _d, _e;
            if (error === null || error === void 0 ? void 0 : error.response) {
                error.message =
                    "Fortnox HTTP error ".concat(error.response.status, " (").concat(error.response.statusText, "): ") +
                        JSON.stringify(error.response.data);
            }
            // Log error to a file
            var logFilePath = "./logs/fortnox_error.log";
            var ts = new Date().toISOString();
            var method = ((_b = (_a = error.config) === null || _a === void 0 ? void 0 : _a.method) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "UNKNOWN";
            var request = ((_c = error.config) === null || _c === void 0 ? void 0 : _c.url) || "UNKNOWN";
            var requestData = ((_d = error.config) === null || _d === void 0 ? void 0 : _d.data) ? JSON.stringify(error.config.data, null, 2) : "UNKNOWN";
            var errorMessage = "".concat(ts, " ").concat(method, " ").concat(request, " ").concat(requestData, " \nError: ").concat(error.message, " \n Response: ").concat(JSON.stringify(((_e = error.response) === null || _e === void 0 ? void 0 : _e.data) || {}, null, 2), "\n\n");
            fs.appendFileSync(logFilePath, errorMessage, "utf8");
            throw error;
        });
    };
    FortnoxApiClient.prototype.refreshTokens = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, accessTokenRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.tokens.refreshToken) {
                            throw new Error("Fortnox API Client refreshTokens Error: Missing refreshToken");
                        }
                        params = new URLSearchParams({
                            grant_type: "refresh_token",
                            refresh_token: this.tokens.refreshToken,
                        });
                        return [4 /*yield*/, axios_1.default
                                .post("https://apps.fortnox.se/oauth-v1/token", params, {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    Authorization: "Basic ".concat(Buffer.from("".concat(this.options.clientId, ":").concat(this.options.clientSecret)).toString("base64")),
                                },
                            })
                                .catch(function (error) {
                                if (error === null || error === void 0 ? void 0 : error.response) {
                                    error.message =
                                        "Fortnox HTTP error ".concat(error.response.status, " (").concat(error.response.statusText, "): ") +
                                            JSON.stringify(error.response.data);
                                }
                                throw error;
                            })];
                    case 1:
                        accessTokenRequest = _a.sent();
                        this.tokens.accessToken = accessTokenRequest.data.access_token;
                        this.tokens.refreshToken = accessTokenRequest.data.refresh_token;
                        return [2 /*return*/, this.tokens];
                }
            });
        });
    };
    // https://www.fortnox.se/developer/authorization/make-request
    FortnoxApiClient.prototype.securityWorker = function (fortnox) {
        return __awaiter(this, void 0, void 0, function () {
            var axiosRequestConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!fortnox.tokens.accessToken && fortnox.tokens.refreshToken)) return [3 /*break*/, 2];
                        return [4 /*yield*/, fortnox.refreshTokens()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        axiosRequestConfig = {};
                        axiosRequestConfig.headers = {
                            Authorization: "Bearer ".concat(fortnox.tokens.accessToken),
                        };
                        return [2 /*return*/, axiosRequestConfig];
                }
            });
        });
    };
    FortnoxApiClient.createAuthorizationUri = function (clientId, redirectUri, scope, state, accountType) {
        // https://www.fortnox.se/developer/authorization/get-authorization-code
        if (!scope.length) {
            throw new Error("Fortnox API Client createAuthorizationUri Error: Missing scope");
        }
        var authorizationUri = new URL("https://apps.fortnox.se/oauth-v1/auth");
        authorizationUri.searchParams.append("client_id", clientId);
        authorizationUri.searchParams.append("redirect_uri", redirectUri);
        authorizationUri.searchParams.append("scope", scope.join(" "));
        authorizationUri.searchParams.append("state", state);
        authorizationUri.searchParams.append("access_type", "offline");
        authorizationUri.searchParams.append("response_type", "code");
        if (accountType) {
            authorizationUri.searchParams.append("account_type", accountType);
        }
        return authorizationUri.toString();
    };
    FortnoxApiClient.getTokensByAuthorizationCode = function (clientId, clientSecret, redirectUri, code) {
        return __awaiter(this, void 0, void 0, function () {
            var params, accessTokenRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams({
                            grant_type: "authorization_code",
                            code: code,
                            redirect_uri: redirectUri,
                        });
                        return [4 /*yield*/, axios_1.default
                                .post("https://apps.fortnox.se/oauth-v1/token", params, {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    Authorization: "Basic ".concat(Buffer.from("".concat(clientId, ":").concat(clientSecret)).toString("base64")),
                                },
                            })
                                .catch(function (error) {
                                if (error === null || error === void 0 ? void 0 : error.response) {
                                    error.message =
                                        "Fortnox HTTP error ".concat(error.response.status, " (").concat(error.response.statusText, "): ") +
                                            JSON.stringify(error.response.data);
                                }
                                throw error;
                            })];
                    case 1:
                        accessTokenRequest = _a.sent();
                        return [2 /*return*/, {
                                accessToken: accessTokenRequest.data.access_token,
                                refreshToken: accessTokenRequest.data.refresh_token,
                            }];
                }
            });
        });
    };
    return FortnoxApiClient;
}());
exports.FortnoxApiClient = FortnoxApiClient;
var FortnoxApiClientInstance = /** @class */ (function (_super) {
    __extends(FortnoxApiClientInstance, _super);
    function FortnoxApiClientInstance(config) {
        var _this = _super.call(this, config) || this;
        _this.helpers = {};
        return _this;
    }
    // Override createFormData because FormData needs to be imported manually
    FortnoxApiClientInstance.prototype.createFormData = function (input) {
        var _this = this;
        return Object.keys(input || {}).reduce(function (formData, key) {
            var property = input[key];
            var propertyContent = property instanceof Array ? property : [property];
            for (var _i = 0, propertyContent_1 = propertyContent; _i < propertyContent_1.length; _i++) {
                var formItem = propertyContent_1[_i];
                var isFileType = formItem instanceof file_buffer_1.FileBuffer;
                if (isFileType) {
                    formData.append(key, formItem.buffer, {
                        filename: formItem.name,
                        contentType: formItem.type,
                    });
                }
                else {
                    formData.append(key, _this.stringifyFormItem(formItem));
                }
            }
            return formData;
        }, new form_data_1.default());
    };
    return FortnoxApiClientInstance;
}(api_1.Api));
