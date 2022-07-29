const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const medicamentos = []

app.post('/medicamentos/cadastro', (request, response) => {
    const validarRemedios = usuarios.find((validar) => validar.codigo == request.body.codigo)
        if (validarRemedios){
            return response.send("Erro: Remedio já cadastrado.")}
        
        medicamentos.push({
        id: uuid.v4(),
        codigo: request.body.codigo,
        remedio: request.body.remedio
    })
    return response.send("Status: Medicamento criado com sucesso.")
})

app.get('/lista/medicamentos', (request, response) => {
    console.log(request.body);
    return response.json(medicamentos)
})