const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

let veiculos = []

const checkObject = (objeto) => {
    if (veiculos.length === 0) return false
    const validedKeys = Object.keys(veiculos[0])
    return Object.keys(objeto).every(key => validedKeys.includes(key))
}

// Listar todos os veículos
app.get('/carrinhos', (req, res) => res.json(veiculos))

// Buscar veículo pelo ID
app.get('/carrinhos/:id', (req, res) => {
    const veiculo = veiculos.find(v => v.id === parseInt(req.params.id))
    return veiculo ? res.json(veiculo) : res.status(404).json({ error: 'Veículo não encontrado' })
})

// Criar veículo
app.post('/carrinhos', (req, res) => {
    const data = req.body

    if (!data) return res.status(400).json({ error: 'Nome e ID são obrigatórios' })

    const veiculo = { ...data, id: veiculos.length +1 }

    veiculos.push(veiculo)
    res.status(201).json(veiculos)
})

// Atualizar veículo
app.put('/carrinhos/:id', (req, res) => {
    const { id } = req.params
    const data = req.body
    const index = veiculos.findIndex(v => v.id === parseInt(id))

    if (index === -1) return res.status(404).json({ error: 'Veículo não encontrado' })
    if (!data || !checkObject(data)) return res.status(400).json({ error: 'Dados inválidos' })

    veiculos[index] = { ...veiculos[index], ...data }

    res.json(veiculos)
})

// Deletar veículo
app.delete('/carrinhos/:id', (req, res) => {
    const index = veiculos.findIndex(v => v.id === parseInt(req.params.id))

    if (index === -1) return res.status(404).json({ error: 'Veículo não encontrado' })

    veiculos.splice(index, 1)
    res.json(veiculos)
})

// Iniciar servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))