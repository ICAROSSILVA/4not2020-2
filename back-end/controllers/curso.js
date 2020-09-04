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

const Curso = require('../models/Curso') // Os .. serve para subir de nível (ir para pasta back-end)

const controller = {} // Objeto vazio

// Operação CREATE, função novo()
// OBS: Toda vez que tiver 'await' na função, o cabeçalho tem que ser marcado como 'async'
controller.novo = async (req, res) => { // req = requisição | res = resposta
    try { // 'try' tenta executar a função e envia um resultado positivo
        await Curso.create(req.body) // Usa os dados que chega dentro do body da requisição e os envia ao BD para a criação de um novo objeto
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){ // Bloco que trata erros
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro) // Envia o erro devolta para quem chamou a função
    }
}

module.exports = controller // Sempre é a última linha do código