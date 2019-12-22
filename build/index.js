"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const controllers_1 = __importDefault(require("./controllers"));
const dbConnect_1 = __importDefault(require("./middleware/dbConnect"));
const morgan_1 = __importDefault(require("morgan"));
const notFoundRoute_1 = __importDefault(require("./middleware/notFoundRoute"));
const app = express_1.default();
app.use(morgan_1.default("common"));
app.use(dbConnect_1.default);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        res.status(200).json({
            app: config_1.default.APP_NAME,
            version: config_1.default.APP_VERSION
        });
    }
    catch (ex) {
        res.status(res.statusCode || 500).json({ error: ex.message });
    }
});
app.use("/api", controllers_1.default);
app.use(notFoundRoute_1.default);
app.listen(config_1.default.PORT, () => console.log(`APP is running on http://localhost:${config_1.default.PORT}/`));
//# sourceMappingURL=index.js.map