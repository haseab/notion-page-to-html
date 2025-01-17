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
exports.PageBlockToCoverImageSource = void 0;
var base_64_converter_1 = require("../../../utils/base-64-converter");
var PageBlockToCoverImageSource = /** @class */ (function () {
    function PageBlockToCoverImageSource(pageBlock) {
        this._pageBlock = pageBlock;
    }
    PageBlockToCoverImageSource.prototype.toImageCover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pageCover, head, base64, position;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageCover = this._pageBlock.properties.page_cover;
                        if (!pageCover || !this._isImageURL(pageCover))
                            return [2 /*return*/, Promise.resolve(null)];
                        head = '';
                        if (pageCover.startsWith('/'))
                            head = 'https://www.notion.so';
                        return [4 /*yield*/, base_64_converter_1.Base64Converter.convert(this.getImageAuthenticatedSrc(head + pageCover))];
                    case 1:
                        base64 = _a.sent();
                        position = this._pageCoverPositionToPositionCenter(this._pageBlock.format.page_cover_position || 0.6);
                        return [2 /*return*/, { base64: base64, position: position }];
                }
            });
        });
    };
    PageBlockToCoverImageSource.prototype._isImageURL = function (url) {
        return /(?:([^:\/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png|jpeg))(?:\?([^#]*))?(?:#(.*))?/gi.test(url);
    };
    PageBlockToCoverImageSource.prototype.getImageAuthenticatedSrc = function (src) {
        return "https://www.notion.so/image/".concat(encodeURIComponent(src), "?table=block&id=").concat(this._pageBlock.id);
    };
    PageBlockToCoverImageSource.prototype._pageCoverPositionToPositionCenter = function (coverPosition) {
        return (1 - coverPosition) * 100;
    };
    return PageBlockToCoverImageSource;
}());
exports.PageBlockToCoverImageSource = PageBlockToCoverImageSource;
//# sourceMappingURL=page-block-to-cover-image-block.js.map