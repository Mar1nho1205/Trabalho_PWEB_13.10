const { Usuario, Endereco, Ordem } = require('../models');

const criar = (Model) => async (req, res) => {
    try {
        const item = await Model.create(req.body);
        res.status(201).json(item)
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.criarUsuario = criar(Usuario);
exports.criarEndereco = criar(Endereco);
exports.criarOrdem = criar(Ordem);