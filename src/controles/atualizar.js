const { Usuario, Endereco, Ordem } = require('../models');

exports.atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const dadosNovos = req.body;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado'});
        }

        await usuario.update(dadosNovos);
        return res.status(200).json({ mensagem: 'Usuário atualizado com sucesso', usuario });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar usuário', detalhes: error.message });
    }
};
exports.atualizarEndereco = async (req, res) => {
    try {
        const { id } = req.params;
        const dadosNovos = req.body;

        const endereco = await Endereco.findByPk(id);
        if (!endereco) {
            return res.status(404).json({ erro: 'Endereço não encontrado'});
        }

        await endereco.update(dadosNovos);
        return res.status(200).json({ mensagem: 'Endereço atualizado com sucesso!', endereco });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar endereço', detalhes: err.message});
    }
};

exports.atualizarOrdem = async (req, res) => {
    try {
        const { id } = req.params;
        const dadosNovos = req.body;

        const ordem = await Ordem.findByPk(id);
        if (!ordem) {
            return res.status(404).json({ erro: 'Ordem não encontrada' });
        }
        
        await ordem.update(dadosNovos);
        return res.status(200).json({ mensagem: 'Ordem atualizada com sucesso', ordem });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao atualizar ordem', detalhes: error.message });
    }
};

//se tiver errado é por causa do pneumoultramicroscopicossilicovulcanoconiotico
