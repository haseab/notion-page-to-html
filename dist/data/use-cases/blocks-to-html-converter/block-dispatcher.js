"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockDispatcher = void 0;
var blockParsers = __importStar(require("./block-parsers"));
var BlockDispatcher = /** @class */ (function () {
    function BlockDispatcher() {
    }
    BlockDispatcher.prototype.dispatch = function (block) {
        var ToHtmlConverter = fromBlockToHtmlConverter[block.type] || blockParsers.UnknownBlockToHtml;
        return new ToHtmlConverter(block);
    };
    return BlockDispatcher;
}());
exports.BlockDispatcher = BlockDispatcher;
var fromBlockToHtmlConverter = {
    text: blockParsers.TextBlockToHtml,
    header: blockParsers.HeaderBlockToHtml,
    sub_header: blockParsers.SubHeaderBlockParser,
    sub_sub_header: blockParsers.SubSubHeaderBlockParser,
    to_do: blockParsers.ToDoBlockToHtml,
    code: blockParsers.CodeBlockToHtml,
    equation: blockParsers.EquationBlockToHtml,
    quote: blockParsers.QuoteBlockToHtml,
    divider: blockParsers.DividerBlockToHtml,
    list: blockParsers.ListBlockToHtml,
    video: blockParsers.YouTubeVideoBlockToHtml,
    image: blockParsers.ImageBlockToHtml,
    callout: blockParsers.CalloutBlockToHtml,
    toggle: blockParsers.ToggleBlockToHtml,
    page: blockParsers.PageBlockToHtml,
};
//# sourceMappingURL=block-dispatcher.js.map