const express = require('express');
const app = express();
const curriculoRoutes = require('./src/routes/curriculoRoutes'); // Certifique-se do caminho correto
const { sequelize } = require('./models'); // Importa o sequelize para garantir que a conexão foi estabelecida

app.use(express.json());
app.use('/api', curriculoRoutes);

sequelize.sync() // Garante que o Sequelize está conectado ao banco
  .then(() => {
    app.listen(3002, () => {
      console.log('Servidor rodando na porta 3002');
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
