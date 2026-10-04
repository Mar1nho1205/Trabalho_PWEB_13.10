const { Usuario, Endereco, Ordem } = require('../models');

const apagar = (Model, nome) => async (req, res) => {
    try {
        const item = await Model.findByPk(req.params.id);
        if(!item) return res.status(404).json({ erro: `${nome} não encontrado` })
        await item.destroy();
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.apagarUsuario = apagar(Usuario, 'Usuário');
exports.apagarEndereco = apagar(Endereco, 'Endereço');
exports.apagarOrdem = apagar(Ordem, 'Pedido');