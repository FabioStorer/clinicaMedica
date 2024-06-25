const consultas = [];
let dados = {
    nomeP: '',
    nomeM: '',
    data: '',
    hora: ''
};
let input = '';
let opcao = 0;

console.log('Olá, bem vindo(a). Selecione uma opção válida para começar:');
console.log(1, ' Adicionar uma nova consulta.');
console.log(2, ' Listar todas as consultas.');
console.log(3, ' Atualizar uma consulta existente.');
console.log(4, ' Cancelar uma consulta.');

process.stdin.on('data', function (data) {
    input = data.toString().trim();

    if (!opcao) {
        opcao = Number(input);
    } else if (opcao == 1) {
        console.log('Beleza. Vamos adicionar uma nova consulta.');
        console.log('Informe o nome do paciente:');
    } else if (opcao == 2) {

    }

    switch (opcao) {
        case 1:

            if (!dados.nomeP) {
                dados.nomeP = input;
                console.log('Informe o nome do médico:');
            } else if (!dados.nomeM) {
                dados.nomeM = input;
                console.log('Informe a data da consulta:');
            } else if (!dados.data) {
                dados.data = input;
                console.log('Informe o horário da consulta:');
            } else if (!dados.hora) {
                dados.hora = input;
                consultas.push(dados);
                console.log(consultas);
            }

            break;

        case 2:

            break;

        case 3:

            break;

        case 4:

            break;

        default:
            console.log('Opção inválida.');
            break;
    }
})