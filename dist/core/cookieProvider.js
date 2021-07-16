"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieProvider = void 0;
function set(key, value, timeoutInMinutes) {
    if (timeoutInMinutes === void 0) { timeoutInMinutes = 60; }
    var time = Date.now() + timeoutInMinutes * 60 * 1000;
    var expirationTime = new Date(time);
    document.cookie = key + "=" + value + ";expires=" + expirationTime.toUTCString() + ";path=/";
}
function get(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    var match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
    if (match) {
        return match[2];
    }
    return defaultValue;
}
function has(key) {
    return !!get(key);
}
function remove() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        set(key, '', -1000);
    }
}
function updateExpirationTime(key, value, timeoutInMinutes) {
    if (timeoutInMinutes === void 0) { timeoutInMinutes = 60; }
    set(key, value, timeoutInMinutes);
}
exports.cookieProvider = {
    set: set,
    get: get,
    remove: remove,
    has: has,
    updateExpirationTime: updateExpirationTime,
};
//# sourceMappingURL=cookieProvider.js.map