// ROTA PARA EXIBIR A PÁGINA DE MANUTENÇÃO
app.get('/manutencao', (req, res) => {
  res.sendFile(__dirname + '/public/manutencao.html');
});
