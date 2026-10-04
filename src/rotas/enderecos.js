const router = require('express').Router();
const criar = require('../controles/criar');
const apagar = require('../controles/apagar');
const atualizar = require('../controles/atualizar');
const listar = require('../controles/listar');

router.get('/', listar.listarEnderecos);
router.post('/', criar.criarEndereco);
router.put('/:id', atualizar.atualizarEndereco);
router.delete('/:id', apagar.apagarEndereco);

module.exports = router;