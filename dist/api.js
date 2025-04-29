"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = void 0;
var axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(_a) {
        if (_a === void 0) { _a = {}; }
        var _this = this;
        var securityWorker = _a.securityWorker, secure = _a.secure, format = _a.format, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = function (data) {
            _this.securityData = data;
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var secureParams, _b, requestParams, responseFormat;
            var secure = _a.secure, path = _a.path, type = _a.type, query = _a.query, format = _a.format, body = _a.body, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (typeof secure === "boolean" ? secure : this.secure) &&
                            this.securityWorker;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.securityWorker(this.securityData)];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        secureParams = (_b) ||
                            {};
                        requestParams = this.mergeRequestParams(params, secureParams);
                        responseFormat = format || this.format || undefined;
                        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
                            body = this.createFormData(body);
                        }
                        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
                            body = JSON.stringify(body);
                        }
                        return [2 /*return*/, this.instance.request(__assign(__assign({}, requestParams), { headers: __assign(__assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), params: query, responseType: responseFormat, data: body, url: path }))];
                }
            });
        }); };
        this.instance = axios_1.default.create(__assign(__assign({}, axiosConfig), { baseURL: axiosConfig.baseURL || "https://api.fortnox.se" }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    HttpClient.prototype.mergeRequestParams = function (params1, params2) {
        var method = params1.method || (params2 && params2.method);
        return __assign(__assign(__assign(__assign({}, this.instance.defaults), params1), (params2 || {})), { headers: __assign(__assign(__assign({}, ((method && this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    };
    HttpClient.prototype.stringifyFormItem = function (formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return "".concat(formItem);
        }
    };
    HttpClient.prototype.createFormData = function (input) {
        var _this = this;
        return Object.keys(input || {}).reduce(function (formData, key) {
            var property = input[key];
            var propertyContent = property instanceof Array ? property : [property];
            for (var _i = 0, propertyContent_1 = propertyContent; _i < propertyContent_1.length; _i++) {
                var formItem = propertyContent_1[_i];
                var isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : _this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
/**
 * @title No title
 * @baseUrl https://api.fortnox.se
 *
 * # Documentation
 *
 * The Fortnox API is organized around REST. This means that we’ve designed it to have resource-oriented URLs and be as predictable as possible for you as developer.
 *
 * It also means that we use HTTP status codes when something goes wrong and HTTP verbs understod by many API clients around the web.
 *
 * We use a modified version of OAuth2 for authentication to offer a secure way for both you and our users to interact.
 *
 * The API is generally built to support both XML and JSON but in this documentation all the examples will be in JSON.
 *
 * We encourage you to read all the articles in the [Guides & Good to Know section](https://www.fortnox.se/developer/guides-and-good-to-know/)</a> first, before going forward and learning about the different resources.
 *
 * This to ensure you get an understanding of some of the shared components of the API such as parameters and error handling.
 *
 * ## Rate limits
 *
 * The limit per access-token is 25 requests per 5 seconds. This equals to 300 requests per minute.
 *
 * [Read more about this here.](https://www.fortnox.se/developer/guides-and-good-to-know/rate-limits-for-fortnox-api/)
 *
 * ## Query parameters
 *
 * Use query parameters with the ?-character and separate parameters with the &-character.
 *
 * **Example:**
 *  GET - https://api.fortnox.se/3/invoices?accountnumberfrom=3000&accountnumberto=4000
 * Read more about our parameters [here](https://www.fortnox.se/developer/guides-and-good-to-know/parameters/)
 *
 *
 * Search the documentation using the search field in the top left corner.
 */
var Api = /** @class */ (function (_super) {
    __extends(Api, _super);
    function Api() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.warehouse = {
            /**
             * @description <p> List stock points, optionally include a query parameter `q` to filter on stock point code or name. <p> Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include only ACTIVE stock points). <p> Stock locations are NOT included in the response.
             *
             * @tags StockPointResource
             * @name GetAll
             * @summary List stock points
             * @request GET:/api/warehouse/stockpoints-v1
             * @response `200` `StockPoint` A list of <code>StockPoints</code>.
             */
            getAll: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1", method: "GET", query: query, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Both <code>code</code> and <code>name</code> are mandatory. <p> If you want to set a custom delivery address for this stock point, you must remember to set <code>usingCompanyAddress</code> to <code>false</code>. <p> Returns 400 <code>alreadyexists</code> if a stock point with same code already exists. <p> Returns 400 <code>duplicatestocklocations</code> if two or more stock locations have the same code.
             *
             * @tags StockPointResource
             * @name Create
             * @summary Create stock point
             * @request POST:/api/warehouse/stockpoints-v1
             * @response `200` `StockPoint` The created <code>StockPoint</code>.
             */
            create: function (stockPoint, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1", method: "POST", body: stockPoint, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Get stock points by IDs. <p> Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include ALL stock points). <p> Stock locations are NOT included in the response.
             *
             * @tags StockPointResource
             * @name GetMany
             * @summary Get stock points
             * @request GET:/api/warehouse/stockpoints-v1/multi
             * @response `200` `StockPoint` A list of <code>StockPoints</code>.
             */
            getMany: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1/multi", method: "GET", query: query, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> List stock locations for a specific stock point. <p> Optionally include a query parameter `q` to filter on stock location code or name.
             *
             * @tags StockPointResource
             * @name GetStockLocationsByAmbiguousId
             * @summary Get stock locations
             * @request GET:/api/warehouse/stockpoints-v1/{id}/stocklocations
             * @response `200` `StockLocation` A list of<code>StockLocations</code>.
             */
            getStockLocationsByAmbiguousId: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1/".concat(id, "/stocklocations"), method: "GET", query: query, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Get stock point by id or code.
             *
             * @tags StockPointResource
             * @name GetByAmbiguousId
             * @summary Get stock point
             * @request GET:/api/warehouse/stockpoints-v1/{id}
             * @response `200` `StockPoint` stock point
             */
            getByAmbiguousId: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1/".concat(id), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Add new stock locations to specific <code>StockPoint</code>. <p> If you include an already existing stock location code, it will be ignored.
             *
             * @tags StockPointResource
             * @name AppendStockLocations
             * @summary Append stock locations
             * @request POST:/api/warehouse/stockpoints-v1/{id}
             * @response `200` `StockLocation` A list of appended <code>StockLocations</code>.
             */
            appendStockLocations: function (id, stockLocations, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1/".concat(id), method: "POST", body: stockLocations, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Remember to supply the complete representation of stock point including stock locations.
             *
             * @tags StockPointResource
             * @name Update
             * @summary Update stock point
             * @request PUT:/api/warehouse/stockpoints-v1/{id}
             * @response `200` `StockPoint` The updated <code>StockPoint</code>.
             */
            update: function (id, stockPoint, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1/".concat(id), method: "PUT", body: stockPoint, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Note that it is not allowed to delete a stock point that is in use.
             *
             * @tags StockPointResource
             * @name Delete
             * @summary Delete stock point
             * @request DELETE:/api/warehouse/stockpoints-v1/{id}
             * @response `200` `StockPoint` The deleted <code>StockPoint</code>.
             */
            delete: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stockpoints-v1/".concat(id), method: "DELETE", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags StockTransferResource
             * @name Get
             * @summary Get stock transfer document
             * @request GET:/api/warehouse/stocktransfer-v1/{id}
             * @response `200` `StockTransferDocument` The <code>StockTransferDocument</code> document.
             */
            get: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktransfer-v1/".concat(id), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags StockTransferResource
             * @name UpdateStockTransferResource
             * @summary Update a stock transfer document
             * @request PUT:/api/warehouse/stocktransfer-v1/{id}
             * @response `200` `StockTransferDocument` The <code>StockTransferDocument</code> document.
             */
            updateStockTransferResource: function (id, document, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktransfer-v1/".concat(id), method: "PUT", body: document, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Outbounds will be reserved in the from-place. Inbounds are created upon release of the stock transfer document.
             *
             * @tags StockTransferResource
             * @name CreateStockTransferResource
             * @summary Create a stock transfer document
             * @request POST:/api/warehouse/stocktransfer-v1
             * @response `200` `StockTransferDocument` The <code>StockTransferDocument</code> document.
             */
            createStockTransferResource: function (document, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktransfer-v1", method: "POST", body: document, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> This will deliver all outbounds which are reserved in from-place, and create inbounds in the to-place. Nothing happens if you releasr an already released stock transfer document. <p> Returns <code>document_is_voided</code> if document is voided.
             *
             * @tags StockTransferResource
             * @name Release
             * @summary Release a stock transfer document
             * @request PUT:/api/warehouse/stocktransfer-v1/{id}/release
             * @response `default` `void` Nothing.
             */
            release: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktransfer-v1/".concat(id, "/release"), method: "PUT", type: ContentType.Json }, params));
            },
            /**
             * @description <p> Voiding a released stock transfer document is not allowed, and will return <code>cannot_modify_released_document</code>
             *
             * @tags StockTransferResource
             * @name VoidStockTransfer
             * @summary Void a stock transfer document
             * @request PUT:/api/warehouse/stocktransfer-v1/{id}/void
             * @response `default` `void` Nothing.
             */
            voidStockTransfer: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktransfer-v1/".concat(id, "/void"), method: "PUT", type: ContentType.Json }, params));
            },
            /**
             * @description <p> Check if current tenant has activated Fortnox Warehouse.
             *
             * @tags TenantResource
             * @name GetTenant
             * @summary Get Warehouse activation status
             * @request GET:/api/warehouse/tenants-v4
             * @response `200` `TenantInfo` Warehouse activation status for the current tenant
             */
            getTenant: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/tenants-v4", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ManualDocumentResource
             * @name GetAllManualDocumentResource
             * @summary List manual documents
             * @request GET:/api/warehouse/deliveries-v1
             * @response `200` `ManualDocument` A list of manual documents.
             */
            getAllManualDocumentResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description <p> The <code>id</code> is set automatically.
             *
             * @tags ManualInboundDocumentResource
             * @name CreateManualInboundDocumentResource
             * @summary Create manual inbound document
             * @request POST:/api/warehouse/deliveries-v1/inbounddeliveries
             * @response `200` `ManualInboundDocument` the <code>ManualInboundDocument</code> document.
             */
            createManualInboundDocumentResource: function (manualInboundDocument, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/inbounddeliveries", method: "POST", body: manualInboundDocument, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ManualInboundDocumentResource
             * @name GetManualInboundDocumentResource
             * @summary Get manual inbound document
             * @request GET:/api/warehouse/deliveries-v1/inbounddeliveries/{id}
             * @response `200` `ManualInboundDocument` the <code>ManualInboundDocument</code> document.
             */
            getManualInboundDocumentResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/inbounddeliveries/".concat(id), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ManualInboundDocumentResource
             * @name UpdateManualInboundDocumentResource
             * @summary Update manual inbound document
             * @request PUT:/api/warehouse/deliveries-v1/inbounddeliveries/{id}
             * @response `200` `ManualInboundDocument` the <code>ManualInboundDocument</code> document.
             */
            updateManualInboundDocumentResource: function (id, manualInboundDocument, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/inbounddeliveries/".concat(id), method: "PUT", body: manualInboundDocument, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> When a Manual Inbound has been released, it is locked. The <code>note</code> field can still be updated using this endpoint.
             *
             * @tags ManualInboundDocumentResource
             * @name UpdateNote
             * @summary Update note on manual inbound document
             * @request PATCH:/api/warehouse/deliveries-v1/inbounddeliveries/{id}
             * @response `default` `void` Nothing.
             */
            updateNote: function (id, manualInboundDocumentPatch, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/inbounddeliveries/".concat(id), method: "PATCH", body: manualInboundDocumentPatch, type: ContentType.Json }, params));
            },
            /**
             * @description <p> The document will be locked and bookkept. <p> The following error codes might be thrown: <dl> <dt>cannot_release_later_than_current_date</dt> <dd>Document date cannot be in the future.</dd> <dt>document_is_voided</dt> <dd>Document is voided.</dd> <dt>period_locked</dt> <dd>Document date is within a locked bookkeeping period.</dd> </dl>
             *
             * @tags ManualInboundDocumentResource
             * @name ReleaseManualInboundDocumentResource
             * @summary Release manual inbound document
             * @request PUT:/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release
             * @response `default` `void` Nothing.
             */
            releaseManualInboundDocumentResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/inbounddeliveries/".concat(id, "/release"), method: "PUT", type: ContentType.Json }, params));
            },
            /**
             * @description <p> A released manual inbound document might have connected outbounds, and can only be force voided. Note that a force void operation might cause a negative stock. <p> The following error codes might be thrown: <dl> <dt>void_linked_outbound</dt> <dd>If this document has any outbounds transactions connected to it.</dd> </dl>
             *
             * @tags ManualInboundDocumentResource
             * @name VoidDocument
             * @summary Void manual inbound document
             * @request PUT:/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void
             * @response `default` `void` Nothing.
             */
            voidDocument: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/inbounddeliveries/".concat(id, "/void"), method: "PUT", query: query, type: ContentType.Json }, params));
            },
            /**
             * @description <p> The <code>id</code> is set automatically.
             *
             * @tags ManualOutboundDocumentResource
             * @name CreateManualOutboundDocumentResource
             * @summary Create manual outbound document
             * @request POST:/api/warehouse/deliveries-v1/outbounddeliveries
             * @response `200` `ManualOutboundDocument` the <code>ManualOutboundDocument</code> document.
             */
            createManualOutboundDocumentResource: function (manualOutboundDocument, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/outbounddeliveries", method: "POST", body: manualOutboundDocument, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ManualOutboundDocumentResource
             * @name GetManualOutboundDocumentResource
             * @summary Get manual outbound document
             * @request GET:/api/warehouse/deliveries-v1/outbounddeliveries/{id}
             * @response `200` `ManualOutboundDocument` the <code>ManualOutboundDocument</code> document.
             */
            getManualOutboundDocumentResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/outbounddeliveries/".concat(id), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> HTTP code 400 cannot_modify_released_document HTTP code 400 document_is_voided Document is voided. HTTP code 404 not found
             *
             * @tags ManualOutboundDocumentResource
             * @name UpdateManualOutboundDocumentResource
             * @summary Update manual outbound document
             * @request PUT:/api/warehouse/deliveries-v1/outbounddeliveries/{id}
             * @response `200` `ManualOutboundDocument` the <code>ManualOutboundDocument</code> document.
             */
            updateManualOutboundDocumentResource: function (id, manualOutboundDocument, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/outbounddeliveries/".concat(id), method: "PUT", body: manualOutboundDocument, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> When a Manual Outbound has been released, it is locked. The <code>note</code> field can still be updated using this endpoint.
             *
             * @tags ManualOutboundDocumentResource
             * @name UpdateNoteManualOutboundDocumentResource
             * @summary Update note on manual outbound document
             * @request PATCH:/api/warehouse/deliveries-v1/outbounddeliveries/{id}
             * @response `default` `void` Nothing.
             */
            updateNoteManualOutboundDocumentResource: function (id, manualOutboundDocumentPatch, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/outbounddeliveries/".concat(id), method: "PATCH", body: manualOutboundDocumentPatch, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags ManualOutboundDocumentResource
             * @name VoidDocumentManualOutboundDocumentResource
             * @summary Void manual outbound document
             * @request PUT:/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void
             * @response `default` `void` Nothing.
             */
            voidDocumentManualOutboundDocumentResource: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/outbounddeliveries/".concat(id, "/void"), method: "PUT", query: query, type: ContentType.Json }, params));
            },
            /**
             * @description <p> The document will be locked and bookkept. <p> The following error codes might be thrown: <dl> <dt>cannot_release_later_than_current_date</dt> <dd>Document date cannot be in the future.</dd> <dt>document_is_voided</dt> <dd>Document is voided.</dd> <dt>period_locked</dt> <dd>Document date is within a locked bookkeeping period.</dd> </dl>
             *
             * @tags ManualOutboundDocumentResource
             * @name ReleaseManualOutboundDocumentResource
             * @summary Release manual outbound document
             * @request PUT:/api/warehouse/deliveries-v1/outbounddeliveries/{id}/release
             * @response `default` `void` Nothing.
             */
            releaseManualOutboundDocumentResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/deliveries-v1/outbounddeliveries/".concat(id, "/release"), method: "PUT", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags CustomDocumentTypeResource
             * @name GetAllCustomDocumentTypeResource
             * @summary List custom document types
             * @request GET:/api/warehouse/documentdeliveries/custom/documenttypes-v1
             * @response `200` `CustomDocumentType` A list of <code>CustomDocumentTypes</code>
             */
            getAllCustomDocumentTypeResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/documenttypes-v1", method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Create type, if it doesn't already exists. Note that new custom document types are created automatically when you create custom documents, so normally you do not need to call this method. Throws HTTP 400 <code>referenceTypeNotAllowed</code> if the name of the type is not allowed.
             *
             * @tags CustomDocumentTypeResource
             * @name CreateCustomDocumentTypeResource
             * @summary Create custom document type
             * @request POST:/api/warehouse/documentdeliveries/custom/documenttypes-v1
             * @response `200` `number` `1` if created, else `0` if type already exists.
             */
            createCustomDocumentTypeResource: function (customDocumentType, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/documenttypes-v1", method: "POST", body: customDocumentType, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CustomDocumentTypeResource
             * @name GetCustomDocumentTypeResource
             * @summary Get custom document type
             * @request GET:/api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}
             * @response `200` `CustomDocumentType` A <code>CustomDocumentType</code>
             */
            getCustomDocumentTypeResource: function (type, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/documenttypes-v1/".concat(type), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CustomInboundDocumentResource
             * @name GetCustomInboundDocumentResource
             * @summary Get custom inbound document
             * @request GET:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}
             * @response `200` `CustomInboundDocument` The <code>CustomInboundDocument</code>.
             */
            getCustomInboundDocumentResource: function (type, id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/inbound-v1/".concat(type, "/").concat(id), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CustomInboundDocumentResource
             * @name Save
             * @summary Save custom inbound document
             * @request PUT:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}
             * @response `200` `CustomInboundDocument` the stored <code>CustomInboundDocument</code>
             */
            save: function (type, id, document, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/inbound-v1/".concat(type, "/").concat(id), method: "PUT", body: document, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description The document will be locked and bookkept. The inbound deliveries will affect available stock.
             *
             * @tags CustomInboundDocumentResource
             * @name ReleaseCustomInboundDocumentResource
             * @summary Release custom inbound document
             * @request PUT:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release
             * @response `default` `void` no content
             */
            releaseCustomInboundDocumentResource: function (type, id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/inbound-v1/".concat(type, "/").concat(id, "/release"), method: "PUT", type: ContentType.Json }, params));
            },
            /**
             * @description Voiding a document will undo the possible stock changes that the document had made, note that the document and the transactions created are not deleted. Some limitations apply, see below.
             *
             * @tags CustomInboundDocumentResource
             * @name VoidDocumentCustomInboundDocumentResource
             * @summary Void custom inbound document
             * @request PUT:/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void
             * @response `default` `void` no content
             */
            voidDocumentCustomInboundDocumentResource: function (type, id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/inbound-v1/".concat(type, "/").concat(id, "/void"), method: "PUT", query: query, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags CustomOutboundDocumentResource
             * @name GetCustomOutboundDocumentResource
             * @summary Get custom outbound document
             * @request GET:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}
             * @response `200` `CustomOutboundDocument` the fetched <code>CustomOutboundDocument</code>
             */
            getCustomOutboundDocumentResource: function (type, id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/outbound-v1/".concat(type, "/").concat(id), method: "GET", type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <br> If type is not known, it will be registered as belonging to the OUTBOUND category.<br> If type is an existing custom document type of category INBOUND an error is thrown.<br> If type is invalid an error is thrown.<br>
             *
             * @tags CustomOutboundDocumentResource
             * @name SaveCustomOutboundDocumentResource
             * @summary Save a custom outbound document
             * @request PUT:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}
             * @response `200` `CustomOutboundDocument` the stored <code>CustomOutboundDocument</code>
             */
            saveCustomOutboundDocumentResource: function (type, id, document, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/outbound-v1/".concat(type, "/").concat(id), method: "PUT", body: document, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CustomOutboundDocumentResource
             * @name ReleaseCustomOutboundDocumentResource
             * @summary Release custom outbound document
             * @request PUT:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release
             * @response `default` `void` no content
             */
            releaseCustomOutboundDocumentResource: function (type, id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/outbound-v1/".concat(type, "/").concat(id, "/release"), method: "PUT", type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags CustomOutboundDocumentResource
             * @name VoidDocumentCustomOutboundDocumentResource
             * @summary Void custom outbound document
             * @request PUT:/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void
             * @response `default` `void` no content
             */
            voidDocumentCustomOutboundDocumentResource: function (type, id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/documentdeliveries/custom/outbound-v1/".concat(type, "/").concat(id, "/void"), method: "PUT", query: query, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags ProductionOrderResource
             * @name GetAllProductionOrderResource
             * @summary List production orders
             * @request GET:/api/warehouse/productionorders-v1
             * @response `200` `ProductionOrder` A list of <code>ProductionOrders</code>.
             */
            getAllProductionOrderResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description <p> Set <code>itemId</code> to the item to be produced. <p> Set <code>quantity</code> to number of units to produce. <p> Set <code>startDate</code> to production start state. <p> ProductionState is set to <code>reserved</code> by default. It can also be <code>registered</code>. Then no reservations will be made (no quantities will be assigned to the <code>packageItems</code> yet). <p> Setting <code>outboundStockPointId</code> (where the <code>packageItems</code> will be taken from), and <code>inboundStockPointId</code> (where the produced item will be put) is mandatory multiple stockpoints has been activated in the warehouse settings. <p> Before the document is released, the <code>productionDate</code> must be set. <p> The <code>packageItems</code> to include is easiest to get by calling the method <code>getRequiredProductionParts</code>.
             *
             * @tags ProductionOrderResource
             * @name CreateProductionOrderResource
             * @summary Create a new production order
             * @request POST:/api/warehouse/productionorders-v1
             * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
             */
            createProductionOrderResource: function (productionOrder, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1", method: "POST", body: productionOrder, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ProductionOrderResource
             * @name GetProductionOrderResource
             * @summary Get Production Order document
             * @request GET:/api/warehouse/productionorders-v1/{id}
             * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
             */
            getProductionOrderResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description <p> Note that you must submit the full Production Order document when updating.
             *
             * @tags ProductionOrderResource
             * @name UpdateProductionOrderResource
             * @summary Update a production order
             * @request PUT:/api/warehouse/productionorders-v1/{id}
             * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
             */
            updateProductionOrderResource: function (id, productionOrder, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1/".concat(id), method: "PUT", body: productionOrder, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> When a Production Order has been released it is locked. However, the <code>note</code> field can still be updated using this endpoint.
             *
             * @tags ProductionOrderResource
             * @name UpdateNoteProductionOrderResource
             * @summary Update the note of a production order
             * @request PATCH:/api/warehouse/productionorders-v1/{id}
             * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
             */
            updateNoteProductionOrderResource: function (id, productionOrderPatch, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1/".concat(id), method: "PATCH", body: productionOrderPatch, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> A released production order might have connected outbounds, and can only be force voided. Note that a force void operation might cause a negative stock.
             *
             * @tags ProductionOrderResource
             * @name VoidProductionOrder
             * @summary Void a production order
             * @request PUT:/api/warehouse/productionorders-v1/void/{id}
             * @response `default` `void` Nothing.
             */
            voidProductionOrder: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1/void/".concat(id), method: "PUT", query: query }, params));
            },
            /**
             * @description <p> The document will be locked and bookkept. <p> The following error codes might be thrown: <dl> <dt>PRODUCTION_DATE_IS_EMPTY</dt> <dd>Production date cannot be empty.</dd> <dt>CANNOT_RELEASE_AFTER_CURRENT_DATE</dt> <dd>Document date cannot be in the future.</dd> <dt>DOCUMENT_IS_VOIDED</dt> <dd> The document has been voided and can no longer be modified.</dd> <dt>DOCUMENT_IS_RELEASED</dt> <dd>The document has already been released and can no longer be modified.</dd> <dt>DOCUMENT_NOT_FULLY_RESERVED</dt> <dd>The documents package items (BOMs, Bill Of Materials) has not been fully reserved (reserved quantity is not equal to total required quantity for one or more package item).</dd> </dl>
             *
             * @tags ProductionOrderResource
             * @name ReleaseProductionOrderResource
             * @summary Release a production order document
             * @request PUT:/api/warehouse/productionorders-v1/release/{id}
             * @response `200` `ProductionOrder` the <code>ProductionOrder</code> document.
             */
            releaseProductionOrderResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1/release/".concat(id), method: "PUT", format: "json" }, params));
            },
            /**
             * @description <p> If no parameters are supplied, the <code>totalQuantityRequired</code> for producing 1 unit is returned. <p> Query parameter <code>quantity</code> can optionally be supplied, which will calculate <code>totalQuantityRequired</code>. <p> If query parameter <code>id</code> is supplied, it will get the quantity from that Production Order (the <code>quantity</code> query parameter is ignored if <code>id</code> is included).
             *
             * @tags ProductionOrderResource
             * @name GetRequiredProductionParts
             * @summary Get the package items (Bill Of Materials, BOMs) for a production article
             * @request GET:/api/warehouse/productionorders-v1/billofmaterials/{itemId:.*}
             * @response `200` `PackageItem` A list of <code>PackageItems</code>.
             */
            getRequiredProductionParts: function (itemId, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/productionorders-v1/billofmaterials/{itemId:.*}", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags IncomingGoodsResource
             * @name GetIncomingGoodsResource
             * @summary Get Incoming Goods document
             * @request GET:/api/warehouse/incominggoods-v1/{id}
             * @response `200` `IncomingGoods` The <code>IncomingGoods</code> document.
             */
            getIncomingGoodsResource: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/".concat(id), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags IncomingGoodsResource
             * @name SaveIncomingGoodsResource
             * @summary Update Incoming Goods document
             * @request PUT:/api/warehouse/incominggoods-v1/{id}
             * @response `200` `IncomingGoods` The updated <code>IncomingGoods</code> document.
             */
            saveIncomingGoodsResource: function (id, incomingGoods, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/".concat(id), method: "PUT", body: incomingGoods, format: "json" }, params));
            },
            /**
             * @description Perform a partial update of an <code>IncomingGoods</code> document. The partial update will update <code>note</code>, <code>deliveryNoteId</code>, <code>supplierName</code> and <code>hasDeliveryNote</code> It is possible to perform a partial update of a released/completed (TODO: ?) document.
             *
             * @tags IncomingGoodsResource
             * @name Patch
             * @summary Partial update Incoming Goods document
             * @request PATCH:/api/warehouse/incominggoods-v1/{id}
             * @response `200` `IncomingGoods` The updated <code>IncomingGoods</code> document.
             */
            patch: function (id, incomingGoods, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/".concat(id), method: "PATCH", body: incomingGoods, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> List incoming goods documents matching the given parameters. </p> <p> Sortable fields: <code>id</code>, <code>has_delivery_note</code>, <code>delivery_note_id</code>, <code>supplier_number</code>, <code>date</code> </p>
             *
             * @tags IncomingGoodsResource
             * @name GetAllIncomingGoodsResource
             * @summary List Incoming Goods Documents
             * @request GET:/api/warehouse/incominggoods-v1/
             * @response `200` `(IncomingGoodsListRow)[]` A list of <code>IncomingGoods</code> documents.
             */
            getAllIncomingGoodsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags IncomingGoodsResource
             * @name CreateIncomingGoodsResource
             * @summary Create Incoming Goods document
             * @request POST:/api/warehouse/incominggoods-v1/
             * @response `200` `IncomingGoods` The created <code>IncomingGoods</code> document.
             */
            createIncomingGoodsResource: function (incomingGoods, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/", method: "POST", body: incomingGoods, format: "json" }, params));
            },
            /**
             * @description The document will be locked and bookkept. The inbound deliveries will affect available stock.
             *
             * @tags IncomingGoodsResource
             * @name ReleaseIncomingGoodsResource
             * @summary Release Incoming Goods document
             * @request PUT:/api/warehouse/incominggoods-v1/{id}/release
             * @response `default` `void` Nothing.
             */
            releaseIncomingGoodsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/".concat(id, "/release"), method: "PUT" }, params));
            },
            /**
             * @description Mark a released Incoming Goods document as Completed. Bookkeeping will be finalized. A Completed Incoming Goods document cannot be matched against any more Supplier Invoices.
             *
             * @tags IncomingGoodsResource
             * @name Completed
             * @summary Complete Incoming Goods document
             * @request PUT:/api/warehouse/incominggoods-v1/{id}/completed
             * @response `default` `void` Nothing.
             */
            completed: function (id, bookingDate, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/".concat(id, "/completed"), method: "PUT", body: bookingDate, type: ContentType.Json }, params));
            },
            /**
             * @description Void a document. If an Incoming Goods document has been Completed, or matched against Supplier Invoice, it cannot be voided.
             *
             * @tags IncomingGoodsResource
             * @name VoidDocumentIncomingGoodsResource
             * @summary Void Incoming Goods document
             * @request PUT:/api/warehouse/incominggoods-v1/{id}/void
             * @response `default` `void` Nothing.
             */
            voidDocumentIncomingGoodsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/incominggoods-v1/".concat(id, "/void"), method: "PUT" }, params));
            },
            /**
             * @description <p> List purchase orders matching the given parameters. </p> <p> Sortable fields: <code>id</code>, <code>supplier_number</code>, <code>order_date</code>, <code>internal_reference</code>, <code>response_state</code>, <code>delivery_date</code> </p>
             *
             * @tags PurchaseOrderResource
             * @name GetAllPurchaseOrderResource
             * @summary List Purchase Orders
             * @request GET:/api/warehouse/purchaseorders-v1
             * @response `200` `PurchaseOrder` A list of <code>PurchaseOrders</code>.
             */
            getAllPurchaseOrderResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name CreatePurchaseOrderResource
             * @summary Create Purchase Order
             * @request POST:/api/warehouse/purchaseorders-v1
             * @response `200` `PurchaseOrder` The created <code>PurchaseOrder</code> document.
             */
            createPurchaseOrderResource: function (purchaseOrder, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1", method: "POST", body: purchaseOrder, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name GetCsvReport
             * @summary Get CSV list of Purchase Orders
             * @request GET:/api/warehouse/purchaseorders-v1/csv
             * @response `200` `string` A list of <code>PurchaseOrders</code>.
             */
            getCsvReport: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/csv", method: "GET", query: query }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name UpdateResponseState
             * @summary Update response state
             * @request PUT:/api/warehouse/purchaseorders-v1/{id}/response
             * @response `200` `PurchaseOrder` The updated <code>PurchaseOrder</code>
             */
            updateResponseState: function (id, responseStateChange, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/response"), method: "PUT", body: responseStateChange, format: "json" }, params));
            },
            /**
             * @description <p> The purchase order will be treated as fully received. Any remaining quantity will be ignored.
             *
             * @tags PurchaseOrderResource
             * @name SetManuallyCompleted
             * @summary Manually complete Purchase Order
             * @request PUT:/api/warehouse/purchaseorders-v1/{id}/complete
             * @response `default` `void` Nothing.
             */
            setManuallyCompleted: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/complete"), method: "PUT" }, params));
            },
            /**
             * @description <p> The dropship order will be treated as fully received. Any remaining quantity will be ignored.
             *
             * @tags PurchaseOrderResource
             * @name SetDropshipManuallyCompleted
             * @summary Manually complete dropship order
             * @request PUT:/api/warehouse/purchaseorders-v1/{id}/dropshipcomplete
             * @response `200` `ReleaseParentOrder` <code>ReleaseParentOrder</code> status for release of parent order
             */
            setDropshipManuallyCompleted: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/dropshipcomplete"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name BatchUpdateResponseState
             * @summary Update response states
             * @request PUT:/api/warehouse/purchaseorders-v1/response
             * @response `200` `PurchaseOrder` a list of the updated <code>PurchaseOrders</code>
             */
            batchUpdateResponseState: function (responseStateChange, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/response", method: "PUT", query: query, body: responseStateChange, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name GetPurchaseOrderResource
             * @summary Get Purchase Order
             * @request GET:/api/warehouse/purchaseorders-v1/{id}
             * @response `200` `PurchaseOrder` The <code>PurchaseOrder</code>.
             */
            getPurchaseOrderResource: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name UpdatePurchaseOrderResource
             * @summary Update Purchase Order
             * @request PUT:/api/warehouse/purchaseorders-v1/{id}
             * @response `200` `PurchaseOrder` The updated <code>PurchaseOrder</code>.
             */
            updatePurchaseOrderResource: function (id, purchaseOrder, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id), method: "PUT", body: purchaseOrder, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Perform a partial update of a purchase order, see <code>PartialPurchaseOrder</code> for possible fields that are updateable.
             *
             * @tags PurchaseOrderResource
             * @name UpdatePartial
             * @summary Partial update Purchase Order
             * @request PATCH:/api/warehouse/purchaseorders-v1/{id}/partial
             * @response `200` `PartialPurchaseOrder` the updated <code>PartialPurchaseOrder</code>
             */
            updatePartial: function (id, changes, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/partial"), method: "PATCH", body: changes, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Sends the purchase order with the specified <code>id</code> to the recipient and sets the purchase order state to SENT
             *
             * @tags PurchaseOrderResource
             * @name SendPurchaseOrder
             * @summary Send purchase order via email
             * @request POST:/api/warehouse/purchaseorders-v1/{id}/send
             * @response `default` `void` the <code>PurchaseOrder</code>
             */
            sendPurchaseOrder: function (id, settings, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/send"), method: "POST", body: settings, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name SendPurchaseOrders
             * @summary Sends multiple purchase orders via email
             * @request POST:/api/warehouse/purchaseorders-v1/sendpurchaseorders
             * @response `default` `void` Nothing.
             */
            sendPurchaseOrders: function (purchaseOrderIds, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/sendpurchaseorders", method: "POST", body: purchaseOrderIds, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags PurchaseOrderResource
             * @name VoidDocumentPurchaseOrderResource
             * @summary Void Purchase Order
             * @request PUT:/api/warehouse/purchaseorders-v1/{id}/void
             * @response `default` `void` Nothing.
             */
            voidDocumentPurchaseOrderResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/void"), method: "PUT" }, params));
            },
            /**
             * @description <p> Get a list of <code>DocumentReference</code> of linked/connected purchase orders to incoming goods and/or invoice document.
             *
             * @tags PurchaseOrderResource
             * @name GetMatchedDocuments
             * @summary List matched documents
             * @request GET:/api/warehouse/purchaseorders-v1/{id}/matches
             * @response `200` `DocumentReference` list of document references
             */
            getMatchedDocuments: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/matches"), method: "GET", format: "json" }, params));
            },
            /**
             * @description <p> Get notes for a purchase order.
             *
             * @tags PurchaseOrderResource
             * @name GetAttachedNotes
             * @summary Get notes
             * @request GET:/api/warehouse/purchaseorders-v1/{id}/notes
             * @response `200` `PurchaseOrderRowNote` A list of <code>PurchaseOrderRowNotes</code>.
             */
            getAttachedNotes: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/purchaseorders-v1/".concat(id, "/notes"), method: "GET", format: "json" }, params));
            },
            /**
             * @description <p> Get stock balance for each stockpoint. <p> Returns a list of <code>itemId</code>, <code>stockPointCode</code>, <code>availableStock</code>, <code>inStock</code>. <p> (The difference between <code>availableStock</code> and <code>inStock</code> is the reserved amount.)
             *
             * @tags StockStatusResource
             * @name GetStockBalance
             * @summary Get stock balance
             * @request GET:/api/warehouse/status-v1/stockbalance
             * @response `200` `StockBalance` A list of <code>StockBalances</code>.
             */
            getStockBalance: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/status-v1/stockbalance", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description <p> Sortable fields: <code>id</code>, <code>name</code>, <code>date</code>, <code>responsible</code>, <code>state</code> </p>
             *
             * @tags StockTakingResource
             * @name GetAllStockTakingResource
             * @summary List stock takings
             * @request GET:/api/warehouse/stocktaking-v1
             * @response `200` `StockTaking` A list of <code>StockTakings</code>.
             */
            getAllStockTakingResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description <p> Create a new Stock Taking document. The only mandatory fields are <code>name</code> and <code>responsible</code>. <code>state</code> will be set to <code>planning</code> for a newly created document. <p> The <code>date</code>-field is not mandatory for documents in state <code>planning</code>. However, when you update the state to <code>started</code> you have to provide a date. <code>name</code> is a descriptive name of the stock taking. <code>responsible</code> is the name of the responsible for the stock taking. <code>rows</code> are added after creation by using the addRows-method. <code>projectId</code> and <code>costCenterCode</code> are used for book-keeping, when the Stock Taking document is released. <p> The field <code>usingStockPoints</code> is set from Warehouse system settings upon creation. If multiple stockpoints is used, then the rows will be per item-stockPoint-stockLocation. If multiple stockpoints is NOT used, then the rows will be per item-stockLocation.
             *
             * @tags StockTakingResource
             * @name CreateStockTakingResource
             * @summary Create stock taking
             * @request POST:/api/warehouse/stocktaking-v1
             * @response `200` `StockTaking` the created stock taking
             */
            createStockTakingResource: function (stockTaking, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1", method: "POST", body: stockTaking, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags StockTakingResource
             * @name GetStockTakingResource
             * @summary Get Stock Taking document
             * @request GET:/api/warehouse/stocktaking-v1/{id}
             * @response `200` `StockTaking` The <code>StockTaking</code> document.
             */
            getStockTakingResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * @description <p> Updates can only be done when state is <code>planning</code> or <code>started</code>. <p> All updatable fields (<code>date</code>, <code>name</code>, <code>responsible</code>, <code>state</code>, <code>sortingId</code>, <code>costCenterCode</code>, <code>projectId</code>) in the document head are set to supplied values. <p> You cannot set <code>state</code> to <code>completed</code> or <code>voided</code>. Use endpoints release or void for this. <p> The <code>date</code>-field is mandatory for documents in state <code>started</code>. <p> When state is <code>started</code> you use this endpoint for setting the stock taken quantity. Only existing rows can be updated - no new rows will be created (use the addRows endpoint for this). Only the supplied rows will be updated. I.e. you don't have to send in <strong>all</strong> document rows - just supply the rows you want to set stockTakenQuantity for. Just make sure to always include all the fields from the document head as mentioned above. <p> The mandatory fields on the (optionally supplied) rows are: <code>itemId</code>, <code>stockPointId</code>, <code>stockLocationId</code>. Fields <code>countedBy</code> and <code>stockTakenQuantity</code> are technically not mandatory, but will be set to null if you don't supply them.
             *
             * @tags StockTakingResource
             * @name UpdateStockTakingResource
             * @summary Update a stock taking
             * @request PUT:/api/warehouse/stocktaking-v1/{id}
             * @response `200` `StockTaking` The <code>StockTaking</code> document.
             */
            updateStockTakingResource: function (id, stockTaking, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id), method: "PUT", body: stockTaking, format: "json" }, params));
            },
            /**
             * @description <p> Permanently deletes a Stock Taking document and its rows. <p> Only for documents in state <code>planning</code> and <code>started</code>.
             *
             * @tags StockTakingResource
             * @name DeleteStockTaking
             * @summary Delete Stock Taking document
             * @request DELETE:/api/warehouse/stocktaking-v1/{id}
             * @response `default` `void` Nothing.
             */
            deleteStockTaking: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id), method: "DELETE" }, params));
            },
            /**
             * @description <p> The document will be locked and bookkept. The Stock Taking document state will be set to <code>completed</code>. The stock amount will be adjusted according to the stock taken quantity.
             *
             * @tags StockTakingResource
             * @name ReleaseStockTakingResource
             * @summary Release Stock Taking document
             * @request PUT:/api/warehouse/stocktaking-v1/{id}/release
             * @response `default` `void` Nothing.
             */
            releaseStockTakingResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/release"), method: "PUT" }, params));
            },
            /**
             * @description <p> Sets the Stock Taking document state to <code>voided</code>. <p> Only documents in state <code>planning</code> and <code>started</code> can be voided. A <code>completed</code> document may not be voided.
             *
             * @tags StockTakingResource
             * @name VoidStockTaking
             * @summary Void Stock Taking document
             * @request PUT:/api/warehouse/stocktaking-v1/{id}/void
             * @response `default` `void` Nothing.
             */
            voidStockTaking: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/void"), method: "PUT" }, params));
            },
            /**
             * @description <p> A candidate row is a combination of itemId, stockPointId and stockLocationId that can be added to the Stock Taking document. <p> Rows already added to the Stock Taking are excluded from this list.
             *
             * @tags StockTakingResource
             * @name GetCandidateRows
             * @summary Get candidate rows
             * @request GET:/api/warehouse/stocktaking-v1/{id}/candidates
             * @response `200` `StockTakingRow` A list of <code>StockTakingRows</code>.
             */
            getCandidateRows: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/candidates"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags StockTakingResource
             * @name GetRows
             * @summary Get Stock Taking Rows
             * @request GET:/api/warehouse/stocktaking-v1/{id}/rows
             * @response `200` `StockTakingRow` A list of <code>StockTakingRows</code>.
             */
            getRows: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/rows"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description <p> Add rows to a stock taking. If you add an already existing row noting happens.
             *
             * @tags StockTakingResource
             * @name AddStockTakingRows
             * @summary Add rows
             * @request POST:/api/warehouse/stocktaking-v1/{id}/rows
             * @response `default` `void` Nothing.
             */
            addStockTakingRows: function (id, rows, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/rows"), method: "POST", body: rows, type: ContentType.Json }, params));
            },
            /**
             * @description <p> Remove all rows matching the filter parameters from the Stock Taking document.
             *
             * @tags StockTakingResource
             * @name DeleteStockTakingRowByFilter
             * @summary Delete rows by filter
             * @request DELETE:/api/warehouse/stocktaking-v1/{id}/rows
             * @response `200` `number` number of deleted rows
             */
            deleteStockTakingRowByFilter: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/rows"), method: "DELETE", query: query, format: "json" }, params));
            },
            /**
             * @description <p> Add all matching candidate rows to a stock taking, as specified by filters.
             *
             * @tags StockTakingResource
             * @name AddStockTakingRowsByFilter
             * @summary Add rows by filter
             * @request POST:/api/warehouse/stocktaking-v1/{id}/addrows
             * @response `200` `number` Number of added rows.
             */
            addStockTakingRowsByFilter: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/addrows"), method: "POST", query: query, format: "json" }, params));
            },
            /**
             * @description <p> Remove single row by id from the Stock Taking document.
             *
             * @tags StockTakingResource
             * @name DeleteStockTakingRow
             * @summary Delete row
             * @request DELETE:/api/warehouse/stocktaking-v1/{id}/rows/{rowId:.*}
             * @response `200` `number` Number of deleted rows (1)
             */
            deleteStockTakingRow: function (id, rowId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/warehouse/stocktaking-v1/".concat(id, "/rows/{rowId:.*}"), method: "DELETE", format: "json" }, params));
            },
        };
        _this.time = {
            /**
             * @description <p> <b>Response property descriptions:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of a basic common combination of article registrations. (The basic common combination means "user/purchase date/customer/project/cost center", which leads to a dialog with several article registrations.)<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>purchaseDate</i></b> - The date on which the article is purchased or registered for charging.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>ownerId</i></b> - The user ID who creates the basic common combination.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>version</i></b> - The version of the basic common combination (article dialog) being updated, which is used for handling the concurrency issue.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>registrationType</i></b> - It is always "ARTICLE" for article list endpoint.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b>Sub-Class - ArticleRegistration:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>id</i></b> - The unique id of an article registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>registrationId</i></b> - The id of the basic common combination.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>orderIndex</i></b> - the order index for the article registration in regard of the common combination.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>ownerId</i></b> - The user ID who owns the article registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>totalQuantity</i></b> - The quantity of the article.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitPrice</i></b> - The unit price connected to the article registration, which might be locked on an invoice/order basis or for non-invoiceable.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>unitCost</i></b> - The unit cost connected to the article registration, which might be locked on an invoice/order basis.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>nonInvoiceable</i></b> - If the article registration would be ignored for charging or not.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>note</i></b> - The note on the article registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentId</i></b> - The document ID which includes the article registration and is created in Invoicing application.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        <b><i>documentType</i></b> - The document type which could be "invoice" or "order". </p>
             *
             * @tags ArticlesResource
             * @name List
             * @summary Get full article registrations that match filter
             * @request GET:/api/time/articles-v1
             * @response `200` `(BaseArticleRegistration)[]` list of article registrations  <code>BaseArticleRegistration</code>
             */
            list: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/time/articles-v1", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description <p> <b>Response property descriptions:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>id</i></b> - The unique id of the registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>userId</i></b> - The user ID who owns the registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedDate</i></b> - The date for which the registration is created.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>workedHours</i></b> - The time spent, or the time of absence.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceText</i></b> - The text to be included in the invoice/order basis which would be used to create an invoice/order.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>note</i></b> - The note on the registration.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>chargeHours</i></b> - The time to be invoiced, or 0 for the absence, or locked for non-invoiceable.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>childId</i></b> - The child ID related to the absence registration of parental leave (FPE), which comes from Payroll application.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>nonInvoiceable</i></b> - If the registration would be ignored for charging or not.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentId</i></b> - The document ID which includes the registration and is created in Invoicing application.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>documentType</i></b> - The document type which could be "invoice" or "order".<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitCost</i></b> - The unit cost from the registration owner who takes the work.<br/> &nbsp;&nbsp;&nbsp;&nbsp;    <b><i>unitPrice</i></b> - The unit price for the service on the registration, which comes in priority from "invoice/order basis", "price group" or "service". <p>
             *
             * @tags RegistrationsResource
             * @name ListRegistrationsResource
             * @summary Get time/absence registrations that match filter
             * @request GET:/api/time/registrations-v2
             * @response `200` `(DetailedRegistration)[]` list of registrations <code>DetailedRegistration</code> <b>Note</b>: used by mobile client and in detailed chargeable units
             */
            listRegistrationsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/time/registrations-v2", method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.absencetransactions = {
            /**
             * @description Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.
             *
             * @tags AbsenceTransactionsResource
             * @name ListAbsenceTransactionsResource
             * @summary Lists all absence transactions
             * @request GET:/3/absencetransactions
             * @response `200` `AbsenceTransactionListItemWrap` a list of absence transactions
             */
            listAbsenceTransactionsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/absencetransactions", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AbsenceTransactionsResource
             * @name CreateAbsenceTransactionsResource
             * @summary Create a new absence transaction
             * @request POST:/3/absencetransactions
             * @response `200` `AbsenceTransactionSingleItemWrap` the created absence transaction
             */
            createAbsenceTransactionsResource: function (absenceTransactionsPayload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/absencetransactions", method: "POST", body: absenceTransactionsPayload, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a specific transaction
             *
             * @tags AbsenceTransactionsResource
             * @name GetAbsenceTransactionsResource
             * @summary Retrieve a specific absence transaction
             * @request GET:/3/absencetransactions/{id}
             * @response `200` `AbsenceTransactionSingleItemWrap` the absence transaction
             */
            getAbsenceTransactionsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/absencetransactions/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AbsenceTransactionsResource
             * @name UpdateAbsenceTransactionsResource
             * @summary Update a single absence transaction
             * @request PUT:/3/absencetransactions/{id}
             * @response `200` `AbsenceTransactionSingleItemWrap` the updated absence transaction
             */
            updateAbsenceTransactionsResource: function (id, absenceTransactionsPayload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/absencetransactions/".concat(id), method: "PUT", body: absenceTransactionsPayload, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AbsenceTransactionsResource
             * @name Remove
             * @summary Delete an absence transaction
             * @request DELETE:/3/absencetransactions/{id}
             * @response `200` `AbsenceTransactionSingleItemWrap` empty
             */
            remove: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/absencetransactions/".concat(id), method: "DELETE", format: "json" }, params));
            },
            /**
             * @description Retrieves a list of absence transactions for an employee on a specific date and cause code.
             *
             * @tags AbsenceTransactionsResource
             * @name GetAbsenceTransactionsResource1
             * @summary Retrieve absence transactions
             * @request GET:/3/absencetransactions/{EmployeeId}/{Date}/{Code}
             * @response `200` `AbsenceTransactionListItemWrap` a list of absence transactions
             */
            getAbsenceTransactionsResource1: function (employeeId, date, code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/absencetransactions/".concat(employeeId, "/").concat(date, "/").concat(code), method: "GET", format: "json" }, params));
            },
        };
        _this.accountcharts = {
            /**
             * @description Retrieves a list of all the available account charts.
             *
             * @tags AccountChartsResource
             * @name ListAccountChartsResource
             * @summary List all account charts
             * @request GET:/3/accountcharts
             * @response `200` `AccountChartWrap` a list of account charts
             */
            listAccountChartsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/accountcharts", method: "GET", format: "json" }, params));
            },
        };
        _this.accounts = {
            /**
             * @description Retrieves the details of an account. You need to supply the unique account number that was returned when the account was created or retrieved from the list of accounts.
             *
             * @tags AccountsResource
             * @name GetAccountsResource
             * @summary Retrieve an account
             * @request GET:/3/accounts/{Number}
             * @response `200` `AccountSingleItemWrap` the existing account
             */
            getAccountsResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/accounts/".concat(number), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates the specified account with the values provided in the properties. Any property not provided will be left unchanged. Note that even though the account number is writeable you can&acute;t change the number of an existing account.
             *
             * @tags AccountsResource
             * @name UpdateAccountsResource
             * @summary Update an account
             * @request PUT:/3/accounts/{Number}
             * @response `200` `AccountSingleItemWrap` the updated account
             */
            updateAccountsResource: function (number, accountPayload, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/accounts/".concat(number), method: "PUT", query: query, body: accountPayload, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description The accounts are returned sorted by account number with the lowest number appearing first.
             *
             * @tags AccountsResource
             * @name ListAccountsResource
             * @summary List all accounts
             * @request GET:/3/accounts/
             * @response `200` `AccountListItemWrap` list of accounts
             */
            listAccountsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/accounts/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description The created account will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AccountsResource
             * @name CreateAccountsResource
             * @summary Create an account
             * @request POST:/3/accounts/
             * @response `200` `AccountSingleItemWrap` the created account
             */
            createAccountsResource: function (accountPayload, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/accounts/", method: "POST", query: query, body: accountPayload, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.archive = {
            /**
             * @description If no path is provided the root will be returned. Providing fileId will return given file from fileattachments.
             *
             * @tags ArchiveResource
             * @name GetFolder
             * @summary Retrieve folder or file
             * @request GET:/3/archive/
             * @response `200` `FolderWrap` a single folder
             */
            getFolder: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/archive/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description If not path or folderId is provided, the file will be uploaded to the root directory.
             *
             * @tags ArchiveResource
             * @name UploadFile
             * @summary Upload a file to a specific subdirectory
             * @request POST:/3/archive/
             * @response `200` `FolderFileRowWrap` the uploaded file
             */
            uploadFile: function (data, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/archive/", method: "POST", query: query, body: data, type: ContentType.FormData, format: "json" }, params));
            },
            /**
             * @description Please note that removing a folder will also resulting in removal of all the contents within!
             *
             * @tags ArchiveResource
             * @name RemoveByPath
             * @summary Remove files
             * @request DELETE:/3/archive/
             * @response `default` `void` empty
             */
            removeByPath: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/archive/", method: "DELETE", query: query }, params));
            },
            /**
             * @description Providing fileId will return given file from fileattachments.
             *
             * @tags ArchiveResource
             * @name GetFileById
             * @summary Retrieve a single file
             * @request GET:/3/archive/{id}
             * @response `200` `string` a single file
             */
            getFileById: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/archive/".concat(id), method: "GET", query: query }, params));
            },
            /**
             * No description
             *
             * @tags ArchiveResource
             * @name RemoveById
             * @summary Delete a single file
             * @request DELETE:/3/archive/{id}
             * @response `default` `void` empty
             */
            removeById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/archive/".concat(id), method: "DELETE" }, params));
            },
        };
        _this.articlefileconnections = {
            /**
             * @description The article file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
             *
             * @tags ArticleFileConnectionsResource
             * @name ListArticleFileConnectionsResource
             * @summary Retrieve a list of article file connections
             * @request GET:/3/articlefileconnections/
             * @response `200` `ArticleFileConnectionListItemWrap` a list of article file connections.
             */
            listArticleFileConnectionsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articlefileconnections/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ArticleFileConnectionsResource
             * @name CreateArticleFileConnectionsResource
             * @summary Create an article file connection
             * @request POST:/3/articlefileconnections/
             * @response `200` `ArticleFileConnectionWrap` the created article file connection
             */
            createArticleFileConnectionsResource: function (articleFileConnection, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articlefileconnections/", method: "POST", body: articleFileConnection, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ArticleFileConnectionsResource
             * @name GetArticleFileConnectionsResource
             * @summary Retrieve a single article file connection
             * @request GET:/3/articlefileconnections/{FileId}
             * @response `200` `ArticleFileConnectionWrap` the existing article file connection
             */
            getArticleFileConnectionsResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articlefileconnections/".concat(fileId), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ArticleFileConnectionsResource
             * @name RemoveArticleFileConnectionsResource
             * @summary Remove an article file connection
             * @request DELETE:/3/articlefileconnections/{FileId}
             * @response `default` `void` empty
             */
            removeArticleFileConnectionsResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articlefileconnections/".concat(fileId), method: "DELETE" }, params));
            },
        };
        _this.articles = {
            /**
             * @description Retrieves the details of an article. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.
             *
             * @tags ArticlesResource_articles
             * @name GetArticlesResourceArticles
             * @summary Retrieve an article
             * @request GET:/3/articles/{ArticleNumber}
             * @response `200` `ArticleWrap` the existing article
             */
            getArticlesResourceArticles: function (articleNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articles/".concat(articleNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description Updates the specified article with the values provided in the properties. Any property not provided will be left unchanged. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles. Note that even though the article number is writeable you can not change the number of an existing article.
             *
             * @tags ArticlesResource_articles
             * @name UpdateArticlesResourceArticles
             * @summary Update an article
             * @request PUT:/3/articles/{ArticleNumber}
             * @response `200` `ArticleWrap` the updated article
             */
            updateArticlesResourceArticles: function (articleNumber, article, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articles/".concat(articleNumber), method: "PUT", body: article, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p>Deletes the article permanently.</p> <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>
             *
             * @tags ArticlesResource_articles
             * @name RemoveArticlesResourceArticles
             * @summary Delete an article
             * @request DELETE:/3/articles/{ArticleNumber}
             * @response `default` `void` empty
             */
            removeArticlesResourceArticles: function (articleNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articles/".concat(articleNumber), method: "DELETE" }, params));
            },
            /**
             * @description Retrieves a list of articles. The articles are returned sorted by article number with the lowest number appearing first.
             *
             * @tags ArticlesResource_articles
             * @name ListArticlesResourceArticles
             * @summary Retrieve a list of articles
             * @request GET:/3/articles
             * @response `200` `ArticleListItemList` list of articles
             */
            listArticlesResourceArticles: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articles", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description The created article will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags ArticlesResource_articles
             * @name CreateArticlesResourceArticles
             * @summary Create an article
             * @request POST:/3/articles
             * @response `200` `ArticleWrap` the created article
             */
            createArticlesResourceArticles: function (article, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/articles", method: "POST", body: article, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.assetfileconnections = {
            /**
             * @description The asset register can return a list of assets or a single asset. By specifying a FileId in the URL, a single asset will be returned. Not specifying a FileId will return a list of records.
             *
             * @tags AssetFileConnectionResource
             * @name GetAllAssetFileConnectionResource
             * @summary Retrieve a list of asset file connections
             * @request GET:/3/assetfileconnections
             * @response `200` `AssetFileConnectionResponse` list of asset file connections
             */
            getAllAssetFileConnectionResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assetfileconnections", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetFileConnectionResource
             * @name CreateAssetFileConnectionResource
             * @summary Create an asset file connection
             * @request POST:/3/assetfileconnections
             * @response `200` `AssetFileConnection` asset file connection
             */
            createAssetFileConnectionResource: function (assetFileConnection, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assetfileconnections", method: "POST", body: assetFileConnection, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetFileConnectionResource
             * @name DeleteAssetFileConnectionResource
             * @summary Remove an asset file connection
             * @request DELETE:/3/assetfileconnections/{fileId}
             * @response `default` `void` empty
             */
            deleteAssetFileConnectionResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assetfileconnections/".concat(fileId), method: "DELETE" }, params));
            },
        };
        _this.assets = {
            /**
             * No description
             *
             * @tags AssetsResource
             * @name ListAssetsResource
             * @summary Retrieve a list of assets
             * @request GET:/3/assets/
             * @response `200` `ListAssetWrap` list of assets
             */
            listAssetsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/", method: "GET", format: "json" }, params));
            },
            /**
             * @description The created asset will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AssetsResource
             * @name CreateAssetsResource
             * @summary Create an Asset
             * @request POST:/3/assets/
             * @response `200` `AssetSingle` asset
             */
            createAssetsResource: function (asset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/", method: "POST", body: asset, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetsResource
             * @name GetAssetsResource
             * @summary Retrieve a single asset
             * @request GET:/3/assets/{GivenNumber}
             * @response `200` `AssetSingle` asset
             */
            getAssetsResource: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/".concat(givenNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AssetsResource
             * @name ChangeManualObValue
             * @summary Change manual OB value of an Asset
             * @request PUT:/3/assets/{GivenNumber}
             * @response `200` `AssetSingle` asset
             */
            changeManualObValue: function (givenNumber, asset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/".concat(givenNumber), method: "PUT", body: asset, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description By specifying a {GivenNumber} in the URL a single &quot;Not active&quot; asset or asset with a type &quot;Not depreciable&quot; can be deleted. By specifying a {GivenNumber} in the URL a single &quot;Active&quot; or &quot;Fully depreciated&quot; assets can be voided and in this case in request body voiddate should be provided, otherwise it will use todays date.
             *
             * @tags AssetsResource
             * @name DeleteAssetsResource
             * @summary Delete or Void an Asset
             * @request DELETE:/3/assets/{GivenNumber}
             * @response `default` `void` asset
             */
            deleteAssetsResource: function (givenNumber, request, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/".concat(givenNumber), method: "DELETE", body: request, type: ContentType.Json }, params));
            },
            /**
             * @description Retrieves a list of assets to depreciate.
             *
             * @tags AssetsResource
             * @name GetDeprecationList
             * @summary Assets depreciation list
             * @request GET:/3/assets/depreciations/{ToDate}
             * @response `200` `ListAssetWrap` list of assets
             */
            getDeprecationList: function (toDate, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/depreciations/".concat(toDate), method: "GET", format: "json" }, params));
            },
            /**
             * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AssetsResource
             * @name WriteUp
             * @summary Write up an Asset
             * @request PUT:/3/assets/writeup/{GivenNumber}
             * @response `200` `AssetSingle` asset
             */
            writeUp: function (givenNumber, asset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/writeup/".concat(givenNumber), method: "PUT", body: asset, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AssetsResource
             * @name WriteDown
             * @summary Write down an Asset
             * @request PUT:/3/assets/writedown/{GivenNumber}
             * @response `200` `AssetSingle` asset
             */
            writeDown: function (givenNumber, asset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/writedown/".concat(givenNumber), method: "PUT", body: asset, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AssetsResource
             * @name Scrap
             * @summary Scrap an Asset
             * @request PUT:/3/assets/scrap/{GivenNumber}
             * @response `200` `AssetSingle` asset
             */
            scrap: function (givenNumber, asset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/scrap/".concat(givenNumber), method: "PUT", body: asset, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Partial sell or full sell of an asset.
             *
             * @tags AssetsResource
             * @name Sell
             * @summary Sell an Asset
             * @request PUT:/3/assets/sell/{GivenNumber}
             * @response `200` `AssetSingle` asset
             */
            sell: function (givenNumber, asset, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/sell/".concat(givenNumber), method: "PUT", body: asset, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description The created vouchers list will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags AssetsResource
             * @name Depreciate
             * @summary Perform a Depreciation of an Asset
             * @request POST:/3/assets/depreciate
             * @response `200` `DepreciationResponseWrap` response
             */
            depreciate: function (body, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/depreciate", method: "POST", body: body, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetTypesResource
             * @name GetAssetTypesResource
             * @summary Retrieve an asset type
             * @request GET:/3/assets/types/{id}
             * @response `200` `AssetTypeWrapSingle` asset type
             */
            getAssetTypesResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/types/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetTypesResource
             * @name CreateAssetTypesResource
             * @summary Create an asset type
             * @request POST:/3/assets/types/{id}
             * @response `200` `AssetTypeWrapSingle` response
             */
            createAssetTypesResource: function (id, createAssetRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/types/".concat(id), method: "POST", body: createAssetRequest, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetTypesResource
             * @name UpdateAssetTypesResource
             * @summary Update an asset type
             * @request PUT:/3/assets/types/{id}
             * @response `200` `AssetTypeWrapSingle` response
             */
            updateAssetTypesResource: function (id, updateAssetRequest, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/types/".concat(id), method: "PUT", body: updateAssetRequest, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AssetTypesResource
             * @name DeleteAssetTypesResource
             * @summary Delete an asset type
             * @request DELETE:/3/assets/types/{id}
             * @response `default` `void` empty
             */
            deleteAssetTypesResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/types/".concat(id), method: "DELETE" }, params));
            },
            /**
             * No description
             *
             * @tags AssetTypesResource
             * @name GetAllAssetTypesResource
             * @summary Retrieve a list of asset types
             * @request GET:/3/assets/types/
             * @response `200` `AssetTypeWrapList` asset types
             */
            getAllAssetTypesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/assets/types/", method: "GET", format: "json" }, params));
            },
        };
        _this.attendancetransactions = {
            /**
             * @description Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.
             *
             * @tags AttendanceTransactionsResource
             * @name ListAttendanceTransactionsResource
             * @summary Lists all attendance transactions
             * @request GET:/3/attendancetransactions
             * @response `200` `AttendanceTransactionListItemList` a list of attendance transactions
             */
            listAttendanceTransactionsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/attendancetransactions", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AttendanceTransactionsResource
             * @name CreateAttendanceTransactionsResource
             * @summary Create a new attendance transaction
             * @request POST:/3/attendancetransactions
             * @response `200` `AttendanceTransactionWrap` the created attendance transaction
             */
            createAttendanceTransactionsResource: function (attendanceTransaction, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/attendancetransactions", method: "POST", body: attendanceTransaction, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves a specific transaction
             *
             * @tags AttendanceTransactionsResource
             * @name GetAttendanceTransactionsResource
             * @summary Retrieve a specific attendance transaction
             * @request GET:/3/attendancetransactions/{id}
             * @response `200` `AttendanceTransactionWrap` the attendance transaction
             */
            getAttendanceTransactionsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/attendancetransactions/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AttendanceTransactionsResource
             * @name UpdateAttendanceTransactionsResource
             * @summary Update a single attendance transaction
             * @request PUT:/3/attendancetransactions/{id}
             * @response `200` `AttendanceTransactionWrap` the updated attendance transaction
             */
            updateAttendanceTransactionsResource: function (id, attendanceTransaction, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/attendancetransactions/".concat(id), method: "PUT", body: attendanceTransaction, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.companyinformation = {
            /**
             * No description
             *
             * @tags CompanyInformationResource
             * @name GetCompanyInformationResource
             * @summary Retrieve the Company Information
             * @request GET:/3/companyinformation
             * @response `200` `CompanyInfoWrap` company information
             */
            getCompanyInformationResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/companyinformation", method: "GET", format: "json" }, params));
            },
        };
        _this.settings = {
            /**
             * No description
             *
             * @tags CompanySettingsResource
             * @name GetCompanySettingsResource
             * @summary Retrieve the company settings
             * @request GET:/3/settings/company/
             * @response `200` `CompanySettingsWrap` company settings
             */
            getCompanySettingsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/settings/company/", method: "GET", format: "json" }, params));
            },
            /**
             * @description If no date is returned, no period is locked.
             *
             * @tags LockedPeriodResource
             * @name GetLockedPeriodResource
             * @summary Retrieve the locked period
             * @request GET:/3/settings/lockedperiod/
             * @response `200` `LockedPeriodWrap` the locked period
             */
            getLockedPeriodResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/settings/lockedperiod/", method: "GET", format: "json" }, params));
            },
        };
        _this.contractaccruals = {
            /**
             * @description The contract accruals register can return a list of records or a single record. By specifying a DocumentNumber in the URL, a single record will be returned. Not specifying a DocumentNumber will return a list of records.
             *
             * @tags ContractAccrualsResource
             * @name ListContractAccrualsResource
             * @summary Retrieve a list of contract accruals
             * @request GET:/3/contractaccruals/
             * @response `200` `ContractAccrualListItemList` list of contract accruals
             */
            listContractAccrualsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contractaccruals/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractAccrualsResource
             * @name CreateContractAccrualsResource
             * @summary Create a contract accrual
             * @request POST:/3/contractaccruals/
             * @response `200` `ContractAccrualWrap` the created contract accrual
             */
            createContractAccrualsResource: function (contractAccrual, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contractaccruals/", method: "POST", body: contractAccrual, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractAccrualsResource
             * @name GetContractAccrualsResource
             * @summary Retrieve a single contract accrual
             * @request GET:/3/contractaccruals/{DocumentNumber}
             * @response `200` `ContractAccrualWrap` the existing contract accrual
             */
            getContractAccrualsResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contractaccruals/".concat(documentNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractAccrualsResource
             * @name UpdateContractAccrualsResource
             * @summary Update a contract accrual
             * @request PUT:/3/contractaccruals/{DocumentNumber}
             * @response `200` `ContractAccrualWrap` the updated contract accrual
             */
            updateContractAccrualsResource: function (documentNumber, contractAccrual, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contractaccruals/".concat(documentNumber), method: "PUT", body: contractAccrual, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractAccrualsResource
             * @name RemoveContractAccrualsResource
             * @summary Remove a contract accrual
             * @request DELETE:/3/contractaccruals/{DocumentNumber}
             * @response `default` `void` empty
             */
            removeContractAccrualsResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contractaccruals/".concat(documentNumber), method: "DELETE" }, params));
            },
        };
        _this.contracts = {
            /**
             * No description
             *
             * @tags ContractsResource
             * @name GetContractsResource
             * @summary Retrieve a single contract
             * @request GET:/3/contracts/{DocumentNumber}
             * @response `200` `ContractWrap` the existing contract
             */
            getContractsResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/".concat(documentNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description Note that there are two approaches for updating the rows on a contract. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the contract needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the contract then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time a contract is updated. When the InvoiceDiscount value is set on the rows and the Contract, the value set on the Contract takes precedence over the row-level InvoiceDiscount.
             *
             * @tags ContractsResource
             * @name UpdateContractsResource
             * @summary Update a contract
             * @request PUT:/3/contracts/{DocumentNumber}
             * @response `200` `ContractWrap` the updated contract
             */
            updateContractsResource: function (documentNumber, contract, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/".concat(documentNumber), method: "PUT", body: contract, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractsResource
             * @name ListContractsResource
             * @summary Retrieve a list of contracts
             * @request GET:/3/contracts/
             * @response `200` `ContractListItemList` list of contracts
             */
            listContractsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractsResource
             * @name CreateContractsResource
             * @summary Create a contract
             * @request POST:/3/contracts/
             * @response `200` `ContractWrap` the created contract
             */
            createContractsResource: function (contract, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/", method: "POST", body: contract, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractsResource
             * @name Finish
             * @summary Set a contract as finished
             * @request PUT:/3/contracts/{DocumentNumber}/finish
             * @response `200` `ContractWrap` the updated contract
             */
            finish: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/".concat(documentNumber, "/finish"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractsResource
             * @name Createinvoice
             * @summary Create invoice from contract
             * @request PUT:/3/contracts/{DocumentNumber}/createinvoice
             * @response `200` `InvoiceWrap` created invoice
             */
            createinvoice: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/".concat(documentNumber, "/createinvoice"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractsResource
             * @name Increaseinvoicecount
             * @summary Increases the invoice count without creating an invoice
             * @request PUT:/3/contracts/{DocumentNumber}/increaseinvoicecount
             * @response `200` `ContractWrap` the updated contract
             */
            increaseinvoicecount: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracts/".concat(documentNumber, "/increaseinvoicecount"), method: "PUT", format: "json" }, params));
            },
        };
        _this.contracttemplates = {
            /**
             * @description The contract template resource can return a list of records or a single record. By specifying a TemplateNumber in the URL, a single record will be returned. Not specifying a TemplateNumber will return a list of records.
             *
             * @tags ContractTemplatesResource
             * @name ListContractTemplatesResource
             * @summary Retrieve a list of contract templates
             * @request GET:/3/contracttemplates/
             * @response `200` `ContractTemplateListItemList` list of contract templates
             */
            listContractTemplatesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracttemplates/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractTemplatesResource
             * @name CreateContractTemplatesResource
             * @summary Create a contract template
             * @request POST:/3/contracttemplates/
             * @response `200` `ContractTemplateWrap` the created contract template
             */
            createContractTemplatesResource: function (contractTemplate, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracttemplates/", method: "POST", body: contractTemplate, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractTemplatesResource
             * @name GetContractTemplatesResource
             * @summary Retrieve a single contract template
             * @request GET:/3/contracttemplates/{TemplateNumber}
             * @response `200` `ContractTemplateWrap` the existing contract template
             */
            getContractTemplatesResource: function (templateNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracttemplates/".concat(templateNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ContractTemplatesResource
             * @name UpdateContractTemplatesResource
             * @summary Update a contract template
             * @request PUT:/3/contracttemplates/{TemplateNumber}
             * @response `200` `ContractTemplateWrap` the updated contract template
             */
            updateContractTemplatesResource: function (templateNumber, contractTemplate, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/contracttemplates/".concat(templateNumber), method: "PUT", body: contractTemplate, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.costcenters = {
            /**
             * @description The cost centers register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags CostCentersResource
             * @name ListCostCentersResource
             * @summary Retrieve a list of cost centers
             * @request GET:/3/costcenters
             * @response `200` `CostCenterList` a list of cost centers
             */
            listCostCentersResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/costcenters", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CostCentersResource
             * @name CreateCostCentersResource
             * @summary Create a cost center
             * @request POST:/3/costcenters
             * @response `200` `CostCenterWrap` the created cost center
             */
            createCostCentersResource: function (costCenter, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/costcenters", method: "POST", body: costCenter, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CostCentersResource
             * @name GetCostCentersResource
             * @summary Retrieve a single cost center
             * @request GET:/3/costcenters/{Code}
             * @response `200` `CostCenterWrap` the existing cost center
             */
            getCostCentersResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/costcenters/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CostCentersResource
             * @name UpdateCostCentersResource
             * @summary Update a cost center
             * @request PUT:/3/costcenters/{Code}
             * @response `200` `CostCenterWrap` the updated cost center
             */
            updateCostCentersResource: function (code, costCenter, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/costcenters/".concat(code), method: "PUT", body: costCenter, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CostCentersResource
             * @name RemoveCostCentersResource
             * @summary Remove a cost center
             * @request DELETE:/3/costcenters/{Code}
             * @response `default` `void` empty
             */
            removeCostCentersResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/costcenters/".concat(code), method: "DELETE" }, params));
            },
        };
        _this.currencies = {
            /**
             * @description The currency register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags CurrenciesResource
             * @name ListCurrenciesResource
             * @summary Retrieve a list of currencies
             * @request GET:/3/currencies
             * @response `200` `CurrencyList` a list of currencies
             */
            listCurrenciesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/currencies", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CurrenciesResource
             * @name CreateCurrenciesResource
             * @summary Create a currency
             * @request POST:/3/currencies
             * @response `200` `CurrencyWrap` the created currency
             */
            createCurrenciesResource: function (currency, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/currencies", method: "POST", body: currency, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CurrenciesResource
             * @name GetCurrenciesResource
             * @summary Retrieve a single currency
             * @request GET:/3/currencies/{Code}
             * @response `200` `CurrencyWrap` the existing currency
             */
            getCurrenciesResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/currencies/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CurrenciesResource
             * @name UpdateCurrenciesResource
             * @summary Update a currency
             * @request PUT:/3/currencies/{Code}
             * @response `200` `CurrencyWrap` the updated currency
             */
            updateCurrenciesResource: function (code, currency, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/currencies/".concat(code), method: "PUT", body: currency, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags CurrenciesResource
             * @name RemoveCurrenciesResource
             * @summary Remove a currency
             * @request DELETE:/3/currencies/{Code}
             * @response `default` `void` the deleted currency
             */
            removeCurrenciesResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/currencies/".concat(code), method: "DELETE" }, params));
            },
        };
        _this.customerreferences = {
            /**
             * @description </p>
             *
             * @tags CustomerReferencesResource
             * @name ListCustomerReferencesResource
             * @summary Retrieve a list of customers reference rows
             * @request GET:/3/customerreferences/
             * @response `200` `CustomerReferenceWrap` list of customers reference rows
             */
            listCustomerReferencesResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customerreferences/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description </p> <p>The created customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p>
             *
             * @tags CustomerReferencesResource
             * @name CreateCustomerReferencesResource
             * @summary Create a customer reference row
             * @request POST:/3/customerreferences/
             * @response `200` `CustomerReferenceWrap` the created customer reference row
             */
            createCustomerReferencesResource: function (customerReferenceRow, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customerreferences/", method: "POST", body: customerReferenceRow, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description </p> <p>You need to supply the unique customer reference row id that was returned when the customer reference row was created or retrieved from the list of customer reference rows.</p>
             *
             * @tags CustomerReferencesResource
             * @name GetCustomerReferencesResource
             * @summary Retrieve a customer reference row
             * @request GET:/3/customerreferences/{CustomerReferenceRowId}
             * @response `200` `CustomerReferenceWrap` the existing customer reference row
             */
            getCustomerReferencesResource: function (customerReferenceRowId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customerreferences/".concat(customerReferenceRowId), method: "GET", format: "json" }, params));
            },
            /**
             * @description </p> <p>The updated customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p> <p>You need to supply the unique customer reference row id of the customer reference row that you want to update.</p> <p>Only the properties provided in the request body will be updated, properties not provided will be left unchanged.</p> <p>CustomerNumber cannot be changed by this request.</p>
             *
             * @tags CustomerReferencesResource
             * @name UpdateCustomerReferencesResource
             * @summary Update a customer reference row
             * @request PUT:/3/customerreferences/{CustomerReferenceRowId}
             * @response `200` `CustomerWrap` the updated customer reference row
             */
            updateCustomerReferencesResource: function (customerReferenceRowId, customerReferenceRow, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customerreferences/".concat(customerReferenceRowId), method: "PUT", body: customerReferenceRow, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description </p> <p>Deletes the customer reference row permanently. If everything succeeded the response will be of the type 204, No content and the response body will be empty.</p> <p>If there was any problems an error will be returned.</p> <p>You need to supply the unique customer reference row id of the customer reference row that you want to delete.</p>
             *
             * @tags CustomerReferencesResource
             * @name RemoveCustomerReferencesResource
             * @summary Delete a customer reference row
             * @request DELETE:/3/customerreferences/{CustomerReferenceRowId}
             * @response `default` `void` empty
             */
            removeCustomerReferencesResource: function (customerReferenceRowId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customerreferences/".concat(customerReferenceRowId), method: "DELETE" }, params));
            },
        };
        _this.customers = {
            /**
             * @description The customers are returned sorted by customer number with the lowest number appearing first.
             *
             * @tags CustomersResource
             * @name ListCustomersResource
             * @summary Retrieve a list of customers
             * @request GET:/3/customers/
             * @response `200` `CustomerListItemList` list of customers
             */
            listCustomersResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customers/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description The created customer will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags CustomersResource
             * @name CreateCustomersResource
             * @summary Create a customer
             * @request POST:/3/customers/
             * @response `200` `CustomerWrap` the created customer
             */
            createCustomersResource: function (customer, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customers/", method: "POST", body: customer, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description You need to supply the unique customer number that was returned when the customer was created or retrieved from the list of customers.
             *
             * @tags CustomersResource
             * @name GetCustomersResource
             * @summary Retrieve a customer
             * @request GET:/3/customers/{CustomerNumber}
             * @response `200` `CustomerWrap` the existing customer
             */
            getCustomersResource: function (customerNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customers/".concat(customerNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description <p>The updated customer will be returned if everything succeeded, if there was any problems an error will be returned.</p> <p>You need to supply the unique customer number of the customer that you want to update.</p> <p>Only the properties provided in the request body will be updated, properties not provided will left unchanged.</p>
             *
             * @tags CustomersResource
             * @name UpdateCustomersResource
             * @summary Update a customer
             * @request PUT:/3/customers/{CustomerNumber}
             * @response `200` `CustomerWrap` the updated customer
             */
            updateCustomersResource: function (customerNumber, customer, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customers/".concat(customerNumber), method: "PUT", body: customer, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes the customer permanently. If everything succeeded the response will be of the type 204 \u2013 No content and the response body will be empty. If there was any problems an error will be returned. You need to supply the unique customer number of the customer that you want to delete.
             *
             * @tags CustomersResource
             * @name RemoveCustomersResource
             * @summary Delete a customer
             * @request DELETE:/3/customers/{CustomerNumber}
             * @response `default` `void` empty
             */
            removeCustomersResource: function (customerNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/customers/".concat(customerNumber), method: "DELETE" }, params));
            },
        };
        _this.employees = {
            /**
             * @description ScheduleId, MonthlySalary and HourlyPay reflect current values, all ScheduleIds are returned in DatedSchedules and all MonthlySalary and HourlyPay pairs are returned in DatedWages.
             *
             * @tags EmployeesResource
             * @name ListEmployeesResource
             * @summary Retrieve a list of employees
             * @request GET:/3/employees/
             * @response `200` `EmployeeListItemWrap` list of employees
             */
            listEmployeesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/employees/", method: "GET", format: "json" }, params));
            },
            /**
             * @description EmployeeId is optional. If not supplied the program will generate a unique id. Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique. If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied. If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique.
             *
             * @tags EmployeesResource
             * @name CreateEmployeesResource
             * @summary Create a new employee
             * @request POST:/3/employees/
             * @response `200` `EmployeeWrap` the created employee
             */
            createEmployeesResource: function (employee, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/employees/", method: "POST", body: employee, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description ScheduleId, MonthlySalary and HourlyPay reflect current values, all ScheduleIds are returned in DatedSchedules and all MonthlySalary and HourlyPay pairs are returned in DatedWages.
             *
             * @tags EmployeesResource
             * @name GetEmployeesResource
             * @summary Retrieve a specific employee
             * @request GET:/3/employees/{EmployeeId}
             * @response `200` `EmployeeWrap` the existing employee
             */
            getEmployeesResource: function (employeeId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/employees/".concat(employeeId), method: "GET", format: "json" }, params));
            },
            /**
             * @description Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique. If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied. If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'. All FirstDay values must greater or equal to '1970-01-01' and unique.
             *
             * @tags EmployeesResource
             * @name UpdateEmployeesResource
             * @summary Update employee
             * @request PUT:/3/employees/{EmployeeId}
             * @response `200` `EmployeeWrap` the updated employee
             */
            updateEmployeesResource: function (employeeId, employee, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/employees/".concat(employeeId), method: "PUT", body: employee, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.euvatlimitregulation = {
            /**
             * No description
             *
             * @tags EUVatLimitRegulationResource
             * @name GetEuVatLimitRegulationResource
             * @summary Retrieve details about eu vat limit
             * @request GET:/3/euvatlimitregulation/
             * @response `200` `EUVatLimitRegulationWrap` eu vat limit regulation entry
             */
            getEuVatLimitRegulationResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/euvatlimitregulation/", method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.expenses = {
            /**
             * @description Retrieve expense codes.
             *
             * @tags ExpensesResource
             * @name ListExpensesResource
             * @summary Retrieve expenses
             * @request GET:/3/expenses/
             * @response `200` `ExpenseListItemWrap` expense
             */
            listExpensesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/expenses/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ExpensesResource
             * @name CreateExpensesResource
             * @summary Create an expense
             * @request POST:/3/expenses/
             * @response `200` `ExpenseWrap` expense
             */
            createExpensesResource: function (expense, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/expenses/", method: "POST", body: expense, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Retrieves expense information for specified expense.
             *
             * @tags ExpensesResource
             * @name GetExpensesResource
             * @summary Retrieve an expense
             * @request GET:/3/expenses/{ExpenseCode}
             * @response `200` `ExpenseWrap` list of expenses
             */
            getExpensesResource: function (expenseCode, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/expenses/".concat(expenseCode), method: "GET", format: "json" }, params));
            },
        };
        _this.noxfinansinvoices = {
            /**
             * @description <p> When sending an invoice with Fortnox Finans you will get the invoice status returned if everything succeeded, if there were any problems, an error will be returned. <p> Please note that it can take 1 min to several hours before you will get back status, OCR number and link to PDF document, meanwhile the invoice will have status UNKNOWN or NOT_AUTHORIZED. <p> Fortnox Finans is currently only accepting invoices in SEK <p> <i>Parameters in the body:</i> <ul> <li><b>InvoiceNumber</b>: the invoice number for the invoice which should be sent with Fortnox Finans</li> <li><b>SendMethod</b>: how to send the invoice; EMAIL, LETTER, EINVOICE or NONE</li> <li><b>Service</b>: which service to use; LEDGERBASE or REMINDER</li> </ul> <p>
             *
             * @tags FinanceInvoicesResource
             * @name CreateFinanceInvoicesResource
             * @summary Send an invoice with Fortnox Finans
             * @request POST:/3/noxfinansinvoices/
             * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
             */
            createFinanceInvoicesResource: function (payload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/", method: "POST", body: payload, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Retrieves the status and balance of an invoice sent to Fortnox Finans. You need to supply the invoice number in Fortox to retrieve the invoice. <p> <b>Note that</b> invoices sent with the old &quot;Noxbox&quot; platform will not have the &quot;ServiceName&quot; property in the response. This new property is added to the response if the invoice is sent with the new finance service. <p> Response explanation for <b>Service</b> and <b>ServiceName</b> <p> <b>Service:</b> <ul> <li><b>LEDGERBASE</b>: if the invoice is sent by using the old &quot;Noxbox&quot; platform, or the new finance service with the subtypes &quot;Service Full&quot; or &quot;Service Light&quot;. These services are explained above in the &quot;Fortnox Finans services&quot; section</li> <li><b>REMINDER</b>: If the invoice is sent by the new finance service, with the service Reminder Service</li> </ul> <p> <b>ServiceName</b> (only provided for <u>new finance service</u> invoices): <ul> <li><b>SERVICE_FULL</b>: Ledgerbase service <u>with</u> automatic reminders is used</li> <li><b>SERVICE_LIGHT</b>: Ledgerbase service <u>without</u> automatic reminders is used.</li> <li><b>REMINDER_SERVICE</b>: Reminder service is used</li> </ul>
             *
             * @tags FinanceInvoicesResource
             * @name GetFinanceInvoicesResource
             * @summary Retrieve a single invoice payment
             * @request GET:/3/noxfinansinvoices/{Number}
             * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
             */
            getFinanceInvoicesResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/".concat(number), method: "GET", format: "json" }, params));
            },
            /**
             * @description <p> Removes the invoice from Fortnox Finans process. The invoice can still be handled manually, but no further automatic process will be applied <p>
             *
             * @tags FinanceInvoicesResource
             * @name Stop
             * @summary Action Stop
             * @request PUT:/3/noxfinansinvoices/{Number}/stop
             * @response `200` `InvoiceResponseWrap` The current status of the invoice
             */
            stop: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/".concat(number, "/stop"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description <p> Pauses an invoice for up to 60 days. Pause means that Fortnox Finans reminder process will stop for the invoice. All invoices which have the status OPEN can be paused. <p> <i>Parameters in the body:</i> <ul> <li><b>PausedUntilDate</b>: the invoice will be paused to and including this date.</li> </ul> <p>
             *
             * @tags FinanceInvoicesResource
             * @name Pause
             * @summary Action Pause
             * @request PUT:/3/noxfinansinvoices/{Number}/pause
             * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
             */
            pause: function (number, payload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/".concat(number, "/pause"), method: "PUT", body: payload, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description <p> Unpauses a paused invoice. If the invoice is manually paused, then this action will remove the pause status immediately. Invoices which are paused by the system cannot be unpaused. <p> <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
             *
             * @tags FinanceInvoicesResource
             * @name Unpause
             * @summary Action Unpause
             * @request PUT:/3/noxfinansinvoices/{Number}/unpause
             * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
             */
            unpause: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/".concat(number, "/unpause"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description <p> If fees have been added to an invoice, e.g. reminder fees, the client can choose to pay those fees instead of letting the customer pay. <p> <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
             *
             * @tags FinanceInvoicesResource
             * @name TakeFees
             * @summary Action Take Fees
             * @request PUT:/3/noxfinansinvoices/{Number}/take-fees
             * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
             */
            takeFees: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/".concat(number, "/take-fees"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description <p> If a customer has paid some or all of the capital on an invoice directly to the client, this can be reported for bookkeeping purposes and reported to Fortnox Finans to actually deduct the paid amount from the invoice. <p> <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform <p> <i>Parameters in the body:</i> <ul> <li><b>ClientTakesFees</b>: a boolean indicating if the client should take the customer fees or not.</li> <li><b>BookkeepPaymentInFortnox</b>: a boolean indicating if the payment should be bookkept in Fortnox or not. Usually the payment should be bookkept.</li> <li><b>ReportToFinance</b>: a boolean indicating if the payment should be reported to Fortnox Finans or not. Usually the payment should be reported.</li> <li><b>PaymentAmount</b>: a decimal field with the amount to report.</li> <li><b>PaymentMethodCode</b>: a string with the method code (e.g. BG, PG or other). Could be omitted if BookkeepPaymentInFortnox is false.</li> <li><b>PaymentMethodAccount</b>: an integer with the account number to bookkeep the payment on (e.g. 1920 or other). Could be omitted if BookkeepPaymentInFortnox is false.</li> </ul> <p>
             *
             * @tags FinanceInvoicesResource
             * @name ReportPayment
             * @summary Action Report Payment
             * @request PUT:/3/noxfinansinvoices/{Number}/report-payment
             * @response `200` `InvoiceResponseWrap` The current status of the invoice <i>Response parameters:</i> <p> <ul> <li>@url: the URL used to retrieve the invoice status</li> <li>BalanceIncludeFees: the current balance of the invoice, fees included (in SEK)</li> <li>BalanceIncludeFeesCurrency: the current balance of the invoice, fees included, in other currency (currently only SEK is available)</li> <li>CurrentCapitalBalance: capital amount balance (in SEK)</li> <li>CurrentCapitalBalanceCurrency: capital amount balance in other currency (currently only SEK is available)</li> <li>InvoiceDocumentURL: URL to PDF document for invoice</li> <li>InvoiceNumber: invoice number in Fortnox</li> <li>NextEvent: the next event for the invoice</li> <li>NextEventDate: the date when the next event for the invoice will occur</li> <li>OCRNumber: the OCR number of the invoice</li> <li>Service: the service used for the invoice (LEDGERBASE or REMINDER)</li> <li>ServiceName: the detailed service name used for the invoice (SERVICE_FULL, SERVICE_LIGHT or REMINDER_SERVICE, this field is omitted if the invoice is sent with the old Noxbox service)</li> <li>Status: the current status of the invoice</li> </ul> <i>status</i> can be one of the following: <ul> <li>UNKNOWN: Not yet confirmed by Fortnox Finans</li> <li>NOT_AUTHORIZED: Factoring invoice waiting approval</li> <li>OPEN: invoice is open, and not fully paid yet</li> <li>PAUSED: invoice is paused</li> <li>CLOSED: invoice is closed (fully paid, credited or cancelled)</li> </ul>
             */
            reportPayment: function (number, payload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/noxfinansinvoices/".concat(number, "/report-payment"), method: "PUT", body: payload, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.financialyears = {
            /**
             * @description Add the query param to filter on specific date.
             *
             * @tags FinancialYearsResource
             * @name GetByDate
             * @summary Retrieve a list of financial years
             * @request GET:/3/financialyears
             * @response `200` `FinancialYearWrapList` the existing financial year
             */
            getByDate: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/financialyears", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags FinancialYearsResource
             * @name CreateFinancialYearsResource
             * @summary Create a financial year
             * @request POST:/3/financialyears
             * @response `200` `FinancialYearWrap` the created year
             */
            createFinancialYearsResource: function (financialYear, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/financialyears", method: "POST", body: financialYear, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags FinancialYearsResource
             * @name GetById
             * @summary Retrieve financial year by id
             * @request GET:/3/financialyears/{Id}
             * @response `200` `FinancialYearWrap` the existing financial year
             */
            getById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/financialyears/".concat(id), method: "GET", format: "json" }, params));
            },
        };
        _this.inbox = {
            /**
             * No description
             *
             * @tags InboxResource
             * @name GetInboxResource
             * @summary Retrieve the root folder containing files and folders
             * @request GET:/3/inbox/
             * @response `200` `FolderWrap` the root folder
             */
            getInboxResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/inbox/", method: "GET", format: "json" }, params));
            },
            /**
             * @description Upload a file to a specific subdirectory.
             *
             * @tags InboxResource
             * @name Upload
             * @summary Upload a file
             * @request POST:/3/inbox/
             * @response `200` `FolderFileRowWrap` file file
             */
            upload: function (data, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/inbox/", method: "POST", query: query, body: data, type: ContentType.FormData, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InboxResource
             * @name GetFileByIdInboxResource
             * @summary Retrieve a single file
             * @request GET:/3/inbox/{Id}
             * @response `200` `string` a single file
             */
            getFileByIdInboxResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/inbox/".concat(id), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags InboxResource
             * @name RemoveInboxResource
             * @summary Remove a file or folder
             * @request DELETE:/3/inbox/{Id}
             * @response `default` `void` empty
             */
            removeInboxResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/inbox/".concat(id), method: "DELETE" }, params));
            },
        };
        _this.invoiceaccruals = {
            /**
             * @description The invoice accruals register can return a list of records or a single record. By specifying a InvoiceNumber in the URL, a single record will be returned. Not specifying a InvoiceNumber will return a list of records.
             *
             * @tags InvoiceAccrualsResource
             * @name ListInvoiceAccrualsResource
             * @summary Retrieve a list of invoice accruals
             * @request GET:/3/invoiceaccruals/
             * @response `200` `InvoiceAccrualListItemList` list of invoice accruals
             */
            listInvoiceAccrualsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoiceaccruals/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoiceAccrualsResource
             * @name CreateInvoiceAccrualsResource
             * @summary Create an invoice accrual
             * @request POST:/3/invoiceaccruals/
             * @response `200` `InvoiceAccrualWrap` the created invoice accrual
             */
            createInvoiceAccrualsResource: function (invoiceAccrual, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoiceaccruals/", method: "POST", body: invoiceAccrual, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoiceAccrualsResource
             * @name GetInvoiceAccrualsResource
             * @summary Retrieve a single invoice accrual
             * @request GET:/3/invoiceaccruals/{InvoiceNumber}
             * @response `200` `InvoiceAccrualWrap` the existing invoice accrual
             */
            getInvoiceAccrualsResource: function (invoiceNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoiceaccruals/".concat(invoiceNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoiceAccrualsResource
             * @name UpdateInvoiceAccrualsResource
             * @summary Update an invoice accrual
             * @request PUT:/3/invoiceaccruals/{InvoiceNumber}
             * @response `200` `InvoiceAccrualWrap` the updated invoice accrual
             */
            updateInvoiceAccrualsResource: function (invoiceNumber, invoiceAccrual, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoiceaccruals/".concat(invoiceNumber), method: "PUT", body: invoiceAccrual, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoiceAccrualsResource
             * @name RemoveInvoiceAccrualsResource
             * @summary Remove an invoice accrual
             * @request DELETE:/3/invoiceaccruals/{InvoiceNumber}
             * @response `default` `void` empty
             */
            removeInvoiceAccrualsResource: function (invoiceNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoiceaccruals/".concat(invoiceNumber), method: "DELETE" }, params));
            },
        };
        _this.invoicepayments = {
            /**
             * No description
             *
             * @tags InvoicePaymentsResource
             * @name ListInvoicePaymentsResource
             * @summary Retrieve a list of invoice payments
             * @request GET:/3/invoicepayments/
             * @response `200` `InvoicePaymentListItemList` list of invoice payments
             */
            listInvoicePaymentsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoicepayments/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicePaymentsResource
             * @name CreateInvoicePaymentsResource
             * @summary Create an invoice payment
             * @request POST:/3/invoicepayments/
             * @response `200` `InvoicePaymentWrap` the created invoice payment
             */
            createInvoicePaymentsResource: function (invoicePayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoicepayments/", method: "POST", body: invoicePayment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicePaymentsResource
             * @name GetInvoicePaymentsResource
             * @summary Retrieve a single invoice payment
             * @request GET:/3/invoicepayments/{Number}
             * @response `200` `InvoicePaymentWrap` the existing invoice payment
             */
            getInvoicePaymentsResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoicepayments/".concat(number), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicePaymentsResource
             * @name UpdateInvoicePaymentsResource
             * @summary Update an invoice payment
             * @request PUT:/3/invoicepayments/{Number}
             * @response `200` `InvoicePaymentWrap` the updated invoice payment
             */
            updateInvoicePaymentsResource: function (number, invoicePayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoicepayments/".concat(number), method: "PUT", body: invoicePayment, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicePaymentsResource
             * @name RemoveInvoicePaymentsResource
             * @summary Remove an invoice payment
             * @request DELETE:/3/invoicepayments/{Number}
             * @response `default` `void` empty
             */
            removeInvoicePaymentsResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoicepayments/".concat(number), method: "DELETE" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicePaymentsResource
             * @name Bookkeep
             * @summary Bookkeep an invoice payment
             * @request PUT:/3/invoicepayments/{Number}/bookkeep
             * @response `200` `InvoicePaymentWrap` the updated invoice payment
             */
            bookkeep: function (number, invoicePayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoicepayments/".concat(number, "/bookkeep"), method: "PUT", body: invoicePayment, format: "json" }, params));
            },
        };
        _this.invoices = {
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name GetInvoicesResource
             * @summary Retrieve a single invoice
             * @request GET:/3/invoices/{DocumentNumber}
             * @response `200` `InvoiceWrap` the existing invoice
             */
            getInvoicesResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description Note that there are two approaches for updating the rows on an invoice. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the invoice needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the invoice then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an invoice is updated. Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01. This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice should be included in the report or not. A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be used when determining if an invoice should be included in the report or not, with one exception: if the invoice is created before 2021-12-01, and this property is false, the invoice will be excluded from the report. For invoices created 2021-12-01 and later, this property will have no effect.
             *
             * @tags InvoicesResource
             * @name UpdateInvoicesResource
             * @summary Update an invoice
             * @request PUT:/3/invoices/{DocumentNumber}
             * @response `200` `InvoiceWrap` the updated invoice
             */
            updateInvoicesResource: function (documentNumber, invoicePayload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber), method: "PUT", body: invoicePayload, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name ListInvoicesResource
             * @summary Retrieve a list of invoices
             * @request GET:/3/invoices
             * @response `200` `InvoiceListItemWrap` list of invoices
             */
            listInvoicesResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description An endpoint for creating an invoice. While it is possible to create an invoice without rows, we encourage you to add them if you can. Omitted values in the payload will be supplied by Predefined values which can be edited in the Fortnox account settings. Note that Predefined values will always be overwritten by values provided through the API. Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate. This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2004167</td> <td>400</td> <td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td> <td>Supply each row which has a custom VAT rate with an account.</td> </tr> </table> Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01. This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice should be included in the report or not. A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be used when determining if an invoice should be included in the report or not, with one exception: if the invoice is created before 2021-12-01, and this property is false, the invoice will be excluded from the report. For invoices created 2021-12-01 and later, this property will have no effect.
             *
             * @tags InvoicesResource
             * @name CreateInvoicesResource
             * @summary Create an invoice
             * @request POST:/3/invoices
             * @response `200` `InvoiceWrap` the created invoice
             */
            createInvoicesResource: function (invoicePayload, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices", method: "POST", body: invoicePayload, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name BookkeepInvoicesResource
             * @summary Bookkeep an invoice
             * @request PUT:/3/invoices/{DocumentNumber}/bookkeep
             * @response `200` `InvoiceWrap` the updated invoice
             */
            bookkeepInvoicesResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/bookkeep"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name Cancel
             * @summary Cancel an invoice
             * @request PUT:/3/invoices/{DocumentNumber}/cancel
             * @response `200` `InvoiceWrap` the updated invoice
             */
            cancel: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/cancel"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description The created credit invoice will be referenced in the property CreditInvoiceReference.
             *
             * @tags InvoicesResource
             * @name Credit
             * @summary Credit an invoice
             * @request PUT:/3/invoices/{DocumentNumber}/credit
             * @response `200` `InvoiceWrap` the updated invoice
             */
            credit: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/credit"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description Use this endpoint to set invoice as sent, without generating an invoice.
             *
             * @tags InvoicesResource
             * @name ExternalPrint
             * @summary Set an invoice as sent
             * @request PUT:/3/invoices/{DocumentNumber}/externalprint
             * @response `200` `InvoiceWrap` the updated invoice
             */
            externalPrint: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/externalprint"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description Used for marking a document as ready in the warehouse module. DeliveryState needs to be set to &quot;delivery&quot;.
             *
             * @tags InvoicesResource
             * @name WarehouseReady
             * @summary Set an invoice as done
             * @request PUT:/3/invoices/{DocumentNumber}/warehouseready
             * @response `200` `InvoiceWrap` the updated invoice
             */
            warehouseReady: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/warehouseready"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name Print
             * @summary Print an invoice
             * @request GET:/3/invoices/{DocumentNumber}/print
             * @response `200` `string` the invoice as PDF
             */
            print: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/print"), method: "GET" }, params));
            },
            /**
             * @description You can use the properties in the EmailInformation to customize the e-mail message on each invoice.
             *
             * @tags InvoicesResource
             * @name Email
             * @summary Send an invoice as email
             * @request GET:/3/invoices/{DocumentNumber}/email
             * @response `200` `InvoiceWrap` sent invoice
             */
            email: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/email"), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name PrintReminder
             * @summary Print an invoice as reminder
             * @request GET:/3/invoices/{DocumentNumber}/printreminder
             * @response `200` `string` the invoice as PDF
             */
            printReminder: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/printreminder"), method: "GET" }, params));
            },
            /**
             * @description The difference between this and the print-endpoint is that property Sent is not set to TRUE.
             *
             * @tags InvoicesResource
             * @name Preview
             * @summary Preview an invoice
             * @request GET:/3/invoices/{DocumentNumber}/preview
             * @response `200` `string` the invoice as PDF
             */
            preview: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/preview"), method: "GET", responseType: "arraybuffer" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name EPrint
             * @summary Send an invoice as e-print
             * @request GET:/3/invoices/{DocumentNumber}/eprint
             * @response `200` `InvoiceWrap` sent invoice
             */
            ePrint: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/eprint"), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags InvoicesResource
             * @name EInvoice
             * @summary Send an invoice as e-invoice
             * @request GET:/3/invoices/{DocumentNumber}/einvoice
             * @response `200` `InvoiceWrap` sent invoice
             */
            eInvoice: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/invoices/".concat(documentNumber, "/einvoice"), method: "GET", format: "json" }, params));
            },
        };
        _this.labels = {
            /**
             * No description
             *
             * @tags LabelsResource
             * @name ListLabelsResource
             * @summary Retrieve a list of labels
             * @request GET:/3/labels
             * @response `200` `LabelList` list of labels
             */
            listLabelsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/labels", method: "GET", format: "json" }, params));
            },
            /**
             * @description The created label will be returned if everything succeeded, if there was any problems an error will be returned.
             *
             * @tags LabelsResource
             * @name CreateLabelsResource
             * @summary Create a label
             * @request POST:/3/labels
             * @response `200` `LabelWrap` the created label
             */
            createLabelsResource: function (label, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/labels", method: "POST", body: label, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Updates the specified label with the values provided in the properties. Any property not provided will be left unchanged.
             *
             * @tags LabelsResource
             * @name UpdateLabelsResource
             * @summary Update a label
             * @request PUT:/3/labels/{Id}
             * @response `200` `LabelWrap` the updated label
             */
            updateLabelsResource: function (id, label, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/labels/".concat(id), method: "PUT", body: label, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Deletes the label and its connection to documents permanently. You need to supply the unique label id that was returned when the label was created or retrieved from the list of labels.
             *
             * @tags LabelsResource
             * @name RemoveLabelsResource
             * @summary Delete a label
             * @request DELETE:/3/labels/{Id}
             * @response `default` `void` empty
             */
            removeLabelsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/labels/".concat(id), method: "DELETE" }, params));
            },
        };
        _this.me = {
            /**
         * No description
         *
         * @tags MeResource
         * @name GetMeResource
         * @summary Retrieve user information
         Use this endpoint to retrieve user information related to the used access token
         * @request GET:/3/me
         * @response `200` `MeWrap` user information
         */
            getMeResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/me", method: "GET", format: "json" }, params));
            },
        };
        _this.modesofpayments = {
            /**
             * @description The modes of payments register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags ModesOfPaymentsResource
             * @name ListModesOfPaymentsResource
             * @summary Retrieve a list of modes of payments
             * @request GET:/3/modesofpayments
             * @response `200` `ModeOfPaymentList` a list of modes of payments.
             */
            listModesOfPaymentsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/modesofpayments", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ModesOfPaymentsResource
             * @name CreateModesOfPaymentsResource
             * @summary Create a mode of payment
             * @request POST:/3/modesofpayments
             * @response `200` `ModeOfPaymentWrap` the created mode of payment
             */
            createModesOfPaymentsResource: function (modeOfPayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/modesofpayments", method: "POST", body: modeOfPayment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ModesOfPaymentsResource
             * @name GetModesOfPaymentsResource
             * @summary Retrieve a single mode of payment
             * @request GET:/3/modesofpayments/{Code}
             * @response `200` `ModeOfPaymentWrap` the existing mode of payment
             */
            getModesOfPaymentsResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/modesofpayments/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ModesOfPaymentsResource
             * @name UpdateModesOfPaymentsResource
             * @summary Update a mode of payment
             * @request PUT:/3/modesofpayments/{Code}
             * @response `200` `ModeOfPaymentWrap` the updated mode of payment
             */
            updateModesOfPaymentsResource: function (code, unit, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/modesofpayments/".concat(code), method: "PUT", body: unit, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.offers = {
            /**
             * No description
             *
             * @tags OffersResource
             * @name ListOffersResource
             * @summary Retrieve a list of offers
             * @request GET:/3/offers/
             * @response `200` `OfferListItemList` list of offers
             */
            listOffersResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description An endpoint for creating an offer. Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate. This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2004167</td> <td>400</td> <td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td> <td>Supply each row which has a custom VAT rate with an account.</td> </tr> </table>
             *
             * @tags OffersResource
             * @name CreateOffersResource
             * @summary Create an offer
             * @request POST:/3/offers/
             * @response `200` `OfferWrap` the created offer
             */
            createOffersResource: function (offer, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/", method: "POST", body: offer, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OffersResource
             * @name GetOffersResource
             * @summary Retrieve a single offer
             * @request GET:/3/offers/{DocumentNumber}
             * @response `200` `OfferWrap` the existing offer
             */
            getOffersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description Note that there are two approaches for updating the rows on an offer. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the offer needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the offer then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an offer is updated.
             *
             * @tags OffersResource
             * @name UpdateOffersResource
             * @summary Update an offer
             * @request PUT:/3/offers/{DocumentNumber}
             * @response `200` `OfferWrap` the updated offer
             */
            updateOffersResource: function (documentNumber, offer, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber), method: "PUT", body: offer, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OffersResource
             * @name PrintOffersResource
             * @summary Print given offer
             * @request GET:/3/offers/{DocumentNumber}/print
             * @response `200` `string` the existing offer
             */
            printOffersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/print"), method: "GET" }, params));
            },
            /**
             * @description You can use the properties in the EmailInformation to customize the e-mail message on each offer.
             *
             * @tags OffersResource
             * @name EmailOffersResource
             * @summary Send given offer as email
             * @request GET:/3/offers/{DocumentNumber}/email
             * @response `200` `OfferWrap` the existing offer
             */
            emailOffersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/email"), method: "GET", format: "json" }, params));
            },
            /**
             * @description The difference between this and the print-endpoint is that property Sent is not set to TRUE.
             *
             * @tags OffersResource
             * @name PreviewOffersResource
             * @summary Preview given offer
             * @request GET:/3/offers/{DocumentNumber}/preview
             * @response `200` `string` the existing offer
             */
            previewOffersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/preview"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags OffersResource
             * @name Createorder
             * @summary Create order out of given offer
             * @request PUT:/3/offers/{DocumentNumber}/createorder
             * @response `200` `OrderWrap` the created order
             */
            createorder: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/createorder"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OffersResource
             * @name CreateinvoiceOffersResource
             * @summary Create invoice out of given offer
             * @request PUT:/3/offers/{DocumentNumber}/createinvoice
             * @response `200` `OrderWrap` the created invoice
             */
            createinvoiceOffersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/createinvoice"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OffersResource
             * @name CancelOffersResource
             * @summary Cancels given offer
             * @request PUT:/3/offers/{DocumentNumber}/cancel
             * @response `200` `OfferWrap` the updated offer
             */
            cancelOffersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/cancel"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description Use this endpoint to set offer as sent, without generating an offer.
             *
             * @tags OffersResource
             * @name Externalprint
             * @summary Set given offer as sent
             * @request PUT:/3/offers/{DocumentNumber}/externalprint
             * @response `200` `OfferWrap` the updated offer
             */
            externalprint: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/offers/".concat(documentNumber, "/externalprint"), method: "PUT", format: "json" }, params));
            },
        };
        _this.orders = {
            /**
             * No description
             *
             * @tags OrdersResource
             * @name ListOrdersResource
             * @summary Retrieve a list of orders
             * @request GET:/3/orders/
             * @response `200` `OrderListItemList` list of orders
             */
            listOrdersResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description An endpoint for creating an order. Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate. This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2004167</td> <td>400</td> <td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td> <td>Supply each row which has a custom VAT rate with an account.</td> </tr> </table>
             *
             * @tags OrdersResource
             * @name CreateOrdersResource
             * @summary Create a new order
             * @request POST:/3/orders/
             * @response `200` `OrderWrap` the created order
             */
            createOrdersResource: function (order, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/", method: "POST", body: order, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OrdersResource
             * @name GetOrdersResource
             * @summary Retrieve a single order
             * @request GET:/3/orders/{DocumentNumber}
             * @response `200` `OrderWrap` the existing order
             */
            getOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber), method: "GET", format: "json" }, params));
            },
            /**
             * @description Note that there are two approaches for updating the rows on an order. If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the order needs to be provided. If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the order then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an order is updated.
             *
             * @tags OrdersResource
             * @name UpdateOrdersResource
             * @summary Update an order
             * @request PUT:/3/orders/{DocumentNumber}
             * @response `200` `OrderWrap` the updated order
             */
            updateOrdersResource: function (documentNumber, order, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber), method: "PUT", body: order, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OrdersResource
             * @name PrintOrdersResource
             * @summary Print given order
             * @request GET:/3/orders/{DocumentNumber}/print
             * @response `200` `string` the given order as PDF
             */
            printOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber, "/print"), method: "GET" }, params));
            },
            /**
             * @description You can use the properties in the EmailInformation to customize the e-mail message on each order.
             *
             * @tags OrdersResource
             * @name EmailOrdersResource
             * @summary Send given order as email
             * @request GET:/3/orders/{DocumentNumber}/email
             * @response `200` `OrderWrap` the existing order
             */
            emailOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber, "/email"), method: "GET", format: "json" }, params));
            },
            /**
             * @description The difference between this and the print-endpoint is that property Sent is not set to TRUE.
             *
             * @tags OrdersResource
             * @name PreviewOrdersResource
             * @summary Preview given offer
             * @request GET:/3/orders/{DocumentNumber}/preview
             * @response `200` `string` the given order as PDF
             */
            previewOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber, "/preview"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags OrdersResource
             * @name CreateinvoiceOrdersResource
             * @summary Create invoice out of given order
             * @request PUT:/3/orders/{DocumentNumber}/createinvoice
             * @response `200` `InvoiceWrap` the created invoice
             */
            createinvoiceOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber, "/createinvoice"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags OrdersResource
             * @name CancelOrdersResource
             * @summary Cancels given order
             * @request PUT:/3/orders/{DocumentNumber}/cancel
             * @response `200` `OrderWrap` the updated order
             */
            cancelOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber, "/cancel"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description Use this endpoint to set order as sent, without generating an order.
             *
             * @tags OrdersResource
             * @name ExternalprintOrdersResource
             * @summary Set given order as sent
             * @request PUT:/3/orders/{DocumentNumber}/externalprint
             * @response `200` `OrderWrap` the updated order
             */
            externalprintOrdersResource: function (documentNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/orders/".concat(documentNumber, "/externalprint"), method: "PUT", format: "json" }, params));
            },
        };
        _this.predefinedaccounts = {
            /**
             * No description
             *
             * @tags PredefinedAccountsResource
             * @name ListPredefinedAccountsResource
             * @summary Retrieve a list of all predefined accounts
             * @request GET:/3/predefinedaccounts/
             * @response `200` `PredefinedAccountList` list of predefined accounts
             */
            listPredefinedAccountsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/predefinedaccounts/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PredefinedAccountsResource
             * @name GetPredefinedAccountsResource
             * @summary Retrieve information for a specific account type
             * @request GET:/3/predefinedaccounts/{name}
             * @response `200` `PredefinedAccountWrap` the existing predefined account
             */
            getPredefinedAccountsResource: function (name, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/predefinedaccounts/".concat(name), method: "GET", format: "json" }, params));
            },
            /**
             * @description An endpoint for updating a Predefined Account. Predefined Accounts are identified by their <em>name</em>-field, and as such must be unique. Some Predefined Accounts distinguish between Goods and Services. In this case, the former retains the original name whereas the latter ends with a 2. Such as <em>SALES</em> and <em>SALES2</em>. Accounts are chosen from the Account Registry, and if you have EasyVat enabled then the new EasyVat Predefined Accounts (<em>SALES_25_SE</em>, etc.) have certain restrictions on the accounts that can be selected. Refer to the table below. <table> <caption>Account restrictions when EasyVat has been enabled.</caption> <tr> <th>Name</th> <th>VAT Code</th> <th>Restrictions</th> </tr> <tr> <td>SALES_25_SE</td> <td>MP1</td> <td>Must have a compatible VAT Code.</td> </tr> <tr> <td>SALES_12_SE</td> <td>MP2</td> <td>Must have a compatible VAT Code.</td> </tr> <tr> <td>SALES_6_SE</td> <td>MP3</td> <td>Must have a compatible VAT Code.</td> </tr> <tr> <td>SALES_0_SE</td> <td>MF</td> <td>Must have a compatible VAT Code.</td> </tr> </table> This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below. <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>HTTP Code</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2001265</td> <td>400</td> <td>The provided account is invalid. It either has not been provided, does not exist, or is inactive.</td> <td>Verify that an account has been provided and that it exists and is active.</td> </tr> <tr> <td>2002462</td> <td>400</td> <td>The account is not in a valid format.</td> <td>Verify that the format of the account is correct. It has to consist of 4 digits.</td> </tr> <tr> <td>2000729</td> <td>400</td> <td>A Predefined Account has not been provided.</td> <td>Verify that a valid Predefined Account has been provided as a PATH-parameter.</td> </tr> <tr> <td>2004052</td> <td>400</td> <td>The provided account has an incompatible VAT Code. Only applies if EasyVat has been enabled.</td> <td>Verify that the provided account has a VAT Code that is compatible with the selected Predefined Account. Refer to the table above for more information about compatibility.</td> </tr> </table> If you have activated EasyVat, you can read more about how to use the new Predefined Accounts with your documents in their respective api documentation.
             *
             * @tags PredefinedAccountsResource
             * @name UpdatePredefinedAccountsResource
             * @summary Update a Predefined Account
             * @request PUT:/3/predefinedaccounts/{name}
             * @response `200` `PredefinedAccountWrap` the updated predefined account
             */
            updatePredefinedAccountsResource: function (name, predefinedAccount, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/predefinedaccounts/".concat(name), method: "PUT", body: predefinedAccount, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.predefinedvoucherseries = {
            /**
             * No description
             *
             * @tags PredefinedVoucherSeriesResource
             * @name ListPredefinedVoucherSeriesResource
             * @summary Retrieve a list of predefined voucher series
             * @request GET:/3/predefinedvoucherseries/
             * @response `200` `PredefinedVoucherSeriesList` a list of predefined voucher series
             */
            listPredefinedVoucherSeriesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/predefinedvoucherseries/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PredefinedVoucherSeriesResource
             * @name GetPredefinedVoucherSeriesResource
             * @summary Retrieve a specific predefined voucher series
             * @request GET:/3/predefinedvoucherseries/{Name}
             * @response `200` `PredefinedVoucherSeriesWrap` a list of predefined voucher series
             */
            getPredefinedVoucherSeriesResource: function (name, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/predefinedvoucherseries/".concat(name), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PredefinedVoucherSeriesResource
             * @name UpdatePredefinedVoucherSeriesResource
             * @summary Update a predefined voucher series
             * @request PUT:/3/predefinedvoucherseries/{Name}
             * @response `200` `PredefinedVoucherSeriesWrap` the updated predefined voucher series
             */
            updatePredefinedVoucherSeriesResource: function (name, predefinedVoucherSeries, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/predefinedvoucherseries/".concat(name), method: "PUT", body: predefinedVoucherSeries, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.pricelists = {
            /**
             * @description The price lists register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags PriceListsResource
             * @name ListPriceListsResource
             * @summary Retrieve a list of price lists
             * @request GET:/3/pricelists
             * @response `200` `PriceListList` all price lists
             */
            listPriceListsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/pricelists", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PriceListsResource
             * @name CreatePriceListsResource
             * @summary Create a price list
             * @request POST:/3/pricelists
             * @response `200` `PriceListWrap` the created price list
             */
            createPriceListsResource: function (priceList, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/pricelists", method: "POST", body: priceList, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PriceListsResource
             * @name GetPriceListsResource
             * @summary Retrieve a single price list
             * @request GET:/3/pricelists/{Code}
             * @response `200` `PriceListWrap` the existing price list
             */
            getPriceListsResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/pricelists/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PriceListsResource
             * @name UpdatePriceListsResource
             * @summary Update a price list
             * @request PUT:/3/pricelists/{Code}
             * @response `200` `PriceListWrap` the updated price list
             */
            updatePriceListsResource: function (code, priceList, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/pricelists/".concat(code), method: "PUT", body: priceList, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.prices = {
            /**
             * No description
             *
             * @tags PricesResource
             * @name GetPricesResource
             * @summary Retrieve a price for a specified article
             * @request GET:/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}
             * @response `200` `PriceWrap` the price for a specified article
             */
            getPricesResource: function (priceList, articleNumber, fromQuantity, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/".concat(priceList, "/").concat(articleNumber, "/").concat(fromQuantity), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PricesResource
             * @name UpdatePricesResource
             * @summary Update a price
             * @request PUT:/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}
             * @response `200` `PriceWrap` the updated price
             */
            updatePricesResource: function (priceList, articleNumber, fromQuantity, price, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/".concat(priceList, "/").concat(articleNumber, "/").concat(fromQuantity), method: "PUT", body: price, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PricesResource
             * @name RemovePricesResource
             * @summary Delete a single price
             * @request DELETE:/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}
             * @response `default` `void` empty
             */
            removePricesResource: function (priceList, articleNumber, fromQuantity, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/".concat(priceList, "/").concat(articleNumber, "/").concat(fromQuantity), method: "DELETE" }, params));
            },
            /**
             * @description The list contains a slimmer version of the prices. To get a full entity, use the GET with a price list, article number and from quantity.
             *
             * @tags PricesResource
             * @name ListPricesResource
             * @summary Retrieve a list of articles with all their prices in the specified price list
             * @request GET:/3/prices/sublist/{PriceList}/{ArticleNumber}
             * @response `200` `PriceListItemList` list of prices
             */
            listPricesResource: function (priceList, articleNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/sublist/".concat(priceList, "/").concat(articleNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PricesResource
             * @name GetFirstPrice
             * @summary Retrieve the first price for the specified article
             * @request GET:/3/prices/{PriceList}/{ArticleNumber}
             * @response `200` `PriceWrap` the first price for the specified article
             */
            getFirstPrice: function (priceList, articleNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/".concat(priceList, "/").concat(articleNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PricesResource
             * @name UpdatePricesResource1
             * @summary Update the first price in the specified article
             * @request PUT:/3/prices/{PriceList}/{ArticleNumber}
             * @response `200` `PriceWrap` the updated price
             */
            updatePricesResource1: function (priceList, articleNumber, price, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/".concat(priceList, "/").concat(articleNumber), method: "PUT", body: price, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags PricesResource
             * @name CreatePricesResource
             * @summary Create a price
             * @request POST:/3/prices/
             * @response `200` `PriceWrap` the created price
             */
            createPricesResource: function (price, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/prices/", method: "POST", body: price, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.printtemplates = {
            /**
             * No description
             *
             * @tags PrintTemplatesResource
             * @name ListPrintTemplatesResource
             * @summary Retrieve a list of print templates
             * @request GET:/3/printtemplates
             * @response `200` `PrintTemplateList` a list of print templates.
             */
            listPrintTemplatesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/printtemplates", method: "GET", format: "json" }, params));
            },
        };
        _this.projects = {
            /**
             * No description
             *
             * @tags ProjectsResource
             * @name GetProjectsResource
             * @summary Retrieve a single project
             * @request GET:/3/projects/{ProjectNumber}
             * @response `200` `ProjectWrap` the existing project
             */
            getProjectsResource: function (projectNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/projects/".concat(projectNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ProjectsResource
             * @name UpdateProjectsResource
             * @summary Update a project
             * @request PUT:/3/projects/{ProjectNumber}
             * @response `200` `ProjectWrap` the updated project
             */
            updateProjectsResource: function (projectNumber, project, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/projects/".concat(projectNumber), method: "PUT", body: project, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ProjectsResource
             * @name RemoveProjectsResource
             * @summary Remove a project
             * @request DELETE:/3/projects/{ProjectNumber}
             * @response `default` `void` empty
             */
            removeProjectsResource: function (projectNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/projects/".concat(projectNumber), method: "DELETE" }, params));
            },
            /**
             * @description The project register can return a list of records or a single record. By specifying a ProjectNumber in the URL, a single record will be returned. If no ProjectNumber is provided, a list of records will be returned.
             *
             * @tags ProjectsResource
             * @name ListProjectsResource
             * @summary Retrieve a list of projects
             * @request GET:/3/projects
             * @response `200` `ProjectListItemList` list of projects
             */
            listProjectsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/projects", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ProjectsResource
             * @name CreateProjectsResource
             * @summary Create a project
             * @request POST:/3/projects
             * @response `200` `ProjectWrap` the created project
             */
            createProjectsResource: function (project, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/projects", method: "POST", body: project, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.salarytransactions = {
            /**
             * @description Supports query-string parameters <b>employeeid</b> and <b>date</b> for filtering the result.
             *
             * @tags SalaryTransactionsResource
             * @name ListSalaryTransactionsResource
             * @summary List all salary transactions for all employees
             * @request GET:/3/salarytransactions
             * @response `200` `SalaryTransactionListItemList` list of salary transactions
             */
            listSalaryTransactionsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/salarytransactions", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SalaryTransactionsResource
             * @name CreateSalaryTransactionsResource
             * @summary Create a new salary transaction for an employee
             * @request POST:/3/salarytransactions
             * @response `200` `SalaryTransactionWrap` the created salary transaction
             */
            createSalaryTransactionsResource: function (salaryTransaction, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/salarytransactions", method: "POST", body: salaryTransaction, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SalaryTransactionsResource
             * @name GetSalaryTransactionsResource
             * @summary Retrieve a single salary transaction
             * @request GET:/3/salarytransactions/{SalaryRow}
             * @response `200` `SalaryTransactionWrap` the existing salary transaction
             */
            getSalaryTransactionsResource: function (salaryRow, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/salarytransactions/".concat(salaryRow), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SalaryTransactionsResource
             * @name UpdateSalaryTransactionsResource
             * @summary Update a salary transaction
             * @request PUT:/3/salarytransactions/{SalaryRow}
             * @response `200` `SalaryTransactionWrap` the updated salary transaction
             */
            updateSalaryTransactionsResource: function (salaryRow, salaryTransaction, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/salarytransactions/".concat(salaryRow), method: "PUT", body: salaryTransaction, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SalaryTransactionsResource
             * @name DeleteSalaryTransactionsResource
             * @summary Delete a single salary transaction
             * @request DELETE:/3/salarytransactions/{SalaryRow}
             * @response `200` `SalaryTransactionWrap` the existing salary transaction
             */
            deleteSalaryTransactionsResource: function (salaryRow, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/salarytransactions/".concat(salaryRow), method: "DELETE", format: "json" }, params));
            },
        };
        _this.scheduletimes = {
            /**
             * No description
             *
             * @tags ScheduleTimesResource
             * @name GetScheduleTimesResource
             * @summary Retrieve a specific schedule time
             * @request GET:/3/scheduletimes/{EmployeeId}/{Date}
             * @response `200` `ScheduleTimeWrap` the existing schedule time
             */
            getScheduleTimesResource: function (employeeId, date, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/scheduletimes/".concat(employeeId, "/").concat(date), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ScheduleTimesResource
             * @name UpdateScheduleTimesResource
             * @summary Update a schedule time
             * @request PUT:/3/scheduletimes/{EmployeeId}/{Date}
             * @response `200` `ScheduleTimeWrap` the updated schedule time
             */
            updateScheduleTimesResource: function (employeeId, date, scheduleTime, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/scheduletimes/".concat(employeeId, "/").concat(date), method: "PUT", body: scheduleTime, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags ScheduleTimesResource
             * @name Reset
             * @summary Reset schedule time
             * @request PUT:/3/scheduletimes/{EmployeeId}/{Date}/resetday
             * @response `200` `ScheduleTimeWrap` the reset schedule time
             */
            reset: function (employeeId, date, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/scheduletimes/".concat(employeeId, "/").concat(date, "/resetday"), method: "PUT", format: "json" }, params));
            },
        };
        _this.sie = {
            /**
             * @description Retrieves a SIE file as streamed content
             *
             * @tags SieResource
             * @name GetSieResource
             * @summary Retrieve a SIE file
             * @request GET:/3/sie/{Type}
             * @response `default` `void` SIE file
             */
            getSieResource: function (type, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/sie/".concat(type), method: "GET", query: query }, params));
            },
        };
        _this.supplierinvoiceaccruals = {
            /**
             * @description The supplier invoice accruals register can return a list of records or a single record. By specifying a SupplierInvoiceNumber in the URL, a single record will be returned. Not specifying a SupplierInvoiceNumber will return a list of records.
             *
             * @tags SupplierInvoiceAccrualsResource
             * @name ListSupplierInvoiceAccrualsResource
             * @summary Retrieve a list of supplier invoice accruals
             * @request GET:/3/supplierinvoiceaccruals/
             * @response `200` `SupplierInvoiceAccrualListItemList` list of supplier invoice accruals
             */
            listSupplierInvoiceAccrualsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceaccruals/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceAccrualsResource
             * @name CreateSupplierInvoiceAccrualsResource
             * @summary Create a supplier invoice accrual
             * @request POST:/3/supplierinvoiceaccruals/
             * @response `200` `SupplierInvoiceAccrualWrap` the created supplier invoice accrual
             */
            createSupplierInvoiceAccrualsResource: function (supplierInvoiceAccrual, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceaccruals/", method: "POST", body: supplierInvoiceAccrual, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceAccrualsResource
             * @name GetSupplierInvoiceAccrualsResource
             * @summary Retrieve a single supplier invoice accrual
             * @request GET:/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}
             * @response `200` `SupplierInvoiceAccrualWrap` the existing supplier invoice accrual
             */
            getSupplierInvoiceAccrualsResource: function (supplierInvoiceNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceaccruals/".concat(supplierInvoiceNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceAccrualsResource
             * @name UpdateSupplierInvoiceAccrualsResource
             * @summary Update a supplier invoice accrual
             * @request PUT:/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}
             * @response `200` `SupplierInvoiceAccrualWrap` the updated supplier invoice accrual
             */
            updateSupplierInvoiceAccrualsResource: function (supplierInvoiceNumber, supplierInvoiceAccrual, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceaccruals/".concat(supplierInvoiceNumber), method: "PUT", body: supplierInvoiceAccrual, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceAccrualsResource
             * @name RemoveSupplierInvoiceAccrualsResource
             * @summary Remove a supplier invoice accrual
             * @request DELETE:/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}
             * @response `default` `void` empty
             */
            removeSupplierInvoiceAccrualsResource: function (supplierInvoiceNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceaccruals/".concat(supplierInvoiceNumber), method: "DELETE" }, params));
            },
        };
        _this.supplierinvoiceexternalurlconnections = {
            /**
             * No description
             *
             * @tags SupplierInvoiceExternalUrlConnectionsResource
             * @name GetSupplierInvoiceExternalUrlConnectionsResource
             * @summary Retrieve a single supplier invoice external URL connection
             * @request GET:/3/supplierinvoiceexternalurlconnections/{Id}
             * @response `200` `SupplierInvoiceExternalURLConnectionSingle` supplier invoice external url connection
             */
            getSupplierInvoiceExternalUrlConnectionsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceexternalurlconnections/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceExternalUrlConnectionsResource
             * @name UpdateSupplierInvoiceExternalUrlConnectionsResource
             * @summary Update a supplier invoice external URL connection
             * @request PUT:/3/supplierinvoiceexternalurlconnections/{Id}
             * @response `200` `SupplierInvoiceExternalURLConnectionSingle` supplier invoice external url connection
             */
            updateSupplierInvoiceExternalUrlConnectionsResource: function (id, request, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceexternalurlconnections/".concat(id), method: "PUT", body: request, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceExternalUrlConnectionsResource
             * @name DeleteSupplierInvoiceExternalUrlConnectionsResource
             * @summary Remove a supplier invoice external URL connection
             * @request DELETE:/3/supplierinvoiceexternalurlconnections/{Id}
             * @response `default` `void` empty
             */
            deleteSupplierInvoiceExternalUrlConnectionsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceexternalurlconnections/".concat(id), method: "DELETE" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceExternalUrlConnectionsResource
             * @name CreateSupplierInvoiceExternalUrlConnectionsResource
             * @summary Create a supplier invoice external URL connection
             * @request POST:/3/supplierinvoiceexternalurlconnections
             * @response `200` `SupplierInvoiceExternalURLConnectionSingle` supplier invoice external url connection
             */
            createSupplierInvoiceExternalUrlConnectionsResource: function (request, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoiceexternalurlconnections", method: "POST", body: request, format: "json" }, params));
            },
        };
        _this.supplierinvoicefileconnections = {
            /**
             * @description The supplier invoice file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
             *
             * @tags SupplierInvoiceFileConnectionsResource
             * @name ListSupplierInvoiceFileConnectionsResource
             * @summary Retrieve a list of supplier invoice file connections
             * @request GET:/3/supplierinvoicefileconnections/
             * @response `200` `SupplierInvoiceFileConnectionList` list of file connections
             */
            listSupplierInvoiceFileConnectionsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicefileconnections/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceFileConnectionsResource
             * @name CreateSupplierInvoiceFileConnectionsResource
             * @summary Create an supplier invoice file connection
             * @request POST:/3/supplierinvoicefileconnections/
             * @response `200` `SupplierInvoiceFileConnectionWrap` the created supplier invoice file connection
             */
            createSupplierInvoiceFileConnectionsResource: function (fileConnection, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicefileconnections/", method: "POST", body: fileConnection, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceFileConnectionsResource
             * @name GetSupplierInvoiceFileConnectionsResource
             * @summary Retrieve a single supplier invoice file connection
             * @request GET:/3/supplierinvoicefileconnections/{FileId}
             * @response `200` `SupplierInvoiceFileConnectionWrap` the existing file connection
             */
            getSupplierInvoiceFileConnectionsResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicefileconnections/".concat(fileId), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoiceFileConnectionsResource
             * @name RemoveSupplierInvoiceFileConnectionsResource
             * @summary Remove an supplier invoice file connection
             * @request DELETE:/3/supplierinvoicefileconnections/{FileId}
             * @response `default` `void` empty
             */
            removeSupplierInvoiceFileConnectionsResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicefileconnections/".concat(fileId), method: "DELETE" }, params));
            },
        };
        _this.supplierinvoicepayments = {
            /**
             * No description
             *
             * @tags SupplierInvoicePaymentsResource
             * @name ListSupplierInvoicePaymentsResource
             * @summary Retrieve a list of supplier invoice payments
             * @request GET:/3/supplierinvoicepayments/
             * @response `200` `SupplierInvoicePaymentListItemList` list of supplier invoice payments
             */
            listSupplierInvoicePaymentsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicepayments/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicePaymentsResource
             * @name CreateSupplierInvoicePaymentsResource
             * @summary Create a supplier invoice payment
             * @request POST:/3/supplierinvoicepayments/
             * @response `200` `SupplierInvoicePaymentWrap` the created supplier invoice payment
             */
            createSupplierInvoicePaymentsResource: function (supplierInvoicePayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicepayments/", method: "POST", body: supplierInvoicePayment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicePaymentsResource
             * @name GetSupplierInvoicePaymentsResource
             * @summary Retrieve a single supplier invoice payment
             * @request GET:/3/supplierinvoicepayments/{Number}
             * @response `200` `SupplierInvoicePaymentWrap` the existing supplier invoice payment
             */
            getSupplierInvoicePaymentsResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicepayments/".concat(number), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicePaymentsResource
             * @name UpdateSupplierInvoicePaymentsResource
             * @summary Update a supplier invoice payment
             * @request PUT:/3/supplierinvoicepayments/{Number}
             * @response `200` `SupplierInvoicePaymentWrap` the updated supplier invoice payment
             */
            updateSupplierInvoicePaymentsResource: function (number, supplierInvoicePayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicepayments/".concat(number), method: "PUT", body: supplierInvoicePayment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicePaymentsResource
             * @name RemoveSupplierInvoicePaymentsResource
             * @summary Remove a supplier invoice payment
             * @request DELETE:/3/supplierinvoicepayments/{Number}
             * @response `default` `void` empty
             */
            removeSupplierInvoicePaymentsResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicepayments/".concat(number), method: "DELETE" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicePaymentsResource
             * @name BookkeepSupplierInvoicePaymentsResource
             * @summary Bookkeep a supplier invoice payment
             * @request PUT:/3/supplierinvoicepayments/{Number}/bookkeep
             * @response `200` `SupplierInvoicePaymentWrap` the updated supplier invoice payment
             */
            bookkeepSupplierInvoicePaymentsResource: function (number, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoicepayments/".concat(number, "/bookkeep"), method: "PUT", format: "json" }, params));
            },
        };
        _this.supplierinvoices = {
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name ListSupplierInvoicesResource
             * @summary Retrieve a list of supplier invoices
             * @request GET:/3/supplierinvoices/
             * @response `200` `SupplierInvoiceListItemWrap` list of supplier invoices
             */
            listSupplierInvoicesResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name CreateSupplierInvoicesResource
             * @summary Create a supplier invoice
             * @request POST:/3/supplierinvoices/
             * @response `200` `SupplierInvoiceWrap` the created supplier invoice
             */
            createSupplierInvoicesResource: function (supplierInvoice, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/", method: "POST", body: supplierInvoice, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name GetSupplierInvoicesResource
             * @summary Retrieve a single supplier invoice
             * @request GET:/3/supplierinvoices/{GivenNumber}
             * @response `200` `SupplierInvoiceWrap` the existing supplier invoice
             */
            getSupplierInvoicesResource: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name UpdateSupplierInvoicesResource
             * @summary Update a supplier invoice
             * @request PUT:/3/supplierinvoices/{GivenNumber}
             * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
             */
            updateSupplierInvoicesResource: function (givenNumber, supplierInvoice, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber), method: "PUT", body: supplierInvoice, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name BookkeepSupplierInvoicesResource
             * @summary Bookkeep given supplier invoice
             * @request PUT:/3/supplierinvoices/{GivenNumber}/bookkeep
             * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
             */
            bookkeepSupplierInvoicesResource: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber, "/bookkeep"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name CancelSupplierInvoicesResource
             * @summary Cancels given supplier invoice
             * @request PUT:/3/supplierinvoices/{GivenNumber}/cancel
             * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
             */
            cancelSupplierInvoicesResource: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber, "/cancel"), method: "PUT", format: "json" }, params));
            },
            /**
             * @description The created credit invoice will be referenced in the property CreditReference.
             *
             * @tags SupplierInvoicesResource
             * @name CreditSupplierInvoicesResource
             * @summary Credit given supplier invoice
             * @request PUT:/3/supplierinvoices/{GivenNumber}/credit
             * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
             */
            creditSupplierInvoicesResource: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber, "/credit"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name Approvalpayment
             * @summary Approval of payment of given supplier invoice
             * @request PUT:/3/supplierinvoices/{GivenNumber}/approvalpayment
             * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
             */
            approvalpayment: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber, "/approvalpayment"), method: "PUT", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SupplierInvoicesResource
             * @name Approvalbookkeep
             * @summary Approval of bookkeep of given supplier invoice
             * @request PUT:/3/supplierinvoices/{GivenNumber}/approvalbookkeep
             * @response `200` `SupplierInvoiceWrap` the updated supplier invoice
             */
            approvalbookkeep: function (givenNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/supplierinvoices/".concat(givenNumber, "/approvalbookkeep"), method: "PUT", format: "json" }, params));
            },
        };
        _this.suppliers = {
            /**
             * @description The supplier register can return a list of records or a single record. By specifying a SupplierNumber in the URL, a single record will be returned. Not specifying a SupplierNumber will return a list of records.
             *
             * @tags SuppliersResource
             * @name ListSuppliersResource
             * @summary Retrieve a list of suppliers
             * @request GET:/3/suppliers
             * @response `200` `SupplierListItemList` list of suppliers
             */
            listSuppliersResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/suppliers", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SuppliersResource
             * @name CreateSuppliersResource
             * @summary Create a supplier
             * @request POST:/3/suppliers
             * @response `200` `SupplierWrap` the created supplier
             */
            createSuppliersResource: function (supplier, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/suppliers", method: "POST", body: supplier, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SuppliersResource
             * @name GetSuppliersResource
             * @summary Retrieve a single supplier
             * @request GET:/3/suppliers/{SupplierNumber}
             * @response `200` `SupplierWrap` the existing supplier
             */
            getSuppliersResource: function (supplierNumber, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/suppliers/".concat(supplierNumber), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SuppliersResource
             * @name UpdateSuppliersResource
             * @summary Update a supplier
             * @request PUT:/3/suppliers/{SupplierNumber}
             * @response `200` `SupplierWrap` the updated supplier
             */
            updateSuppliersResource: function (supplierNumber, supplier, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/suppliers/".concat(supplierNumber), method: "PUT", body: supplier, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.taxreductions = {
            /**
             * No description
             *
             * @tags TaxReductionsResource
             * @name ListTaxReductionsResource
             * @summary Retrieve a list of tax reductions
             * @request GET:/3/taxreductions
             * @response `200` `TaxReductionListItemList` a list of tax reductions.
             */
            listTaxReductionsResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/taxreductions", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Note that different types of tax reduction, i.e. ROT, RUT, or Green Technology, applications work differently. When creating an application for Green Technology, the field <em>TaxReductionAmounts</em> becomes mandatory as it is used to determine how much of the asked amount is intended for which type of work. Similarly, the <em>AskedAmount</em> field of the <em>TaxReduction</em> becomes optional, as it will always be considered to be equal to the sum of the <em>TaxReductionAmounts</em>. For the other types, ROT and RUT, this field is not required and should be omitted. Unlike earlier iterations of this endpoint, specifying the type of reduction for the provided <em>TaxReduction</em> (e.g. ROT, RUT, or Green) is not necessary as this value will always be equal to the type set on the provided document instead. This endpoint can raise a variety of validation errors, some of which are only relevant for Green Technology applications. Those errors will always return an HTTP Code of 400 and include, but are not limited to, those shown below: <table> <caption>Errors that can be raised by this endpoint.</caption> <tr> <th>Error Code</th> <th>Types</th> <th>Description</th> <th>Solution</th> </tr> <tr> <td>2000600</td> <td>ROT, RUT, GREEN</td> <td>The provided Social Security Number is already in use for this document.</td> <td>Verify that the Social Security Number is different from any other applicants already added.</td> </tr> <tr> <td>2004217, 2004218</td> <td>ROT, RUT, GREEN</td> <td>The total asked amount of the application is either in an invalid format or is negative.</td> <td>Verify that the <em>AskedAmount</em>-field is a positive number (0 is valid for Green Technology) and that it is an integer.</td> </tr> <tr> <td>2004209</td> <td>GREEN</td> <td>The <em>WorkType</em>-field contains a work type that is not valid for the given type of reduction.</td> <td>Ensure that the <em>WorkType</em> contains a valid type of work for Green Technology.</td> </tr> <tr> <td>2004263</td> <td>GREEN</td> <td>The <em>TaxReductionAmounts</em>-field is missing for a Green Technology application.</td> <td>Ensure that the field is included, that it is an array, and that each contained object denotes a specific type's asked amount.</td> </tr> <tr> <td>2004262</td> <td>GREEN</td> <td>There are more than one object denoting the asked amount for the same type in the <em>TaxReductionAmounts</em>-field.</td> <td>Ensure that there is only one object denoting the asked amount per type contained in the array.</td> </tr> </table>
             *
             * @tags TaxReductionsResource
             * @name CreateTaxReductionsResource
             * @summary Create a Tax Reduction
             * @request POST:/3/taxreductions
             * @response `200` `TaxReductionWrap` the created tax reduction
             */
            createTaxReductionsResource: function (taxReduction, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/taxreductions", method: "POST", body: taxReduction, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TaxReductionsResource
             * @name GetTaxReductionsResource
             * @summary Retrieve a single tax reduction
             * @request GET:/3/taxreductions/{Id}
             * @response `200` `TaxReductionWrap` the existing tax reduction
             */
            getTaxReductionsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/taxreductions/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TaxReductionsResource
             * @name UpdateTaxReductionsResource
             * @summary Update a tax reduction
             * @request PUT:/3/taxreductions/{Id}
             * @response `200` `TaxReductionWrap` the updated tax reduction
             */
            updateTaxReductionsResource: function (id, taxReduction, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/taxreductions/".concat(id), method: "PUT", body: taxReduction, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TaxReductionsResource
             * @name RemoveTaxReductionsResource
             * @summary Remove a tax reduction
             * @request DELETE:/3/taxreductions/{Id}
             * @response `default` `void` empty
             */
            removeTaxReductionsResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/taxreductions/".concat(id), method: "DELETE" }, params));
            },
        };
        _this.termsofdeliveries = {
            /**
             * @description The terms of deliveries register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags TermsOfDeliveriesResource
             * @name ListTermsOfDeliveriesResource
             * @summary Retrieve a list of terms of deliveries
             * @request GET:/3/termsofdeliveries
             * @response `200` `TermsOfDeliveryList` a list of terms of deliveries
             */
            listTermsOfDeliveriesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofdeliveries", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfDeliveriesResource
             * @name CreateTermsOfDeliveriesResource
             * @summary Create a terms of delivery
             * @request POST:/3/termsofdeliveries
             * @response `200` `TermsOfDeliveryWrap` the created term of delivery
             */
            createTermsOfDeliveriesResource: function (termOfDelivery, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofdeliveries", method: "POST", body: termOfDelivery, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfDeliveriesResource
             * @name GetTermsOfDeliveriesResource
             * @summary Retrieve a single terms of delivery
             * @request GET:/3/termsofdeliveries/{Code}
             * @response `200` `TermsOfDeliveryWrap` the existing terms of delivery
             */
            getTermsOfDeliveriesResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofdeliveries/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfDeliveriesResource
             * @name UpdateTermsOfDeliveriesResource
             * @summary Update a terms of delivery
             * @request PUT:/3/termsofdeliveries/{Code}
             * @response `200` `TermsOfDeliveryWrap` the updated terms of delivery
             */
            updateTermsOfDeliveriesResource: function (code, termsOfDelivery, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofdeliveries/".concat(code), method: "PUT", body: termsOfDelivery, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.termsofpayments = {
            /**
             * No description
             *
             * @tags TermsOfPaymentsResource
             * @name ListTermsOfPaymentsResource
             * @summary Retrieve a list of all terms of payments
             * @request GET:/3/termsofpayments
             * @response `200` `TermsOfPaymentList` a list of terms of payments
             */
            listTermsOfPaymentsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofpayments", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfPaymentsResource
             * @name CreateTermsOfPaymentsResource
             * @summary Create a term of payment
             * @request POST:/3/termsofpayments
             * @response `200` `TermsOfPaymentWrap` the created terms of payment
             */
            createTermsOfPaymentsResource: function (termsOfPayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofpayments", method: "POST", body: termsOfPayment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfPaymentsResource
             * @name GetTermsOfPaymentsResource
             * @summary Retrieve a single terms of payment
             * @request GET:/3/termsofpayments/{Code}
             * @response `200` `TermsOfPaymentWrap` the existing terms of payment
             */
            getTermsOfPaymentsResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofpayments/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfPaymentsResource
             * @name UpdateTermsOfPaymentsResource
             * @summary Update a term of payment
             * @request PUT:/3/termsofpayments/{Code}
             * @response `200` `TermsOfPaymentWrap` the updated term of payment
             */
            updateTermsOfPaymentsResource: function (code, termOfPayment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofpayments/".concat(code), method: "PUT", body: termOfPayment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TermsOfPaymentsResource
             * @name RemoveTermsOfPaymentsResource
             * @summary Remove a term of payment
             * @request DELETE:/3/termsofpayments/{Code}
             * @response `default` `void` empty
             */
            removeTermsOfPaymentsResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/termsofpayments/".concat(code), method: "DELETE" }, params));
            },
        };
        _this.emailsenders = {
            /**
             * No description
             *
             * @tags TrustedEmailSendersResource
             * @name GetTrustedEmailSendersResource
             * @summary Retrieve a list of all trusted and rejected senders
             * @request GET:/3/emailsenders/
             * @response `200` `TrustedEmailSenderWrap` all trusted and rejected email senders
             */
            getTrustedEmailSendersResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/emailsenders/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags TrustedEmailSendersResource
             * @name CreateTrustedEmailSendersResource
             * @summary Add a new email address as trusted
             * @request POST:/3/emailsenders/trusted
             * @response `200` `TrustedEmailSenderTrustedSenderWrap` the created trusted email sender
             */
            createTrustedEmailSendersResource: function (trustedEmailSender, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/emailsenders/trusted", method: "POST", body: trustedEmailSender, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Provide an id matching an email to delete.
             *
             * @tags TrustedEmailSendersResource
             * @name RemoveTrustedEmailSendersResource
             * @summary Delete an email address from the trusted senders list
             * @request DELETE:/3/emailsenders/trusted/{Id}
             * @response `default` `void` empty
             */
            removeTrustedEmailSendersResource: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/emailsenders/trusted/".concat(id), method: "DELETE" }, params));
            },
        };
        _this.units = {
            /**
             * @description The units register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags UnitsResource
             * @name ListUnitsResource
             * @summary Retrieve a list of units
             * @request GET:/3/units
             * @response `200` `UnitList` a list of units.
             */
            listUnitsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/units", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags UnitsResource
             * @name CreateUnitsResource
             * @summary Create a unit
             * @request POST:/3/units
             * @response `200` `UnitWrap` the created unit
             */
            createUnitsResource: function (unit, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/units", method: "POST", body: unit, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags UnitsResource
             * @name GetUnitsResource
             * @summary Retrieve a single unit
             * @request GET:/3/units/{Code}
             * @response `200` `UnitWrap` the existing unit
             */
            getUnitsResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/units/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags UnitsResource
             * @name UpdateUnitsResource
             * @summary Update a unit
             * @request PUT:/3/units/{Code}
             * @response `200` `UnitWrap` the updated unit
             */
            updateUnitsResource: function (code, unit, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/units/".concat(code), method: "PUT", body: unit, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags UnitsResource
             * @name RemoveUnitsResource
             * @summary Remove a unit
             * @request DELETE:/3/units/{Code}
             * @response `default` `void` empty
             */
            removeUnitsResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/units/".concat(code), method: "DELETE" }, params));
            },
        };
        _this.vacationdebtbasis = {
            /**
             * No description
             *
             * @tags VacationDebtBasisResource
             * @name GetVacationDebtBasisResource
             * @summary Retrieve a specific vacation debt basis for a posted voucher
             * @request GET:/3/vacationdebtbasis/{Year}/{Month}
             * @response `200` `VacationDebtBasisWrap` a created and posted vacation debt basis up until last day of month in year
             */
            getVacationDebtBasisResource: function (year, month, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/vacationdebtbasis/".concat(year, "/").concat(month), method: "GET", format: "json" }, params));
            },
        };
        _this.voucherfileconnections = {
            /**
             * @description The voucher file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
             *
             * @tags VoucherFileConnectionsResource
             * @name ListVoucherFileConnectionsResource
             * @summary Retrieve a list of voucher file connections
             * @request GET:/3/voucherfileconnections/
             * @response `200` `VoucherFileConnectionList` a list of voucher file connections.
             */
            listVoucherFileConnectionsResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherfileconnections/", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VoucherFileConnectionsResource
             * @name CreateVoucherFileConnectionsResource
             * @summary Create a voucher file connection
             * @request POST:/3/voucherfileconnections/
             * @response `200` `VoucherFileConnectionWrap` the created voucher file connection
             */
            createVoucherFileConnectionsResource: function (voucherFileConnection, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherfileconnections/", method: "POST", body: voucherFileConnection, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VoucherFileConnectionsResource
             * @name GetVoucherFileConnectionsResource
             * @summary Retrieve a single voucher file connection
             * @request GET:/3/voucherfileconnections/{FileId}
             * @response `200` `VoucherFileConnectionWrap` the existing voucher file connection
             */
            getVoucherFileConnectionsResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherfileconnections/".concat(fileId), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VoucherFileConnectionsResource
             * @name RemoveVoucherFileConnectionsResource
             * @summary Remove a voucher file connection
             * @request DELETE:/3/voucherfileconnections/{FileId}
             * @response `default` `void` empty
             */
            removeVoucherFileConnectionsResource: function (fileId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherfileconnections/".concat(fileId), method: "DELETE" }, params));
            },
        };
        _this.vouchers = {
            /**
             * No description
             *
             * @tags VouchersResource
             * @name GetVouchersResource
             * @summary Retrieve a specific voucher
             * @request GET:/3/vouchers/{VoucherSeries}/{VoucherNumber}
             * @response `200` `VoucherWrap` a single voucher
             */
            getVouchersResource: function (voucherSeries, voucherNumber, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/vouchers/".concat(voucherSeries, "/").concat(voucherNumber), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description Note that vouchers have two keys, one for voucher series and one for voucher number. The financial year is also specified for each voucher, this is due to the same voucher series and number is used each year. To get a unique voucher you need the voucher series, the voucher number and the financial year. These properties will always be returned where ever vouchers is used.
             *
             * @tags VouchersResource
             * @name ListVouchersResource
             * @summary Retrieve all vouchers
             * @request GET:/3/vouchers/
             * @response `200` `VoucherListItemList` list of vouchers
             */
            listVouchersResource: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/vouchers/", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * @description The created voucher will be returned if everything succeeded, if there was any problems an error will be returned. If no query param is used the voucher will be created in the preselected financial year. Go to the financialyears endpoint to read on how to retreive the Financial year id.
             *
             * @tags VouchersResource
             * @name CreateVouchersResource
             * @summary Create a voucher
             * @request POST:/3/vouchers/
             * @response `200` `VoucherWrap` the created voucher
             */
            createVouchersResource: function (voucher, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/vouchers/", method: "POST", query: query, body: voucher, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VouchersResource
             * @name ListSeries
             * @summary Retrieve a list of vouchers for a specific series
             * @request GET:/3/vouchers/sublist/{VoucherSeries}
             * @response `200` `VoucherListItemList` list of vouchers
             */
            listSeries: function (voucherSeries, query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/vouchers/sublist/".concat(voucherSeries), method: "GET", query: query, format: "json" }, params));
            },
        };
        _this.voucherseries = {
            /**
             * @description The voucher series register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags VoucherSeriesResource
             * @name ListVoucherSeriesResource
             * @summary Retrieve a list of voucher series
             * @request GET:/3/voucherseries
             * @response `200` `VoucherSeriesListItemList` a list of voucher series.
             */
            listVoucherSeriesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherseries", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VoucherSeriesResource
             * @name CreateVoucherSeriesResource
             * @summary Create a voucher series
             * @request POST:/3/voucherseries
             * @response `200` `VoucherSeriesWrap` the created voucher series
             */
            createVoucherSeriesResource: function (voucherSeries, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherseries", method: "POST", body: voucherSeries, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VoucherSeriesResource
             * @name GetVoucherSeriesResource
             * @summary Retrieve a single voucher series
             * @request GET:/3/voucherseries/{Code}
             * @response `200` `VoucherSeriesWrap` the existing voucher series
             */
            getVoucherSeriesResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherseries/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags VoucherSeriesResource
             * @name UpdateVoucherSeriesResource
             * @summary Update a voucher series
             * @request PUT:/3/voucherseries/{Code}
             * @response `200` `VoucherSeriesWrap` the updated voucher series
             */
            updateVoucherSeriesResource: function (code, voucherSeries, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/voucherseries/".concat(code), method: "PUT", body: voucherSeries, type: ContentType.Json, format: "json" }, params));
            },
        };
        _this.wayofdeliveries = {
            /**
             * @description The way of delivery register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
             *
             * @tags WayOfDeliveriesResource
             * @name ListWayOfDeliveriesResource
             * @summary Retrieve a list of way of deliveries
             * @request GET:/3/wayofdeliveries
             * @response `200` `WayOfDeliveryList` a list of way of deliveries
             */
            listWayOfDeliveriesResource: function (params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/wayofdeliveries", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags WayOfDeliveriesResource
             * @name CreateWayOfDeliveriesResource
             * @summary Create a way of delivery
             * @request POST:/3/wayofdeliveries
             * @response `200` `WayOfDeliveryWrap` the created way of delivery
             */
            createWayOfDeliveriesResource: function (wayOfDelivery, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/wayofdeliveries", method: "POST", body: wayOfDelivery, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags WayOfDeliveriesResource
             * @name GetWayOfDeliveriesResource
             * @summary Retrieve a single way of delivery
             * @request GET:/3/wayofdeliveries/{Code}
             * @response `200` `WayOfDeliveryWrap` the existing way of delivery
             */
            getWayOfDeliveriesResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/wayofdeliveries/".concat(code), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags WayOfDeliveriesResource
             * @name UpdateWayOfDeliveriesResource
             * @summary Update a way of delivery
             * @request PUT:/3/wayofdeliveries/{Code}
             * @response `200` `WayOfDeliveryWrap` the updated way of delivery
             */
            updateWayOfDeliveriesResource: function (code, wayOfDelivery, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/wayofdeliveries/".concat(code), method: "PUT", body: wayOfDelivery, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags WayOfDeliveriesResource
             * @name RemoveWayOfDeliveriesResource
             * @summary Remove a way of delivery
             * @request DELETE:/3/wayofdeliveries/{Code}
             * @response `default` `void` empty
             */
            removeWayOfDeliveriesResource: function (code, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/3/wayofdeliveries/".concat(code), method: "DELETE" }, params));
            },
        };
        _this.fileattachments = {
            /**
             * No description
             *
             * @tags AttachmentResource
             * @name GetAttachments
             * @summary Get attached files on an entity
             * @request GET:/api/fileattachments/attachments-v1
             * @response `200` `(Attachment)[]` A list of attachments
             */
            getAttachments: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/fileattachments/attachments-v1", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AttachmentResource
             * @name Attach
             * @summary Attach files to one or more entities
             * @request POST:/api/fileattachments/attachments-v1
             * @response `200` `(Attachment)[]` A list of attachments
             */
            attach: function (attachments, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/fileattachments/attachments-v1", method: "POST", body: attachments, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AttachmentResource
             * @name GetNumberOfAttachmentsForEntity
             * @summary List number of attachments
             * @request GET:/api/fileattachments/attachments-v1/numberofattachments
             * @response `200` `(NumberOfAttachments)[]` A list of the number of attachments on each entity
             */
            getNumberOfAttachmentsForEntity: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/fileattachments/attachments-v1/numberofattachments", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AttachmentResource
             * @name ValidateIncludedOnSend
             * @summary Validates a list of attachments that will be included on send
             * @request POST:/api/fileattachments/attachments-v1/validateincludedonsend
             * @response `default` `void` nothing
             */
            validateIncludedOnSend: function (attachments, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/fileattachments/attachments-v1/validateincludedonsend", method: "POST", body: attachments, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags AttachmentResource
             * @name UpdateAttachment
             * @summary Update attachment
             * @request PUT:/api/fileattachments/attachments-v1/{attachmentId}
             * @response `200` `Attachment` The updated attachment
             */
            updateAttachment: function (attachmentId, attachment, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/fileattachments/attachments-v1/".concat(attachmentId), method: "PUT", body: attachment, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags AttachmentResource
             * @name Detach
             * @summary Detach file
             * @request DELETE:/api/fileattachments/attachments-v1/{attachmentId}
             * @response `default` `void` void
             */
            detach: function (attachmentId, params) {
                if (params === void 0) { params = {}; }
                return _this.request(__assign({ path: "/api/fileattachments/attachments-v1/".concat(attachmentId), method: "DELETE" }, params));
            },
        };
        return _this;
    }
    return Api;
}(HttpClient));
exports.Api = Api;
