"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdNormalizer = void 0;
var IdNormalizer = /** @class */ (function () {
    function IdNormalizer() {
    }
    IdNormalizer.prototype.normalizeId = function (id) {
        var isItAlreadyNormalized = id.length === 36;
        return isItAlreadyNormalized
            ? id
            : "".concat(id.substr(0, 8), "-").concat(id.substr(8, 4), "-").concat(id.substr(12, 4), "-").concat(id.substr(16, 4), "-").concat(id.substr(20));
    };
    return IdNormalizer;
}());
exports.IdNormalizer = IdNormalizer;
//# sourceMappingURL=id-normalizer.js.map