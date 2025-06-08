// ROTA PARA EXCLUIR REGISTRO
app.delete('/excluir/:customId', async (req, res) => {
  await NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA.findOneAndDelete({ customId: req.params.customId });
  res.json({ message: 'Registro excluído!' });
});
