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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaInstance = void 0;
const client_1 = require("@prisma/client");
const Handlers_1 = __importDefault(require("./Handlers"));
const express_1 = __importDefault(require("express"));
exports.prismaInstance = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
console.log("working !");
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "api working !",
    });
});
app.post("/upload", Handlers_1.default.uploadSnippet);
app.get("/allSubmissions", Handlers_1.default.getCodes);
function startServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.prismaInstance.$connect();
        }
        catch (err) {
            console.log("error occurred \n", err);
            process.exit(1);
        }
        finally {
            console.log("database is connected !");
            // startServices();
            // Routes.startServices();
            exports.prismaInstance.$disconnect();
        }
    });
}
app.listen(port, () => {
    return console.log(`start listening at port ${port}`);
});
startServices();
exports.default = app;
