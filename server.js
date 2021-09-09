const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o APP
const app = express();
app.use(express.json()); // permitir que envie dados em formato JSON
app.use(cors()); // permitir acesso a todos os dominios

// Iniciando o DB ... DB do docker :D
mongoose.connect( 
    "mongodb://localhost:27017/nodeapi",
    { useUnifiedTopology: true, useNewUrlParser: true },
);
requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);