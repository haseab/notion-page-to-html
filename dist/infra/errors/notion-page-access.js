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
exports.NotionPageAccessError = void 0;
var NotionPageAccessError = /** @class */ (function (_super) {
    __extends(NotionPageAccessError, _super);
    function NotionPageAccessError(pageId) {
        var _this = _super.call(this, "Can not read Notion Page of id ".concat(pageId, ". Is it open for public reading?")) || this;
        _this.name = 'NotionPageAccessError';
        return _this;
    }
    return NotionPageAccessError;
}(Error));
exports.NotionPageAccessError = NotionPageAccessError;
//# sourceMappingURL=notion-page-access.js.map