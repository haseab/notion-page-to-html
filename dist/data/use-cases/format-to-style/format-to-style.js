"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatToStyle = void 0;
var color_to_hex_1 = require("../../helpers/color-to-hex");
var FormatToStyle = /** @class */ (function () {
    function FormatToStyle(format) {
        this._format = format;
    }
    FormatToStyle.prototype.toStyle = function () {
        var styleProps = [];
        var blockColor = this._format.block_color;
        if (blockColor)
            styleProps.push(new BlockColorToProp(blockColor).toStyle());
        var blockWidth = this._format.block_width;
        if (blockWidth)
            styleProps.push(new BlockWidthToProp(blockWidth).toStyle());
        if (styleProps.length === 0)
            return '';
        return " style=\"".concat(styleProps.join(''), "\"");
    };
    return FormatToStyle;
}());
exports.FormatToStyle = FormatToStyle;
var BlockColorToProp = /** @class */ (function () {
    function BlockColorToProp(blockColor) {
        this._blockColor = blockColor;
    }
    BlockColorToProp.prototype.toStyle = function () {
        if (this._isBackground())
            return "background-color: ".concat((0, color_to_hex_1.backgroundColorToHex)(this._blockColor), "; ");
        return "color: ".concat((0, color_to_hex_1.foregroundColorToHex)(this._blockColor), "; ");
    };
    BlockColorToProp.prototype._isBackground = function () {
        var _a;
        return !!((_a = this._blockColor) === null || _a === void 0 ? void 0 : _a.includes('background'));
    };
    return BlockColorToProp;
}());
var BlockWidthToProp = /** @class */ (function () {
    function BlockWidthToProp(blockWidth) {
        this._blockWidth = blockWidth;
    }
    BlockWidthToProp.prototype.toStyle = function () {
        return "width: ".concat(this._blockWidth, "px; ");
    };
    return BlockWidthToProp;
}());
//# sourceMappingURL=format-to-style.js.map