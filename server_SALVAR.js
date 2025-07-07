// ROTA PARA SALVAR OS DADOS
app.post('/salvar', async (req, res) => {
  try {
    const { nome_INPUT1, nome_INPUT2, nome_INPUT3 } = req.body;

    // AQUI VERIFICA SE JÁ EXISTE UM USUÁRIO ADMINISTRADOR COM O MESMO NOME
    //CONSIDERAMOS QUE nome_INPUT1 SEJA O INPUT COM O NOME DE nome
    const existente = await Administrador.findOne({ nome_INPUT1 });
    if (existente) {
      return res.status(409).json({ message: 'Este nome de administrador já está em uso.' });
    }

    
    const customId = await gerarCustomId(); // -> AQUI ELE GERA UM IP FIXO PARA CADA REGISTRO

    const nome_colecao_em_minusculo = new nome_colecao_Primeira_Letra_Maiuscula({ customId, nome_INPUT1, nome_INPUT2, nome_INPUT3});
    await nome_colecao_em_minusculo.save();

    console.log('Dados salvos:', nome_colecao_em_minusculo);
    res.status(201).json({ message: 'Dados salvos com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ message: 'Erro ao salvar dados' });
  }
});
