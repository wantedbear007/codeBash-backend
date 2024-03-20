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
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Operations {
    // to upload code
    static uploadSnippet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, language, sourceCode, stdin, stdout } = req.body;
            if (!(username && language && sourceCode)) {
                res.status(203).json({
                    message: "all fields are required ",
                });
                return;
            }
            try {
                yield __1.prismaInstance.sourcecodes.create({
                    data: Object.assign({}, req.body),
                });
                res.status(200).json({
                    msg: "Operation successful",
                });
            }
            catch (err) {
                res.status(500).json({
                    msg: "Internal error occurred !",
                });
            }
            finally {
                __1.prismaInstance.$disconnect();
            }
        });
    }
    // to get all codes
    static getCodes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let submissions = [];
            try {
                submissions = yield __1.prismaInstance.sourcecodes.findMany();
                console.log(res);
                // let  = res;
                res.status(200).json(submissions);
            }
            catch (err) {
                console.log(err);
                res.status(500).json({ msg: "internal error" });
            }
            finally {
                __1.prismaInstance.$disconnect();
                // res.status(200).json(submissions)
            }
        });
    }
}
exports.default = Operations;
//# sourceMappingURL=index.js.map