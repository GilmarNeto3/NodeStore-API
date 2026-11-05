import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { AppDataSource } from "./data-source";
import apiRouter from "./routes";

// Cria a instancia do servidor Express e habilita o parse de JSON.
const app = express();
app.use(express.json());

// Rota para verificar se a API esta funcionando.
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "online",
    mensagem: "API funcionando corretamente"
  });
});

// Centraliza todas as rotas da aplicacao sob o prefixo /api.
app.use("/api", apiRouter);

const port = Number(process.env.PORT ?? 8080);

// Inicializa a conexao com o banco e aplica as migrations antes de abrir a API.
async function start(): Promise<void> {
  try {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
    app.listen(port, () => console.log(`API disponivel em http://localhost:${port}/api`));
  } catch (error) {
    console.error("Nao foi possivel iniciar a API:", error);
    process.exitCode = 1;
  }
}

void start();