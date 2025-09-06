const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite a operação (soma ou subtração): ', (operacao) => {
    rl.question('Digite o segundo número: ', (num2) => {

      let numeroFloat = parseFloat(num1);
      let numeroFloat2 = parseFloat(num2);

      function calculoAritimético(num1, num2, operacao) {
        if (operacao.toLowerCase() === 'soma') {
          return num1 + num2;
        } else if (operacao.toLowerCase() === 'subtração') {
          return num1 - num2;
        } else {
          return 'Operação inválida';
        }
      }

      let resultado = calculoAritimético(numeroFloat, numeroFloat2, operacao);

      console.log(`O resultado é: ${resultado}`);
      
      rl.close();
    });
  });
});
