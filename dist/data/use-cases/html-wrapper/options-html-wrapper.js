"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsHtmlWrapper = void 0;
var header_from_template_1 = require("./header-from-template");
var scripts_1 = require("./scripts");
var styles_1 = require("./styles");
var OptionsHtmlWrapper = /** @class */ (function () {
    function OptionsHtmlWrapper(options) {
        this._options = options;
    }
    OptionsHtmlWrapper.prototype.wrapHtml = function (pageProps, html) {
        if (this._options.bodyContentOnly)
            return html;
        var title = pageProps.title;
        return "<!DOCTYPE html>\n<html>\n".concat(this._headFromTemplate(title), "\n<body>\n").concat(!this._options.excludeHeaderFromBody ? new header_from_template_1.HeaderFromTemplate(pageProps).toHeader() : '', "\n").concat(html, "\n").concat(!this._options.excludeScripts ? scripts_1.SCRIPTS : '', "\n</body>\n</html>");
    };
    OptionsHtmlWrapper.prototype._headFromTemplate = function (title) {
        return "<head>\n".concat(!this._options.excludeMetadata ? '<meta charset="utf-8">' : '', "\n").concat(!this._options.excludeMetadata ? '<meta name="viewport" content="width=device-width, initial-scale=1">' : '', "\n").concat(!this._options.excludeCSS ? styles_1.STYLE : '', "\n").concat(!this._options.excludeTitleFromHead ? "<title>".concat(title, "</title>") : '', "\n").concat(!this._options.excludeScripts
            ? '<link href="https://unpkg.com/prismjs@1.22.0/themes/prism.css" rel="stylesheet">'
            : '', "\n</head>");
    };
    return OptionsHtmlWrapper;
}());
exports.OptionsHtmlWrapper = OptionsHtmlWrapper;
//# sourceMappingURL=options-html-wrapper.js.map