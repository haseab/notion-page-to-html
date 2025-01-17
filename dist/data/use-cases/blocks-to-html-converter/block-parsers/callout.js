"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalloutBlockToHtml = void 0;
var block_to_inner_html_1 = require("../../../helpers/block-to-inner-html");
var format_to_style_1 = require("../../format-to-style");
var base_64_converter_1 = require("../../../../utils/base-64-converter");
var CalloutBlockToHtml = /** @class */ (function () {
    function CalloutBlockToHtml(block) {
        this._block = block;
    }
    CalloutBlockToHtml.prototype.convert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var style, iconHtml, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        style = new format_to_style_1.FormatToStyle(this._block.format).toStyle();
                        return [4 /*yield*/, new IconToHtml(this._block.properties.page_icon, this._block.id).toHtml()];
                    case 1:
                        iconHtml = _e.sent();
                        _b = (_a = Promise).resolve;
                        _d = (_c = "\n<div class=\"callout\"".concat(style, ">\n").concat(iconHtml, "\n<p>")).concat;
                        return [4 /*yield*/, (0, block_to_inner_html_1.blockToInnerHtml)(this._block)];
                    case 2: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, [_e.sent(), "</p>\n</div>\n    "])])];
                }
            });
        });
    };
    return CalloutBlockToHtml;
}());
exports.CalloutBlockToHtml = CalloutBlockToHtml;
var IconToHtml = /** @class */ (function () {
    function IconToHtml(icon, id) {
        this._icon = icon;
        this._id = id;
    }
    IconToHtml.prototype.toHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, imageSource, caption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._icon)
                            return [2 /*return*/, "<div class=\"callout-emoji\">\uD83D\uDCA1</div>"];
                        if (!this._icon.startsWith('http'))
                            return [2 /*return*/, "<div class=\"callout-emoji\">".concat(this._icon, "</div>")];
                        url = "https://www.notion.so/image/".concat(encodeURIComponent(this._icon), "?table=block&id=").concat(this._id);
                        return [4 /*yield*/, base_64_converter_1.Base64Converter.convert(url)];
                    case 1:
                        imageSource = _a.sent();
                        caption = 'callout icon';
                        return [2 /*return*/, "<div class=\"callout-image\"><img src=\"".concat(imageSource, "\" alt=\"").concat(caption, "\"></div>")];
                }
            });
        });
    };
    return IconToHtml;
}());
//# sourceMappingURL=callout.js.map