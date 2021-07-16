"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthProvider = void 0;
var axios_1 = require("axios");
var core_1 = require("../../core");
var cookieProvider_1 = require("../../core/cookieProvider");
var deviceInfo_1 = require("../../helpers/deviceInfo");
var utils_1 = require("../../helpers/utils");
var JwtAuthProvider = /** @class */ (function (_super) {
    __extends(JwtAuthProvider, _super);
    function JwtAuthProvider(config) {
        var _this = _super.call(this, config) || this;
        _this.axiosClient = axios_1.default.create({
            timeout: 60 * 1000,
            headers: {
                'Content-Type': 'application/json',
                Pragma: 'no-cache',
            },
        });
        _this.initializeAxiosClient(_this.axiosClient);
        return _this;
    }
    Object.defineProperty(JwtAuthProvider.prototype, "endpoints", {
        get: function () {
            return this.config.endpoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JwtAuthProvider.prototype, "accessTokenKey", {
        get: function () {
            return this.config.accessTokenKey || 'ac';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JwtAuthProvider.prototype, "refreshTokenKey", {
        get: function () {
            return this.config.refreshTokenKey || 'rt';
        },
        enumerable: false,
        configurable: true
    });
    JwtAuthProvider.prototype.signUp = function (request) {
        return this.axiosClient.post(this.endpoints.signUp, request);
    };
    JwtAuthProvider.prototype.signIn = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosClient.post(this.endpoints.signIn, request)];
                    case 1:
                        response = _a.sent();
                        if (response.token) {
                            cookieProvider_1.cookieProvider.set(this.accessTokenKey, response.token);
                            cookieProvider_1.cookieProvider.set(this.refreshTokenKey, response.refreshToken);
                            return [2 /*return*/, response];
                        }
                        throw new Error(response.message || 'Unknown Error');
                }
            });
        });
    };
    JwtAuthProvider.prototype.signOut = function () {
        cookieProvider_1.cookieProvider.remove(this.accessTokenKey, this.refreshTokenKey);
    };
    JwtAuthProvider.prototype.isSignedIn = function () {
        return cookieProvider_1.cookieProvider.has(this.accessTokenKey);
    };
    JwtAuthProvider.prototype.sendResetPasswordEmail = function (request) {
        var email = request.email;
        return this.axiosClient.post(this.endpoints.sendResetPasswordEmail, {
            email: email,
        });
    };
    JwtAuthProvider.prototype.updatePassword = function (request) {
        var id = request.id, code = request.code, password = request.password;
        var endpoint = utils_1.util.formatString(this.endpoints.updatePassword, { id: id });
        return this.axiosClient.patch(endpoint, {
            code: code,
            password: password,
        });
    };
    JwtAuthProvider.prototype.renewToken = function (request) {
        return this.axiosClient.post(this.endpoints.renewToken, request);
    };
    JwtAuthProvider.prototype.verifyAccount = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var id, code, formattedEndpoint, response, token, refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.id, code = request.code;
                        formattedEndpoint = utils_1.util.formatString(this.endpoints.accountVerification, { id: id });
                        return [4 /*yield*/, this.axiosClient.patch(formattedEndpoint, {
                                code: code,
                            })];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            token = response.token, refreshToken = response.refreshToken;
                            token && cookieProvider_1.cookieProvider.set(this.accessTokenKey, token);
                            refreshToken && cookieProvider_1.cookieProvider.set(this.refreshTokenKey, refreshToken);
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    JwtAuthProvider.prototype.sendVerificationEmail = function (request) {
        return this.axiosClient.post(this.endpoints.sendVerificationEmail, request);
    };
    JwtAuthProvider.prototype.initializeAxiosClient = function (axiosClient) {
        axiosClient.interceptors.request.use(this.onRequestFulfilled.bind(this), this.onRequestRejected.bind(this));
        axiosClient.interceptors.response.use(this.onResponseFulfilled.bind(this), this.onResponseRejected.bind(this));
    };
    JwtAuthProvider.prototype.onRequestFulfilled = function (requestConfig) {
        requestConfig.headers.deviceInfo = deviceInfo_1.getDeviceInfo();
        var accessToken = cookieProvider_1.cookieProvider.get(this.accessTokenKey);
        if (accessToken && requestConfig.url !== this.endpoints.renewToken) {
            requestConfig.headers.Authorization = accessToken;
        }
        return requestConfig;
    };
    JwtAuthProvider.prototype.onRequestRejected = function (error) {
        return Promise.reject(error);
    };
    JwtAuthProvider.prototype.onResponseFulfilled = function (response) {
        return response.data.data;
    };
    JwtAuthProvider.prototype.onResponseRejected = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var response, currentRefreshToken, errorCode, _a, token, refreshToken, originalRequest;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = error.response;
                        currentRefreshToken = cookieProvider_1.cookieProvider.get(this.refreshTokenKey);
                        errorCode = (response === null || response === void 0 ? void 0 : response.status) || error.status;
                        if (!(currentRefreshToken && errorCode === 401)) return [3 /*break*/, 2];
                        if (!this.renewalTask) {
                            this.renewalTask = this.renewToken({ refreshToken: currentRefreshToken })
                                .catch(function () { return _this.signOut(); })
                                .finally(function () { return (_this.renewalTask = null); });
                        }
                        return [4 /*yield*/, this.renewalTask];
                    case 1:
                        _a = (_b.sent()) || {}, token = _a.token, refreshToken = _a.refreshToken;
                        if (token && refreshToken) {
                            cookieProvider_1.cookieProvider.set(this.accessTokenKey, token);
                            cookieProvider_1.cookieProvider.set(this.refreshTokenKey, refreshToken);
                            originalRequest = error.config;
                            return [2 /*return*/, this.axiosClient(originalRequest)];
                        }
                        _b.label = 2;
                    case 2:
                        if (this.isSignedIn()) {
                            this.signOut();
                        }
                        return [2 /*return*/, Promise.reject(error)];
                }
            });
        });
    };
    return JwtAuthProvider;
}(core_1.BaseAuthProvider));
exports.JwtAuthProvider = JwtAuthProvider;
//# sourceMappingURL=index.js.map