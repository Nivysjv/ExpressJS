var express = require('express');
var router = express.Router();


// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  // Dados dinâmicos (nosso vetor de elementos)
  const meusUsuarios = [
    { id: 1, nome: 'Roger', descricao: 'Descrição detalhada do Item Roger.' },
    { id: 2, nome: 'Carlos', descricao: 'O segundo item da nossa lista Carlos.' },
    { id: 3, nome: 'Heathcliff', descricao: 'Culpado por 2 Homicídios culposos' },
    { id: 4, nome: 'gabrielUltrakill', descricao: 'Morreu na contra mão.' }
  ];

  // Renderiza a view 'usuarios.ejs' passando os dados
  res.render('usuarios', {
    titulo: 'Meus Usuários',
    usuariosParaView: meusUsuarios // Passando o array para a view
  });
});

module.exports = router;
