const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Data: ', (data) => {
    const resultado = ConverterData(data);
    console.log(resultado);
    rl.close();
});

function ConverterData(data) {
    const dataQuebrada = data.split('/')

    if(dataQuebrada.length !== 3){
        return "Formato de data errado. Use dd/mm/aaaa"
    }

    const dia = dataQuebrada[0]
    const mes = parseInt(dataQuebrada[1])
    const ano = dataQuebrada[2]

    if (dia < 1 || dia > 31) {
        return "A Dia deve ser entre 1 e 31";
    }
    
    if (mes < 1 || mes > 12) {
        return "O Mês deve ser entre 1 e 12.";
    }

    let nomeMes;
    
    switch(mes) {
        case 1: nomeMes = "janeiro"; break;
        case 2: nomeMes = "fevereiro"; break;
        case 3: nomeMes = "março"; break;
        case 4: nomeMes = "abril"; break;
        case 5: nomeMes = "maio"; break;
        case 6: nomeMes = "junho"; break;
        case 7: nomeMes = "julho"; break;
        case 8: nomeMes = "agosto"; break;
        case 9: nomeMes = "setembro"; break;
        case 10: nomeMes = "outubro"; break;
        case 11: nomeMes = "novembro"; break;
        case 12: nomeMes = "dezembro"; break;
        default: return "Mês inválido";
    }

    return `${dia} de ${nomeMes} de ${ano}`;
}