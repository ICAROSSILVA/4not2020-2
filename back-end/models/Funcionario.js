const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, 
    endereco: {
        type: String, 
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: { 
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    // Índice único: impede a duplicidade de Emails no cadastro
    email: {
        type: String, 
        required: true, 
        index: { unique: true}
    },
    // Índice único: impede a duplicidade de CPFs no cadastro
    cpf: {
        type: String, 
        required: true, 
        index: { unique: true }
    },
    rg: { 
        type: String, 
        required: true 
    },
    data_nascimento: { 
        type: Date, 
        required: true 
    },
    codigo_func: { // Códgio de identificação do funcionário
        type: String,
        required: true,
        index: { unique: true }
    }
})

/*
    Parâmetros do método mongoose.model()
    1º -> Nome do modelo (sempre igual ao nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Funcionario', esquema, 'funcionario')