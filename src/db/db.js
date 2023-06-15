const mongoose = require('mongoose');

// Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/desafiodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao banco de dados');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

module.exports = mongoose;
