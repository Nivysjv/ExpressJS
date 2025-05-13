var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
  const meusProdutos = [
    { id: 1, nome: 'Carne sem identificação', descricao: '"sem gramas" de carne vermelha sem identificação', Preço: '7,99', Comentario: 'Com uma manteguinha hummmm....' },
    { id: 2, nome: 'ᴙgvᴎ', descricao: 'Item de forma abstrata, tornase algo concreto apenas quando o cliente o compra', Preço: '100,51', Comentario: 'Uma caixinha de surpresas!' },
    { id: 3, nome: 'Líquido Sinovial', descricao: '20 ml de Fluido viscoso que preenche as cavidades articulares das articulações móveis do corpo humano, como o joelho.', Preço: '1500,00', Comentario: 'Indicado para pessoas acima de 45 anos.' },
    { id: 4, nome: 'Sal Spudder', descricao: 'Fiel membro da Máfia das Raízes', Preço: '200,25', Comentario: 'Nome científico: Solanum tuberosumClasse: MagnoliopsidaDivisão: MagnoliophytaEspécie: S. tuberosumFamília: SolanaceaeGénero: Solanum' }
  ];

  // Renderiza a view 'Produtos.ejs' passando os dados corretamente
  res.render('Produtos', {
    titulo: 'Meus Produtos',
    produtosParaView: meusProdutos
  });
});

module.exports = router;
