// ROTA PARA LISTAR OS REGISTROS
app.get('/registros', async (req, res) => {
  try {
    const registros = await NOME_DA_COLECAO_PRIMEIRA_LETRA_MAIUSCULA.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar registros' });
  }
});
