import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "NodeStore API rodando 🚀" });
});

const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco:", error));