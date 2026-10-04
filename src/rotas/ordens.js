const router = require('express').Router();
const criar = require('../controles/criar');
const apagar = require('../controles/apagar');
const atualizar = require('../controles/atualizar');
const listar = require('../controles/listar');

router.get('/', listar.listarOrdens);
router.post('/', criar.criarOrdem);
router.put('/:id', atualizar.atualizarOrdem);
router.delete('/:id', apagar.apagarOrdem);

module.exports = router;