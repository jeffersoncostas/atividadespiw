let mongoose = require('mongoose');

module.exports = (uri) => {
  mongoose.connect(uri)
  mongoose.connection.on('connected', () => {
    console.log('Mongoose! Conectado em ' + uri)
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose! Desconectado de ' + uri);
  });

  mongoose.connection.on('error', () => {
    console.log('Mongoose! Erro na conexão ' + erro)
  });

  mongoose.set('debug', true);
}