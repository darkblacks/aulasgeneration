const readline = require('readline');
const Conta = require('./model/Conta');

const contas = [
  new Conta(101, '0001', 'Conta Corrente', 'Maria da Silva', 1500.0),
  new Conta(202, '0001', 'Conta Poupança', 'João Santos', 800.0),
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => resolve(resposta.trim()));
  });
}

function exibirMenu() {
  console.log('************************************');
  console.log('        BANCO DO BRAZIL COM Z       ');
  console.log('************************************');
  console.log('1 - Listar todas as contas');
  console.log('2 - Buscar conta por número');
  console.log('3 - Sacar');
  console.log('4 - Depositar');
  console.log('0 - Sair');
  console.log('************************************');
}

function buscarContaPorNumero(numero) {
  return contas.find((conta) => conta.numero === numero);
}

async function listarContas() {
  console.log('\nLISTA DE CONTAS\n');

  if (contas.length === 0) {
    console.log('Nenhuma conta cadastrada.\n');
    return;
  }

  contas.forEach((conta) => conta.visualizar());
}

async function consultarConta() {
  const numero = Number(await perguntar('Digite o número da conta: '));
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log('\nConta não encontrada.\n');
    return;
  }

  console.log('');
  conta.visualizar();
}

async function realizarSaque() {
  const numero = Number(await perguntar('Digite o número da conta: '));
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log('\nConta não encontrada.\n');
    return;
  }

  const valor = Number(await perguntar('Digite o valor do saque: '));
  console.log('');
  conta.sacar(valor);
}

async function realizarDeposito() {
  const numero = Number(await perguntar('Digite o número da conta: '));
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log('\nConta não encontrada.\n');
    return;
  }

  const valor = Number(await perguntar('Digite o valor do depósito: '));
  console.log('');
  conta.depositar(valor);
}

async function main() {
  let opcao;

  do {
    exibirMenu();
    opcao = Number(await perguntar('Digite uma opção: '));
    console.log('');

    switch (opcao) {
      case 1:
        await listarContas();
        break;
      case 2:
        await consultarConta();
        break;
      case 3:
        await realizarSaque();
        break;
      case 4:
        await realizarDeposito();
        break;
      case 0:
        console.log('Banco do Brazil com Z - Encerrando o sistema.');
        break;
      default:
        console.log('Opção inválida. Tente novamente.\n');
    }
  } while (opcao !== 0);

  rl.close();
}

main();
