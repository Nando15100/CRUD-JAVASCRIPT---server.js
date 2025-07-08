const express = require('express');
const mongoose = require('mongoose');
//NO TERMINAL DIGITAR
// npm install bcrypt
const bcrypt = require('bcrypt');
const NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA = require('./models/NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA');
const app = express(); 

app.use(express.json());
app.use(express.static('public'));

// CONECTA O SERVIDOR NODE.JS AO BANCO DE DADOS MONGODB
// SE ELE NÃO EXISTIR AINDA, O MONGODB CRIA AUTOMATICAMENTE QUANDO O USUÁRIO SALVAR O PRIMEIRO DADO.
mongoose.connect('mongodb://localhost:27017/NOME_BANCO_DE_DADOS')
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro na conexão:', err));


  

// INICIA O SERVIDOR EXPRESS DENTRO DO NODE.JS
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




// FUNÇÃO QUE GERA UM ID  CRESCENTE PARA CADA NOVO REGISTRO
async function gerarCustomId() {
  const ultima = await NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA.findOne().sort({ customId: -1 });
  return ultima ? ultima.customId + 1 : 1;
}
