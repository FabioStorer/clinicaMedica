const consultas = [{
    nomePaciente: 'Fabio',
    nomeMedico: 'Carlos',
    data: '31 de janeiro',
    hora: '13h'
}];
const consultasCanceladas = [];
let dados = {
    nomePaciente: '',
    nomeMedico: '',
    data: '',
    hora: ''
};
let input = '';
let opcao = 0;
let cancelar = 'Consulta cancelada.';

console.log('Olá, bem vindo(a). Selecione uma opção válida para começar:');
console.log(1, ' Adicionar uma nova consulta.');
console.log(2, ' Listar todas as consultas.');
console.log(3, ' Atualizar uma consulta existente.');
console.log(4, ' Cancelar uma consulta.');

process.stdin.on('data', function (data) {
    input = data.toString().trim();

    if (input == 'Sair' || input == 'sair') {
        process.exit();
    }

    if (!opcao) {
        opcao = Number(input);
        if (opcao == 1) {
            console.log('Informe o nome do paciente:');
        } else if (opcao == 2) {
            console.log('Aqui está a lista de todas as consultas cadastradas:');
            for (let i = 0; i < consultas.length; i++) {
                console.log([i], ' - ', consultas[i]);
            }
            console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
            console.log(1, ' Adicionar uma nova consulta.');
            console.log(2, ' Listar todas as consultas.');
            console.log(3, ' Atualizar uma consulta existente.');
            console.log(4, ' Cancelar uma consulta.');
            opcao = 0;
        } else if (opcao == 3) {
            console.log('Vamos atualizar uma consulta.');

            if (!consultas) {
                console.log('Não há consultas cadastradas.')
            } else {

                console.log('Aqui está a lista de todas as consultas cadastradas:');
                for (let i = 0; i < consultas.length; i++) {
                    console.log([i], ' - ', consultas[i]);
                }
                console.log('Escolha pelo índice qual consulta deseja atualizar.');
            }
        } else if (opcao == 4) {
            console.log('Vamos cancelar uma consulta:');
            console.log('Aqui está a lista de todas as consultas cadastradas:');
            let k = 0;
            for (let i = 0; i < consultas.length; i++) {
                console.log([k], ' - ', consultas[i]);
                k++
            }
            console.log('Escolha pelo índice qual consulta deseja cancelar.');
        }
    } else

        switch (opcao) {
            case 1:

                if (!dados.nomePaciente) {
                    dados.nomePaciente = input;
                    console.log('Informe o nome do médico:');
                } else if (!dados.nomeMedico) {
                    dados.nomeMedico = input;
                    console.log('Informe a data da consulta:');
                } else if (!dados.data) {
                    dados.data = input;
                    console.log('Informe o horário da consulta:');
                } else {
                    dados.hora = input;
                    consultas.push(dados);
                    console.log(consultas);
                    dados = {
                        nomePaciente: '',
                        nomeMedico: '',
                        data: '',
                        hora: ''
                    };
                    opcao = 0;
                    console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
                    console.log(1, ' Adicionar uma nova consulta.');
                    console.log(2, ' Listar todas as consultas.');
                    console.log(3, ' Atualizar uma consulta existente.');
                    console.log(4, ' Cancelar uma consulta.');
                }

                break;

            case 3:

                console.log('Escolha pelo índice qual dado deseja atualizar:');
                let j = 1;
                let numeros = Object.keys(dados);
                for (let i = 0; i < numeros.length; i++) {
                    console.log(j + '.', numeros[i]);
                    j++;
                }
                let a = input

                if (!a) {
                    console.log(j);
                    if (a == 1) {
                        dados.nomePaciente = input;
                        console.log(dados.nomePaciente);
                    }
                }

                break;

            case 4:

                let c = input
                consultasCanceladas.push(consultas[c]);
                consultas.splice(c, 1);
                console.log(consultas);
                console.log(consultasCanceladas);
                opcao = 0;
                console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
                console.log(1, ' Adicionar uma nova consulta.');
                console.log(2, ' Listar todas as consultas.');
                console.log(3, ' Atualizar uma consulta existente.');
                console.log(4, ' Cancelar uma consulta.');

                break;

            default:
                console.log('Opção inválida.');
                opcao = 0;
                console.log('Escolha uma nova opção ou digite "Sair" para finalizar.');
                console.log(1, ' Adicionar uma nova consulta.');
                console.log(2, ' Listar todas as consultas.');
                console.log(3, ' Atualizar uma consulta existente.');
                console.log(4, ' Cancelar uma consulta.');
                break;
        }
})