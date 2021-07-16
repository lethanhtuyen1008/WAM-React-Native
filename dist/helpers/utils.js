"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
function formatString(value, variables) {
    if (!value) {
        return '';
    }
    return value.replace(/(\{\w+\})|(:\w+)/g, function (match) {
        return variables[match.replace(/\{|\}|:/g, '')] || '';
    });
}
exports.util = { formatString: formatString };
//# sourceMappingURL=utils.js.map