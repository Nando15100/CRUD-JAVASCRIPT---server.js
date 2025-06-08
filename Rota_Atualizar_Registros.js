// ROTA PARA ATUALIZAR REGISTRO
app.put('/atualizar/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { NOME_INPUT1, NOME_INPUT2, NOME_INPUT3} = req.body;

  try {
    await NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA.updateOne(
      { customId: id },
      { $set: { NOME_INPUT1, NOME_INPUT2, NOME_INPUT3} }
    );
    res.sendStatus(200);
  } catch (err) {
    console.error('Erro ao atualizar:', err);
    res.status(500).send('Erro ao atualizar registro');
  }
});
