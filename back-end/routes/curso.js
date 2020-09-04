const controller = require('../controllers/curso') // Os .. serve para subir de nível (ir para pasta back-end)
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)

module.exports = router