"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOSName = exports.getBrowserName = exports.getDeviceInfo = exports.osMapping = void 0;
exports.osMapping = [
    { value: 'Windows 3.11', label: /Win16/ },
    { value: 'Windows 95', label: /(Windows 95|Win95|Windows_95)/ },
    { value: 'Windows ME', label: /(Win 9x 4.90|Windows ME)/ },
    { value: 'Windows 98', label: /(Windows 98|Win98)/ },
    { value: 'Windows CE', label: /Windows CE/ },
    { value: 'Windows 2000', label: /(Windows NT 5.0|Windows 2000)/ },
    { value: 'Windows XP', label: /(Windows NT 5.1|Windows XP)/ },
    { value: 'Windows Server 2003', label: /Windows NT 5.2/ },
    { value: 'Windows Vista', label: /Windows NT 6.0/ },
    { value: 'Windows 7', label: /(Windows 7|Windows NT 6.1)/ },
    { value: 'Windows 8.1', label: /(Windows 8.1|Windows NT 6.3)/ },
    { value: 'Windows NT 10.0', label: /(Windows NT 10.0|WinNT10.0|WinNT|Windows NT)/ },
    { value: 'Windows 8', label: /(Windows 8|Windows NT 6.2)/ },
    { value: 'Windows NT 4.0', label: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
    { value: 'Windows ME', label: /Windows ME/ },
    { value: 'Android', label: /Android/ },
    { value: 'Open BSD', label: /OpenBSD/ },
    { value: 'Sun OS', label: /SunOS/ },
    { value: 'Linux', label: /(Linux|X11)/ },
    { value: 'iOS', label: /(iPhone|iPad|iPod)/ },
    { value: 'Mac OS X', label: /Mac OS X/ },
    { value: 'Mac OS', label: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { value: 'QNX', label: /QNX/ },
    { value: 'UNIX', label: /UNIX/ },
    { value: 'BeOS', label: /BeOS/ },
    { value: 'OS/2', label: /OS\/2/ },
    {
        value: 'Search Bot',
        label: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
    },
];
exports.getDeviceInfo = function () {
    return "Browser:" + exports.getBrowserName() + ", OS: " + exports.getOSName();
};
exports.getBrowserName = function () {
    var _a;
    var _b = ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) === null || _a === void 0 ? void 0 : _a.match(/(firefox|msie|trident|chrome|safari|opera|edg|ucbrowser|googlebot|fxios|crios|opr|opera)\/?\s*(\.?\d+(\.\d+)*)/i)) || [], _c = _b[0], browserName = _c === void 0 ? 'Unknown' : _c, _d = _b[1], version = _d === void 0 ? 'Unknown' : _d;
    return [browserName, version].join(' ');
};
exports.getOSName = function () {
    var _a;
    return ((_a = exports.osMapping.find(function (it) { return it.label.test(navigator === null || navigator === void 0 ? void 0 : navigator.userAgent); })) === null || _a === void 0 ? void 0 : _a.value) || 'Unknown';
};
//# sourceMappingURL=deviceInfo.js.map