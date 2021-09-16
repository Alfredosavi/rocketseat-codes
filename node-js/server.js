require("dotenv").config();

const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");

const connectToDatabase = require("./src/configs/database");

// Iniciando BD
connectToDatabase();

// iniciando o APP
const app = express();
app.use(express.json()); // permitir que envie dados em formato JSON
app.use(cors()); // permitir acesso a todos os dominios

requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT, () => {
  console.log(`[INFO] Server is running on port ${process.env.PORT}`);
});
