const Usuario = require('./Usuario');
const Endereco = require('./Endereco');
const Ordem = require('./Ordem');

Usuario.hasMany(
    Endereco, {
        foreignKey: 'idUsuario', 
        as: 'enderecos', 
        onDelete: 'CASCADE'
    }
);

Endereco.belongsTo(
    Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
    }
);

Usuario.hasMany(
    Ordem, {
        foreignKey: 'idUsuario',
        as: 'ordens',
        onDelete: 'CASCADE'
    }
)

Ordem.belongsTo(
    Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
    }
)

module.exports = { Usuario, Endereco, Ordem };