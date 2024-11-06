const express = require('express');
const app = express();
const curriculoRoutes = require('./src/routes/curriculoRoutes'); // Certifique-se de que o caminho está correto
const { sequelize } = require('./models'); // Importa o sequelize para conectar

app.use(express.json()); // para entender JSON no corpo das requisições
app.use('/api', curriculoRoutes); // Define a rota base como /api

// Conectar ao banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  console.log('Conectado ao banco de dados com sucesso!');
  app.listen(3002, () => {
    console.log('Servidor rodando na porta 3002');
  });
}).catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});
