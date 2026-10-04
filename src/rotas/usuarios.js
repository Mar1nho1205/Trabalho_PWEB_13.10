const router = require('express').Router();
const criar = require('../controles/criar');
const apagar = require('../controles/apagar');
const atualizar = require('../controles/atualizar');
const listar = require('../controles/listar');

router.get('/', listar.listarUsuarios);
router.post('/', criar.criarUsuario);
router.put('/:id', atualizar.atualizarUsuario);
router.delete('/:id', apagar.apagarUsuario);

module.exports = router;