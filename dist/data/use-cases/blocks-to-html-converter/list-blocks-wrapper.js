"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBlocksWrapper = void 0;
var ListBlocksWrapper = /** @class */ (function () {
    function ListBlocksWrapper() {
    }
    ListBlocksWrapper.prototype.wrapLists = function (blocks) {
        var _this = this;
        return blocks.reduce(function (blocks, b) {
            if (!_this._isList(b))
                return __spreadArray(__spreadArray([], blocks, true), [b], false);
            if (_this._isFirstItemOfAList(blocks, b))
                return __spreadArray(__spreadArray([], blocks, true), [_this._generateListBlock(b)], false);
            var lastContent = blocks[blocks.length - 1];
            lastContent.children.push(b);
            return blocks;
        }, []);
    };
    ListBlocksWrapper.prototype._isList = function (block) {
        return block && block.type.includes('list');
    };
    ListBlocksWrapper.prototype._isFirstItemOfAList = function (blocks, currentBlock) {
        var lastContent = blocks[blocks.length - 1];
        return ((!this._isList(lastContent) || (lastContent && lastContent.children[0].type !== currentBlock.type)) &&
            this._isList(currentBlock));
    };
    ListBlocksWrapper.prototype._generateListBlock = function (childBlock) {
        return {
            id: "".concat(childBlock.id, "-parent"),
            type: 'list',
            properties: childBlock.properties,
            format: childBlock.format,
            children: [childBlock],
            decorableTexts: [],
        };
    };
    return ListBlocksWrapper;
}());
exports.ListBlocksWrapper = ListBlocksWrapper;
//# sourceMappingURL=list-blocks-wrapper.js.map