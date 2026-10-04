const express = require('express');
const sequelize = require('./database');
require('./models');

const app = express();
app.use(express.json());

app.use('/usuarios', require('./rotas/usuarios'));
app.use('/ordens', require('./rotas/ordens'));
app.use('/enderecos', require('./rotas/enderecos'));

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor aberto em http://localhost:3000'))
});