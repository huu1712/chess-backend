"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (code, status, message, data = null) => {
    return {
        code,
        status,
        message,
        data,
    };
};
exports.response = response;
//# sourceMappingURL=util.js.map