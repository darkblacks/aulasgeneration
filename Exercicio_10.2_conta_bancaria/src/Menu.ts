import leia = require("readline-sync");
import { Colors } from "./util/Colors";
import { Conta } from "./Conta";

const contas: Conta[] = [];
let opcao: number;
let proximoNumero = 1;

function gerarNumeroConta(): string {
  const numero = String(proximoNumero).padStart(4, "0");
  proximoNumero++;
  return numero;
}

function buscarContaPorNumero(numero: string): Conta | undefined {
  return contas.find((conta) => conta.getNumero() === numero);
}

function pedirSenha4Digitos(): number {
  let senha: number;

  do {
    senha = leia.questionInt("Digite uma senha numerica de 4 digitos: ");

    if (senha < 1000 || senha > 9999) {
      console.log(Colors.FgRed + "Senha invalida. Use exatamente 4 digitos numericos." + Colors.Reset);
    }
  } while (senha < 1000 || senha > 9999);

  return senha;
}

function criarConta(): void {
  console.log(Colors.FgGreen + "\nCriar Conta\n" + Colors.Reset);

  const nome = leia.question("Digite o nome do titular: ").trim();

  if (!nome) {
    console.log(Colors.FgRed + "Nome invalido." + Colors.Reset);
    return;
  }

  const senha = pedirSenha4Digitos();
  const numero = gerarNumeroConta();

  const novaConta = new Conta(numero, nome, senha, 0);
  contas.push(novaConta);

  console.log(Colors.FgGreen + `\nConta criada com sucesso! Numero da conta: ${numero}` + Colors.Reset);
}

function listarContas(): void {
  console.log(Colors.FgGreen + "\nListar todas as Contas\n" + Colors.Reset);

  if (contas.length === 0) {
    console.log("Nenhuma conta cadastrada.");
    return;
  }

  for (const conta of contas) {
    conta.exibirResumo();
  }
}

function buscarConta(): void {
  console.log(Colors.FgGreen + "\nBuscar Conta por Numero\n" + Colors.Reset);

  const numero = leia.question("Digite o numero da conta: ").trim();
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log(Colors.FgRed + "Conta nao encontrada." + Colors.Reset);
    return;
  }

  conta.exibirDetalhes();
}

function atualizarConta(): void {
  console.log(Colors.FgGreen + "\nAtualizar Dados da Conta\n" + Colors.Reset);

  const numero = leia.question("Digite o numero da conta: ").trim();
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log(Colors.FgRed + "Conta nao encontrada." + Colors.Reset);
    return;
  }

  const senha = leia.questionInt("Digite a senha da conta: ");

  if (!conta.validarSenha(senha)) {
    console.log(Colors.FgRed + "Senha incorreta." + Colors.Reset);
    return;
  }

  const novoNome = leia.question("Digite o novo nome do titular: ").trim();

  if (!novoNome) {
    console.log(Colors.FgRed + "Nome invalido." + Colors.Reset);
    return;
  }

  conta.atualizarNome(novoNome);
  console.log(Colors.FgGreen + "Nome atualizado com sucesso!" + Colors.Reset);
}

function apagarConta(): void {
  console.log(Colors.FgGreen + "\nApagar Conta\n" + Colors.Reset);

  const numero = leia.question("Digite o numero da conta: ").trim();
  const indice = contas.findIndex((conta) => conta.getNumero() === numero);

  if (indice === -1) {
    console.log(Colors.FgRed + "Conta nao encontrada." + Colors.Reset);
    return;
  }

  let confirmacao: string;

  do {
    confirmacao = leia.question("Tem certeza que deseja apagar? (S/N): ").trim().toUpperCase();

    if (confirmacao !== "S" && confirmacao !== "N") {
      console.log("Digite apenas S ou N.");
    }
  } while (confirmacao !== "S" && confirmacao !== "N");

  if (confirmacao === "S") {
    contas.splice(indice, 1);
    console.log(Colors.FgGreen + "Conta apagada com sucesso!" + Colors.Reset);
  } else {
    console.log("Operacao cancelada.");
  }
}

function sacar(): void {
  console.log(Colors.FgGreen + "\nSacar\n" + Colors.Reset);

  const numero = leia.question("Digite o numero da conta: ").trim();
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log(Colors.FgRed + "Conta nao encontrada." + Colors.Reset);
    return;
  }

  const senha = leia.questionInt("Digite a senha da conta: ");

  if (!conta.validarSenha(senha)) {
    console.log(Colors.FgRed + "Senha incorreta." + Colors.Reset);
    return;
  }

  const valor = leia.questionFloat("Digite o valor do saque: ");

  if (conta.sacar(valor)) {
    console.log(Colors.FgGreen + `Saque realizado com sucesso! Saldo atual: R$ ${conta.getSaldo().toFixed(2)}` + Colors.Reset);
  } else {
    console.log(Colors.FgRed + "Nao foi possivel realizar o saque." + Colors.Reset);
  }
}

function depositar(): void {
  console.log(Colors.FgGreen + "\nDepositar\n" + Colors.Reset);

  const numero = leia.question("Digite o numero da conta: ").trim();
  const conta = buscarContaPorNumero(numero);

  if (!conta) {
    console.log(Colors.FgRed + "Conta nao encontrada." + Colors.Reset);
    return;
  }

  const valor = leia.questionFloat("Digite o valor do deposito: ");

  if (conta.depositar(valor)) {
    console.log(Colors.FgGreen + `Deposito realizado com sucesso! Saldo atual: R$ ${conta.getSaldo().toFixed(2)}` + Colors.Reset);
  } else {
    console.log(Colors.FgRed + "Valor de deposito invalido." + Colors.Reset);
  }
}

function transferir(): void {
  console.log(Colors.FgGreen + "\nTransferir valores entre Contas\n" + Colors.Reset);

  const numeroOrigem = leia.question("Digite a conta de origem: ").trim();
  const contaOrigem = buscarContaPorNumero(numeroOrigem);

  if (!contaOrigem) {
    console.log(Colors.FgRed + "Conta de origem nao encontrada." + Colors.Reset);
    return;
  }

  const senha = leia.questionInt("Digite a senha da conta de origem: ");

  if (!contaOrigem.validarSenha(senha)) {
    console.log(Colors.FgRed + "Senha incorreta." + Colors.Reset);
    return;
  }

  const numeroDestino = leia.question("Digite a conta de destino: ").trim();
  const contaDestino = buscarContaPorNumero(numeroDestino);

  if (!contaDestino) {
    console.log(Colors.FgRed + "Conta de destino nao encontrada." + Colors.Reset);
    return;
  }

  if (numeroOrigem === numeroDestino) {
    console.log(Colors.FgRed + "Nao e possivel transferir para a mesma conta." + Colors.Reset);
    return;
  }

  const valor = leia.questionFloat("Digite o valor da transferencia: ");

  if (contaOrigem.transferir(contaDestino, valor)) {
    console.log(Colors.FgGreen + "Transferencia realizada com sucesso!" + Colors.Reset);
    console.log(`Saldo da conta origem: R$ ${contaOrigem.getSaldo().toFixed(2)}`);
  } else {
    console.log(Colors.FgRed + "Nao foi possivel realizar a transferencia." + Colors.Reset);
  }
}

do {
  console.log(Colors.FgCyan);
  console.log("*****************************************************");
  console.log("                                                     ");
  console.log("                BANCO DO BRAZIL COM Z                ");
  console.log("                                                     ");
  console.log("*****************************************************");
  console.log("                                                     ");
  console.log("            1 - Criar Conta                          ");
  console.log("            2 - Listar todas as Contas               ");
  console.log("            3 - Buscar Conta por Numero              ");
  console.log("            4 - Atualizar Dados da Conta             ");
  console.log("            5 - Apagar Conta                         ");
  console.log("            6 - Sacar                                ");
  console.log("            7 - Depositar                            ");
  console.log("            8 - Transferir valores entre Contas      ");
  console.log("            9 - Sair                                 ");
  console.log("                                                     ");
  console.log("*****************************************************");
  console.log(Colors.Reset);

  opcao = leia.questionInt("Entre com a opcao desejada: ");

  switch (opcao) {
    case 1:
      criarConta();
      break;
    case 2:
      listarContas();
      break;
    case 3:
      buscarConta();
      break;
    case 4:
      atualizarConta();
      break;
    case 5:
      apagarConta();
      break;
    case 6:
      sacar();
      break;
    case 7:
      depositar();
      break;
    case 8:
      transferir();
      break;
    case 9:
      console.log(Colors.FgMagenta + "\nBanco do Brazil com Z - O seu Futuro comeca aqui!" + Colors.Reset);
      break;
    default:
      console.log(Colors.FgRed + "\nOpcao invalida!\n" + Colors.Reset);
      break;
  }
} while (opcao !== 9);