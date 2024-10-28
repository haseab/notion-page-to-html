"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderFromTemplate = void 0;
var HeaderFromTemplate = /** @class */ (function () {
    function HeaderFromTemplate(pageProps) {
        this._pageProps = pageProps;
    }
    HeaderFromTemplate.prototype.toHeader = function () {
        return "<header>\n".concat(this._coverImageHtml, "\n").concat(this._iconHtml, "\n").concat(this._titleHtml, "\n</header>    ");
    };
    Object.defineProperty(HeaderFromTemplate.prototype, "_coverImageHtml", {
        get: function () {
            var _a = this._pageProps, coverImageSrc = _a.coverImageSrc, coverImagePosition = _a.coverImagePosition;
            return coverImageSrc
                ? "<img class=\"page-cover-image\" src=\"".concat(coverImageSrc, "\" style=\"object-position:center ").concat(coverImagePosition || 0, "%\">")
                : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderFromTemplate.prototype, "_iconHtml", {
        get: function () {
            var _a = this._pageProps, coverImageSrc = _a.coverImageSrc, icon = _a.icon;
            if (!icon)
                return '';
            var imageCoverSrcClassName = coverImageSrc ? 'page-header-icon-with-cover' : '';
            if (!icon.startsWith('data:image/'))
                return "<div class=\"page-header-icon ".concat(imageCoverSrcClassName, "\"><span class=\"icon\">").concat(icon, "</span></div>");
            return "<div class=\"page-header-icon ".concat(imageCoverSrcClassName, "\"><img class=\"icon\" src=\"").concat(icon, "\"></div>");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeaderFromTemplate.prototype, "_titleHtml", {
        get: function () {
            var title = this._pageProps.title;
            return "<h1 class=\"page-title\">".concat(title, "</h1>");
        },
        enumerable: false,
        configurable: true
    });
    return HeaderFromTemplate;
}());
exports.HeaderFromTemplate = HeaderFromTemplate;
//# sourceMappingURL=header-from-template.js.map