// ROTA DE LOGIN DO TIPO DO USUÁRIO
app.post('/login_Tipo_Usuario', async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    const Nome_Da_Colecao_Primeira_Letra_MINUSCULA_Referente_Tipo_Usuario = await Nome_Da_Colecao_Primeira_Letra_MAUISCULA_Referente_Tipo_Usuario.findOne({nome: usuario });

    if (!Nome_Da_Colecao_Primeira_Letra_MINUSCULA_Referente_Tipo_Usuario || Nome_Da_Colecao_Primeira_Letra_MINUSCULA_Referente_Tipo_Usuario.senha !== senha) {
      return res.status(401).json({ message: 'Usuário ou senha inválidos!' });
    }

    res.status(200).json({ autenticado: true });

  } catch (error) {
    console.error('Erro ao realizar login:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});
