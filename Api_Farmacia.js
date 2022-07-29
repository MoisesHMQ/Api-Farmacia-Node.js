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
            return response.send("Erro: Cliente Já Cadastrado.")}
        
        clientes.push({
        id: uuid.v4(),
        cpf: request.body.cpf,
        senha: request.body.senha
    })
    return response.send("Cliente Cadastrado com sucesso.")
})

app.get('/lista/clientes', (request, response) => {
    console.log(request.body);
    return response.json(clientes)
})

app.delete('/clientes/excluir', (request,response) => {
    const id = clientes.indexOf('id');
    const excluirClientes = clientes.splice(id,1)
        
    return response.send(excluirClientes)
})

const funcionarios = [];

app.post('/funcionarios/cadastro', (request, response) => {
    const validarFuncionarios = funcionarios.find((funcionario) => funcionario.nome == request.body.nome)
        if (validarFuncionarios){
            return response.send("Erro: Funcionario Já Cadastrado.")}
        
        funcionarios.push({
        id: uuid.v4(),
        nome: request.body.nome,
        senha: request.body.senha
    })
    return response.send("Funcionario cadastrado com sucesso.")
})

app.post('/acesso/funcionarios', (request, response) => {
    console.log(request.body);
    if (request.body.funcionarios.nome == request.body.funcionarios && request.body.funcionarios.senha == request.body.funcionarios.senha){
        return response.send("status: Seja bem vindo")
    }
    else  {
        return response.send("erro: Nome ou Senha incorretos")
    }
})

app.get('/listar/funcionarios', (request, response) => {
    console.log(request.body);
    return response.json(funcionarios)
})

app.listen(5000, () => {
    console.log('Status: Farmacia Online.')
})