const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const taxaGerenteMV = 0.04;
const taxaFuncionarioN = 0.02;
const taxaFuncionarioMV = 0.01;

function calcularFolhaDePagamento(salarioMinimoEstadual, codigo, horasTrabalhadas, turno, categoria) {
  
  let valorHoraTrabalhada;

  if (categoria == 'G' && (turno == 'M' || turno == 'V')) {
    valorHoraTrabalhada = salarioMinimoEstadual * taxaGerenteMV;
  } else if (categoria === 'F' && turno === 'N') {
    valorHoraTrabalhada = salarioMinimoEstadual * taxaFuncionarioN;
  } else if (categoria === 'F' && (turno === 'M' || turno === 'V')) {
    valorHoraTrabalhada = salarioMinimoEstadual * taxaFuncionarioMV;
  } else {
    console.log('Dados de categoria ou turno inválidos.');
    rl.close();
    return;
  }

  const salarioInicial = horasTrabalhadas * valorHoraTrabalhada;

  let auxilioAlimentacao;
  if (salarioInicial <= 800.00) {
    auxilioAlimentacao = salarioInicial * 0.25;
  } else if (salarioInicial <= 1200) {
    auxilioAlimentacao = salarioInicial * 0.20;
  } else {
    auxilioAlimentacao = salarioInicial * 0.15;
  }

  const salarioFinal = salarioInicial + auxilioAlimentacao;

  console.log('\n--- Pagamento ---');
  console.log(`Salário Mínimo Estadual: R$ ${salarioMinimoEstadual.toFixed(2)}`);
  console.log(`Código do Funcionário: ${codigo}`);
  console.log(`Horas Trabalhadas: ${horasTrabalhadas}`);
  console.log(`Valor da Hora Trabalhada: R$ ${valorHoraTrabalhada.toFixed(2)}`);
  console.log(`Salário Inicial: R$ ${salarioInicial.toFixed(2)}`);
  console.log(`Auxílio Alimentação: R$ ${auxilioAlimentacao.toFixed(2)}`);
  console.log(`Salário Final: R$ ${salarioFinal.toFixed(2)}`);
  console.log('-----------------------------------');
  rl.close();
}

rl.question('Digite o valor do salário mínimo estadual: ', (salarioMinimoStr) => {
  const salarioMinimoEstadual = parseFloat(salarioMinimoStr);

  rl.question('Digite o código do funcionário (número inteiro): ', (codigoStr) => {
    const codigo = parseInt(codigoStr);

    rl.question('Digite o número de horas trabalhadas no mês: ', (horasStr) => {
      const horasTrabalhadas = parseInt(horasStr);

      rl.question('Digite o turno de trabalho (M, V ou N): ', (turno) => {
        const turnoUpper = turno.toUpperCase();

        rl.question('Digite a categoria do funcionário (F ou G): ', (categoria) => {
          const categoriaUpper = categoria.toUpperCase();
          calcularFolhaDePagamento(salarioMinimoEstadual, codigo, horasTrabalhadas, turnoUpper, categoriaUpper);
        });
      });
    });
  });
});