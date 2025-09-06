const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua idade: ', (idade) => {

  let resultado;
  if (idade >= 0 && idade < 15){
    resultado = 'Criança'
  } else if (idade >= 15 && idade < 30){
    resultado = 'Jovem'
  } else if (idade >= 30 && idade < 60){
    resultado = 'Adulto'
  } else {
    resultado = 'Idoso'
  }

  const PesoLab = 2;
  const PesoProva = 5;
  const PesoTrab = 3;
  const SomaPeso = PesoLab + PesoProva + PesoTrab;

  rl.question('Sua nota da Atividade de Laboratório: ', (atividadeLab) => {
    rl.question('Sua nota da Prova do Semestre: ', (provaSemestre) => {
      rl.question('Sua nota do Trabalho Teórico: ', (trabalhoTeorico) => {
        
        let NotaLab = parseFloat(atividadeLab);
        let NotaProva = parseFloat(provaSemestre);
        let NotaTrab = parseFloat(trabalhoTeorico);

        function calcularmedia(NotaLab, NotaProva, NotaTrab) {
          const media = ((PesoLab * NotaLab) + (PesoProva * NotaProva) + (PesoTrab * NotaTrab)) / SomaPeso;
          return media;
        }

        let media = calcularmedia(NotaLab, NotaProva, NotaTrab);
        
        let classificacao;
        if (media >= 0 && media <= 5){
          classificacao = 'F'
        } else if (media > 5 && media <= 6){
          classificacao = 'E'
        } else if (media > 6 && media <= 7){
          classificacao = 'D'
        } else if (media > 7 && media <= 8){
          classificacao = 'C'
        } else if (media > 8 && media <= 9){
          classificacao = 'B'
        } else {
          classificacao = 'A'
        }

        console.log(`\nClassificação de idade: ${resultado}`);
        console.log(`A nota do aluno é = ${media.toFixed(2)} e a sua classificação é ${classificacao}`);
        rl.close();
      });
    });
  });
});