require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')

// Inicializa o app Express
const app = express()

// Habilita o uso de JSON nas requisições
app.use(express.json())

const pool = new Pool({
    connectionString: process.env.DB_URL,
})

const Allowedtables = ['passarinhos', 'clientes']

const checksAllowedTables = (lista, tabela) => lista.includes(`${tabela}`)

app.get('/:table', async (req, res) => {
    const { table } = req.params
    try {
        if (!checksAllowedTables(Allowedtables, table)) {
            
            return res.status(404).json({ error: 'Tabela não encontrada' })
        }
        const result = await pool.query(`SELECT * FROM ${table}`)
        res.json(result.rows)
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar dados' })
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})