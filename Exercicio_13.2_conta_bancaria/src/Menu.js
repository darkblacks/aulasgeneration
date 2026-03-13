const readline = require('readline');
const ContaController = require('./controller/ContaController');
const ContaCorrente = require('./model/ContaCorrente');
const ContaPoupanca = require('./model/ContaPoupanca');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const banco = new ContaController();

function perguntar(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

function exibirCabecalho() {
  console.log('*****************************************************');
  console.log('                                                     ');
  console.log('                BANCO DO BRAZIL COM Z                ');
  console.log('                                                     ');
  console.log('*****************************************************');
  console.log('                                                     ');
  console.log('            1 - Criar Conta                          ');
  console.log('            2 - Listar todas as Contas               ');
  console.log('            3 - Buscar Conta por Número              ');
  console.log('            4 - Atualizar Dados da Conta             ');
  console.log('            5 - Apagar Conta                         ');
  console.log('            6 - Sacar                                ');
  console.log('            7 - Depositar                            ');
  console.log('            8 - Transferir valores entre Contas      ');
  console.log('            9 - Sair                                 ');
  console.log('                                                     ');
  console.log('*****************************************************');
}

async function criarConta() {
  console.log('\nCriar Conta\n');

  const numero = Number(await perguntar('Digite o número da conta: '));
  const agencia = Number(await perguntar('Digite o número da agência: '));
  const tipo = Number(await perguntar('Digite o tipo da conta (1-Conta Corrente | 2-Conta Poupança): '));
  const titular = await perguntar('Digite o nome do titular: ');
  const saldo = Number(await perguntar('Digite o saldo inicial: '));

  if (tipo === 1) {
    const limite = Number(await perguntar('Digite o limite da conta corrente: '));
    const conta = new ContaCorrente(numero, agencia, titular, saldo, limite);
    banco.cadastrar(conta);
    return;
  }

  if (tipo === 2) {
    const aniversario = Number(await perguntar('Digite o dia do aniversário da conta poupança: '));
    const conta = new ContaPoupanca(numero, agencia, titular, saldo, aniversario);
    banco.cadastrar(conta);
    return;
  }

  console.log('\nTipo de conta inválido!');
}

async function buscarConta() {
  console.log('\nConsultar dados da Conta por número\n');
  const numero = Number(await perguntar('Digite o número da conta: '));
  banco.procurarPorNumero(numero);
}

async function atualizarConta() {
  console.log('\nAtualizar dados da Conta\n');

  const numero = Number(await perguntar('Digite o número da conta: '));
  const contaExistente = banco.procurarPorNumero(numero);

  if (!contaExistente) {
    return;
  }

  const agencia = Number(await perguntar('Digite o novo número da agência: '));
  const titular = await perguntar('Digite o novo nome do titular: ');
  const saldo = Number(await perguntar('Digite o novo saldo: '));

  if (contaExistente.getTipo() === 1) {
    const limite = Number(await perguntar('Digite o novo limite da conta corrente: '));
    const contaAtualizada = new ContaCorrente(numero, agencia, titular, saldo, limite);
    banco.atualizar(contaAtualizada);
    return;
  }

  const aniversario = Number(await perguntar('Digite o novo dia do aniversário da conta poupança: '));
  const contaAtualizada = new ContaPoupanca(numero, agencia, titular, saldo, aniversario);
  banco.atualizar(contaAtualizada);
}

async function apagarConta() {
  console.log('\nApagar Conta\n');
  const numero = Number(await perguntar('Digite o número da conta: '));
  banco.deletar(numero);
}

async function sacar() {
  console.log('\nSaque\n');
  const numero = Number(await perguntar('Digite o número da conta: '));
  const valor = Number(await perguntar('Digite o valor do saque: '));
  banco.sacar(numero, valor);
}

async function depositar() {
  console.log('\nDepósito\n');
  const numero = Number(await perguntar('Digite o número da conta: '));
  const valor = Number(await perguntar('Digite o valor do depósito: '));
  banco.depositar(numero, valor);
}

async function transferir() {
  console.log('\nTransferência entre Contas\n');
  const numeroOrigem = Number(await perguntar('Digite o número da conta de origem: '));
  const numeroDestino = Number(await perguntar('Digite o número da conta de destino: '));
  const valor = Number(await perguntar('Digite o valor da transferência: '));
  banco.transferir(numeroOrigem, numeroDestino, valor);
}

async function main() {
  let opcao = 0;

  while (opcao !== 9) {
    exibirCabecalho();
    opcao = Number(await perguntar('Entre com a opção desejada: '));

    switch (opcao) {
      case 1:
        await criarConta();
        break;
      case 2:
        console.log('\nListar todas as Contas\n');
        banco.listarTodas();
        break;
      case 3:
        await buscarConta();
        break;
      case 4:
        await atualizarConta();
        break;
      case 5:
        await apagarConta();
        break;
      case 6:
        await sacar();
        break;
      case 7:
        await depositar();
        break;
      case 8:
        await transferir();
        break;
      case 9:
        console.log('\nBanco do Brazil com Z - O seu Futuro começa aqui!');
        rl.close();
        return;
      default:
        console.log('\nOpção inválida! Tente novamente.');
    }
  }
}

main();
