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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingContentError = void 0;
var MissingContentError = /** @class */ (function (_super) {
    __extends(MissingContentError, _super);
    function MissingContentError(pageId) {
        var _this = _super.call(this, "Can not find content on page ".concat(pageId, ". Is it empty?")) || this;
        _this.name = 'MissingContentError';
        return _this;
    }
    return MissingContentError;
}(Error));
exports.MissingContentError = MissingContentError;
//# sourceMappingURL=missing-content.js.map