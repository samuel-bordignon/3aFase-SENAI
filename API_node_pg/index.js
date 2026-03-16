require('dotenv').config()

const express = require('express')
const port = process.env.PORT
const pool = require('./config');

const app = express()

// Listar todos os veículo



// Iniciar servidor
app.listen(port, () => console.log('Servidor rodando na porta ', port))