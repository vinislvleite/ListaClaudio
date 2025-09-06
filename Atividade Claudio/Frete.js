const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tabelaFrete = {
  1: {
    nome: 'Sul',
    valorPeca: 1.00,
    desconto: 0.10
  },
  2: {
    nome: 'Sudeste',
    valorPeca: 1.20,
    desconto: 0.12
  },
  3: {
    nome: 'Centro-oeste',
    valorPeca: 1.30,
    desconto: 0.13
  }
};

const taxa = 200;
const custoKm = 1.00;

function calcularFreteTotal(distanciaKm, quantidadePeca, regiao, querRastreamento) {
  const info = tabelaFrete[regiao];
  if (!info) {
    console.error('Erro: Código de região inválido. Use 1, 2 ou 3.');
    return;
  }

  let valorFretePecas;
  if (quantidadePeca <= 1000) {
    valorFretePecas = quantidadePeca * info.valorPeca;
  } else {
    const pecasAteMil = 1000 * info.valorPeca;
    const pecasAcimaMil = quantidadePeca - 1000;
    const precoComDesconto = info.valorPeca * (1 - info.desconto);
    const valorFretePecasAcimaMil = pecasAcimaMil * precoComDesconto;
    valorFretePecas = pecasAteMil + valorFretePecasAcimaMil;
  }

  const valorFreteKm = distanciaKm * custoKm;
  const valorRastreamento = querRastreamento ? taxa : 0.00;
  const freteTotal = valorFretePecas + valorFreteKm + valorRastreamento;

  console.log('\n--- Informações do Frete ---');
  console.log(`Taxa do rastreamento: R$ ${valorRastreamento.toFixed(2)}`);
  console.log(`Valor do frete pelas peças: R$ ${valorFretePecas.toFixed(2)}`);
  console.log(`Valor do frete por quilômetro: R$ ${valorFreteKm.toFixed(2)}`);
  console.log(`Total do frete: R$ ${freteTotal.toFixed(2)}`);
  console.log('---------------------------');

  rl.close();
}
function iniciarCalculo() {
  rl.question('Digite a distância em quilômetros: ', (distanciaStr) => {
    const distanciaKm = parseFloat(distanciaStr);

    rl.question('Digite a quantidade de peças: ', (quantidadeStr) => {
      const quantidadePeca = parseInt(quantidadeStr);

      rl.question('Digite o número da região sendo 1: Sul, 2: Sudeste, 3: Centro-oeste): ', (regiaoStr) => {
        const regiao = parseInt(regiaoStr);

        rl.question('Você quer que sua entrega seja rastreada? (sim/nao): ', (rastreamentoStr) => {
          const querRastreamento = rastreamentoStr.toLowerCase() === 'sim';
          calcularFreteTotal(distanciaKm, quantidadePeca, regiao, querRastreamento);
        });
      });
    });
  });
}

iniciarCalculo();