const readline = require('readline');
const ContaController = require('./controller/ContaController');
const ContaCorrente = require('./model/ContaCorrente');
const ContaPoupanca = require('./model/ContaPoupanca');

const banco = new ContaController();

banco.listaContas.push(new ContaCorrente(101, '0001', 'Maria da Silva', 1500.0));
banco.listaContas.push(new ContaPoupanca(202, '0001', 'João Santos', 800.0));

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

async function listarContas() {
  console.log('\nLISTA DE CONTAS\n');
  banco.listarTodas();
}

async function consultarConta() {
  const numero = Number(await perguntar('Digite o número da conta: '));
  const conta = banco.procurarPorNumero(numero);

  if (!conta) {
    console.log('\nConta não encontrada.\n');
    return;
  }

  console.log('');
  conta.visualizar();
}

async function realizarSaque() {
  const numero = Number(await perguntar('Digite o número da conta: '));
  const valor = Number(await perguntar('Digite o valor do saque: '));
  console.log('');
  banco.sacar(numero, valor);
}

async function realizarDeposito() {
  const numero = Number(await perguntar('Digite o número da conta: '));
  const valor = Number(await perguntar('Digite o valor do depósito: '));
  console.log('');
  banco.depositar(numero, valor);
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
