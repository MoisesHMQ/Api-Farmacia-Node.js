const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const medicamentos = [];

app.post('/medicamentos/cadastro', (request, response) => {
    const validarRemedios = medicamentos.find((validar) => validar.codigo == request.body.codigo)
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

app.delete('/excluir', (request,response) => {
    const id = medicamentos.indexOf('id');
    const excluirMedicamentos = medicamentos.splice(id,1)
        
    return response.send(excluirMedicamentos)
})

const clientes = [];

app.post('/clientes/cadastro', (request, response) => {
    const validarClientes = clientes.find((user) => user.cpf == request.body.cpf)
        if (validarClientes){
            return response.send("Status: Usuario Já Cadastrado.")}
        
        clientes.push({
        id: uuid.v4(),
        cpf: request.body.cpf,
        senha: request.body.senha
    })
    return response.send("Usuario criado com sucesso.")
})

app.get('/lista/clientes', (request, response) => {
    console.log(request.body);
    return response.json(clientes)
})