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
exports.ImageNotFoundError = void 0;
var ImageNotFoundError = /** @class */ (function (_super) {
    __extends(ImageNotFoundError, _super);
    function ImageNotFoundError(path) {
        var _this = _super.call(this, "Image on path ".concat(path, " could not be found")) || this;
        _this.name = 'ImageNotFoundError';
        return _this;
    }
    return ImageNotFoundError;
}(Error));
exports.ImageNotFoundError = ImageNotFoundError;
//# sourceMappingURL=image-not-found-error.js.map