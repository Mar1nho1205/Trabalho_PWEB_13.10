const { Usuario, Endereco, Ordem } = require('../models');

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            include: [
                { model: Endereco, as: 'enderecos' },
                { model: Ordem, as: 'ordens'}
            ]
        });
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json ({ erro: 'Erro ao listar usuários', detalhes: error.message });
    }
};

exports.listarEnderecos = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll({
            include: [
                { model: Usuario, as: 'usuario' }
            ]
        });
        return res.status(200).json(enderecos);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar endereços', detalhes: error.message });
    }
};

exports.listarOrdens = async (req, res) => {
    try {
        const ordens = await Ordem.findAll({
            include: [
                { model: Usuario, as: 'usuario' }
            ]
        });
        return res.status(200).json(ordens);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar ordens', detalhes: error.message });
    }
};

//se tiver algo errado é culpa do palmeiras q tem ligação com o facismo italiano
