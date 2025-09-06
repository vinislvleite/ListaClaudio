const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
  rl.question('Digite sua altura em cm: ', (alturaCM) => {
    rl.question('Digite seu peso em KG: ', (peso) => {

      let alturaFloat = parseFloat(alturaCM);
      let pesoFloat = parseFloat(peso);

      let alturaMetros = alturaFloat / 100;
      let calculoIMC = pesoFloat / (alturaMetros * alturaMetros);

      let resultado;

      if (calculoIMC < 16) {
        resultado = 'Baixo peso muito grave';
      } else if (calculoIMC >= 16 && calculoIMC <= 16.99) {
        resultado = 'Baixo peso grave';
      } else if (calculoIMC >= 17 && calculoIMC <= 18.49) {
        resultado = 'Baixo peso';
      } else if (calculoIMC >= 18.50 && calculoIMC <= 24.99) {
        resultado = 'Peso normal';
      } else if (calculoIMC >= 25 && calculoIMC <= 29.99) {
        resultado = 'Sobrepeso';
      } else if (calculoIMC >= 30 && calculoIMC <= 34.99) {
        resultado = 'Obesidade grau I';
      } else if (calculoIMC >= 35 && calculoIMC <= 39.99) {
        resultado = 'Obesidade grau II';
      } else {
        resultado = 'Obesidade grau III';
      }

      console.log(`${nome} possui índice de massa corporal igual a ${calculoIMC.toFixed(2)}, sendo classificado como: "${resultado}"`);
      rl.close();
    });
  });
});