/* 

    OPERAÇÕES BÁSICAS SOBRE DADOS

    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro do banco de dados

    2) RETRIEVE (recuperar ou listar)
        Obeter de voltar um ou mais objetos preexistentes no banco de dados

    3) UPDATE (atualizar ou modificar)
        Atualizar os dados de um objeto preexistente no banco de dados
    
    4) DELETE (excluir)
        Exclusão de um objeto do banco de dados

    (C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD

    ========================================================================

    Verbos do protocolo HTTP

    Verbo               Operação
    POST                CREAT
    GET                 RETRIEVE
    PUT                 UPDATE
    DELETE              DELETE

*/

// Controller é um conjunto de funções associadas às operações sobre dados

const SalaAula = require('../models/SalaAula') // Os .. serve para subir de nível (ir para pasta back-end)

const controller = {} // Objeto vazio

// Operação CREATE, função novo()
// OBS: Toda vez que tiver 'await' na função, o cabeçalho tem que ser marcado como 'async'
/*
controller.novo = async (req, res) => { // req = requisição | res = resposta
    try { // 'try' tenta executar a função e envia um resultado positivo
        await SalaAula.create(req.body) // Usa os dados que chega dentro do body da requisição e os envia ao BD para a criação de um novo objeto
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){ // Bloco que trata erros
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro) // Envia o erro devolta para quem chamou a função
    }
}
// Operação RETRIEVE (all), função lista()
controller.listar = async (req, res) => {
    try{
        let dados = await SalaAula.find() // Traz todos os cursos cadastrados
        res.send(dados) // Vai com status HTTP 200: OK
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (one), função obterUm()
controller.obterUM = async (req, res) => {
   try {
        // Capturando o parâmetro id da URL
        const id = req.params.id
        let obj = await SalaAula.findById(id)

        // O objeto existe e foi encontrado
        if(obj) res.send(obj) // HTTP 200
        // Não encontrado
        else res.status(404).end() // HTTP 404: Not, found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try {
        // Isolar o _id do objeto que está sendo alterado
        const id = req.body._id

        // Busca e substituição do conteúdo do objeto
        let ret = await SalaAula.findByIdAndUpdate(id, req.body)

        // Se encontrou e atualizou, retornamos HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou o objeto pra ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação DELETE, função excluir()
controller.excluir = async (req, res) => {
    try { // try significa que em caso de erro ele pula a execução e vai para o catch(), 
        // se der certo o bloco catch nunca será executado
        // Isolando o id
        const id = req.doby._id

        // Busca pelo id e exclusão
        let ret = await SalaAula.findByIdAndDelete

        // Encontrou o excluído, HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou, HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller // Sempre é a última linha do código
*/