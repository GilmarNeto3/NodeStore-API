"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "NodeStore API rodando 🚀" });
});
const PORT = 3000;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("📦 Banco de dados conectado");
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
})
    .catch((error) => console.log("Erro ao conectar no banco:", error));
