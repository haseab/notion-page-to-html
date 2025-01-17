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
exports.NotionApiPageFetcher = void 0;
var NOTION_API_PATH = 'https://www.notion.so/api/v3/';
var NotionApiPageFetcher = /** @class */ (function () {
    function NotionApiPageFetcher(notionPageId, httpPostClient, notionPageIdValidator, pageRecordValidator, pageChunkValidator) {
        this.notionPageId = notionPageId;
        this.httpPostClient = httpPostClient;
        this.notionPageIdValidator = notionPageIdValidator;
        this.pageRecordValidator = pageRecordValidator;
        this.pageChunkValidator = pageChunkValidator;
        var pageIdError = this.notionPageIdValidator.validate(this.notionPageId);
        if (pageIdError)
            throw pageIdError;
    }
    NotionApiPageFetcher.prototype.getNotionPageContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pageRecords, pageRecordError, chunk, chunkError, pageData, chunkData, contentIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchRecordValues()];
                    case 1:
                        pageRecords = _a.sent();
                        pageRecordError = this.pageRecordValidator.validate(this.notionPageId, pageRecords);
                        if (pageRecordError)
                            throw pageRecordError;
                        return [4 /*yield*/, this.fetchPageChunk()];
                    case 2:
                        chunk = _a.sent();
                        return [4 /*yield*/, this.pageChunkValidator.validate(this.notionPageId, chunk.status)];
                    case 3:
                        chunkError = _a.sent();
                        if (chunkError)
                            throw chunkError;
                        pageData = pageRecords.data;
                        chunkData = chunk.data;
                        contentIds = [pageData.results[0].value.id];
                        return [2 /*return*/, this.mapContentsIdToContent(contentIds, chunkData, pageData)];
                }
            });
        });
    };
    NotionApiPageFetcher.prototype.mapContentsIdToContent = function (contentIds, chunkData, pageData) {
        return __awaiter(this, void 0, void 0, function () {
            var contentsNotInChunk, contentsInChunk, unorderedContents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contentsNotInChunk(contentIds, chunkData, pageData)];
                    case 1:
                        contentsNotInChunk = _a.sent();
                        return [4 /*yield*/, this.contentsInChunk(contentIds, chunkData, pageData)];
                    case 2:
                        contentsInChunk = _a.sent();
                        unorderedContents = contentsInChunk.concat(contentsNotInChunk).filter(function (c) { return !!contentIds.includes(c.id); });
                        return [2 /*return*/, unorderedContents.sort(function (a, b) { return contentIds.indexOf(a.id) - contentIds.indexOf(b.id); })];
                }
            });
        });
    };
    NotionApiPageFetcher.prototype.contentsNotInChunk = function (contentIds, chunkData, pageData) {
        return __awaiter(this, void 0, void 0, function () {
            var contentsIdsNotInChunk, contentsNotInChunkRecords, dataNotInChunk;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentsIdsNotInChunk = contentIds.filter(function (id) { var _a; return !((_a = chunkData.recordMap) === null || _a === void 0 ? void 0 : _a.block[id]); });
                        return [4 /*yield*/, this.fetchRecordValuesByContentIds(contentsIdsNotInChunk)];
                    case 1:
                        contentsNotInChunkRecords = _a.sent();
                        dataNotInChunk = contentsIdsNotInChunk
                            .map(function (id) {
                            var _a;
                            var data = contentsNotInChunkRecords.data;
                            return (_a = data.recordMap) === null || _a === void 0 ? void 0 : _a.block[id].value;
                        })
                            .filter(function (d) { return !!d; });
                        return [2 /*return*/, Promise.all(dataNotInChunk.map(function (c) { return __awaiter(_this, void 0, void 0, function () {
                                var format, _a;
                                var _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            format = c.format;
                                            _a = [__assign({ id: c.id, type: c.type, properties: c.properties }, (format && { format: format }))];
                                            _b = {};
                                            return [4 /*yield*/, this.mapContentsIdToContent(c.content || [], chunkData, pageData)];
                                        case 1: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.contents = _c.sent(), _b)]))];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    NotionApiPageFetcher.prototype.contentsInChunk = function (contentIds, chunkData, pageData) {
        return __awaiter(this, void 0, void 0, function () {
            var dataInChunk;
            var _this = this;
            return __generator(this, function (_a) {
                dataInChunk = contentIds
                    .filter(function (id) { var _a; return !!((_a = chunkData.recordMap) === null || _a === void 0 ? void 0 : _a.block[id]); })
                    .map(function (id) { var _a; return (_a = chunkData.recordMap) === null || _a === void 0 ? void 0 : _a.block[id].value; });
                return [2 /*return*/, Promise.all(dataInChunk.map(function (c) { return __awaiter(_this, void 0, void 0, function () {
                        var format, _a;
                        var _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    format = c.format;
                                    _a = [__assign({ id: c.id, type: c.type, properties: c.properties }, (format && { format: format }))];
                                    _b = {};
                                    return [4 /*yield*/, this.mapContentsIdToContent(c.content || [], chunkData, pageData)];
                                case 1: return [2 /*return*/, __assign.apply(void 0, _a.concat([(_b.contents = _c.sent(), _b)]))];
                            }
                        });
                    }); }))];
            });
        });
    };
    NotionApiPageFetcher.prototype.fetchRecordValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpPostClient.post(NOTION_API_PATH + 'getRecordValues', {
                        requests: [
                            {
                                id: this.notionPageId,
                                table: 'block',
                            },
                        ],
                    })];
            });
        });
    };
    NotionApiPageFetcher.prototype.fetchPageChunk = function () {
        return this.httpPostClient.post(NOTION_API_PATH + 'loadPageChunk', {
            pageId: this.notionPageId,
            limit: 999999,
            cursor: {
                stack: [],
            },
            chunkNumber: 0,
            verticalColumns: false,
        });
    };
    NotionApiPageFetcher.prototype.fetchRecordValuesByContentIds = function (contentIds) {
        if (contentIds.length === 0)
            return Promise.resolve({
                status: 200,
                data: {},
            });
        return this.httpPostClient.post(NOTION_API_PATH + 'syncRecordValues', {
            requests: contentIds.map(function (id) { return ({
                id: id,
                table: 'block',
                version: -1,
            }); }),
        });
    };
    return NotionApiPageFetcher;
}());
exports.NotionApiPageFetcher = NotionApiPageFetcher;
//# sourceMappingURL=notion-api-page-fetcher.js.map