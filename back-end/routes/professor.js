const controller = require('../controllers/professor') // Os .. serve para subir de nível (ir para pasta back-end)
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)
router.get('/', controller.listar)
router.get('/:id', controller.obterUM) // ('/:id') serve para mostrar um get expecífico
router.put('/', controller.atualizar)
router.delete('/', controller.excluir)

module.exports = router