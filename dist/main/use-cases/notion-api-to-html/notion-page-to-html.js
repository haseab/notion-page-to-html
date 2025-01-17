"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.NotionPageToHtml = void 0;
var page_block_to_page_props_1 = require("../../../data/use-cases/page-block-to-page-props");
var options_html_wrapper_1 = require("../../../data/use-cases/html-wrapper/options-html-wrapper");
var notion_api_content_response_to_blocks_1 = require("../../../infra/use-cases/to-blocks/notion-api-content-response-to-blocks");
var factories_1 = require("../../factories");
/**
 * @class NotionPageToHtml
 * @description This class converts a Notion page to HTML using the convert method.
 */
var NotionPageToHtml = /** @class */ (function () {
    function NotionPageToHtml() {
    }
    /**
     * @description It converts a Notion page to HTML. Page must be public before it can be converted.
     * It can be made private again after the conversion.
     * @param pageURL The URL of the page to convert. Can be notion.so or notion.site URL.
     * @param htmlOptions Options to customize the HTML output. It is an object with the following properties:
     * @param htmlOptions.excludeCSS If true, it will return html without style tag. It is false by default.
     * @param htmlOptions.excludeMetadata If true, it will return html without metatags. It is false by default.
     * @param htmlOptions.excludeScripts If true, it will return html without scripts. It is false by default.
     * @param htmlOptions.excludeHeaderFromBody If true, it will return  html without title, cover and icon inside body. It is false by default.
     * @param htmlOptions.excludeTitleFromHead If true, it will return html without title tag in head. It is false by default.
     * @param htmlOptions.bodyContentOnly If true, it will return html body tag content only. It is false by default.
     *
     * @returns The converted Page. It is an object with the following properties:
     * - title: The title of the page.
     * - icon: The icon of the page. Can be an emoji or a base64 encoded image string.
     * - cover: The cover image of the page. It is a base64 encoded image string.
     * - html: The raw HTML string of the page.
     * @throws If the page is not public, it will throw an error.
     * @throws If the page is not found, it will throw an error.
     * @throws If the url is invalid, it will throw an error.
     */
    NotionPageToHtml.convert = function (pageURL, htmlOptions) {
        if (htmlOptions === void 0) { htmlOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var pageId, fetcher, notionApiResponses, blocks, htmlBody, pageProps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageId = (0, factories_1.createNotionUrlToPageId)(pageURL).toPageId();
                        return [4 /*yield*/, (0, factories_1.createNotionApiPageFetcher)(pageId)];
                    case 1:
                        fetcher = _a.sent();
                        return [4 /*yield*/, fetcher.getNotionPageContents()];
                    case 2:
                        notionApiResponses = _a.sent();
                        blocks = new notion_api_content_response_to_blocks_1.NotionApiContentResponsesToBlocks(notionApiResponses).toBlocks();
                        if (blocks.length === 0)
                            return [2 /*return*/, Promise.resolve({ html: '' })];
                        return [4 /*yield*/, (0, factories_1.makeBlocksToHtml)(blocks).convert()];
                    case 3:
                        htmlBody = _a.sent();
                        return [4 /*yield*/, new page_block_to_page_props_1.PageBlockToPageProps(blocks[0]).toPageProps()];
                    case 4:
                        pageProps = _a.sent();
                        return [2 /*return*/, __assign(__assign(__assign({ title: pageProps.title }, (pageProps.icon && { icon: pageProps.icon })), (pageProps.coverImageSrc && { cover: pageProps.coverImageSrc })), { html: new options_html_wrapper_1.OptionsHtmlWrapper(htmlOptions).wrapHtml(pageProps, htmlBody) })];
                }
            });
        });
    };
    return NotionPageToHtml;
}());
exports.NotionPageToHtml = NotionPageToHtml;
//# sourceMappingURL=notion-page-to-html.js.map