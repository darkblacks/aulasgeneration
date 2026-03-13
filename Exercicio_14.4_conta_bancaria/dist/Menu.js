"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("node:readline"));
const ContaController_1 = require("./controller/ContaController");
const ContaCorrente_1 = require("./model/ContaCorrente");
const ContaPoupanca_1 = require("./model/ContaPoupanca");
const contas = new ContaController_1.ContaController();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function perguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => resolve(resposta.trim()));
    });
}
async function perguntarInt(texto) {
    while (true) {
        const valor = Number(await perguntar(texto));
        if (!Number.isNaN(valor) && Number.isInteger(valor)) {
            return valor;
        }
        console.log("\nDigite um número inteiro válido.");
    }
}
async function perguntarFloat(texto) {
    while (true) {
        const entrada = (await perguntar(texto)).replace(",", ".");
        const valor = Number(entrada);
        if (!Number.isNaN(valor)) {
            return valor;
        }
        console.log("\nDigite um número válido.");
    }
}
async function perguntarTipoConta() {
    while (true) {
        console.log("\nTipo da Conta:");
        console.log("1 - Conta Corrente");
        console.log("2 - Conta Poupança");
        const tipo = await perguntarInt("Escolha o tipo da conta: ");
        if (tipo === 1 || tipo === 2) {
            return tipo;
        }
        console.log("\nTipo inválido. Escolha 1 ou 2.");
    }
}
async function criarConta() {
    console.log("\nCriar Conta\n");
    const numero = contas.gerarNumero();
    const agencia = await perguntarInt("Digite o número da Agência: ");
    const titular = await perguntar("Digite o nome do Titular: ");
    const tipo = await perguntarTipoConta();
    const saldo = await perguntarFloat("Digite o saldo inicial: ");
    if (tipo === 1) {
        const limite = await perguntarFloat("Digite o limite da Conta Corrente: ");
        contas.cadastrar(new ContaCorrente_1.ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
    }
    else {
        const aniversario = await perguntarInt("Digite o dia do aniversário da Conta Poupança: ");
        contas.cadastrar(new ContaPoupanca_1.ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
    }
}
function listarContas() {
    console.log("\nListar todas as Contas\n");
    contas.listarTodas();
}
async function buscarConta() {
    console.log("\nBuscar Conta por Número\n");
    const numero = await perguntarInt("Digite o número da Conta: ");
    contas.procurarPorNumero(numero);
}
async function atualizarConta() {
    console.log("\nAtualizar Dados da Conta\n");
    const numero = await perguntarInt("Digite o número da Conta: ");
    if (contas.buscarNoArray(numero) === -1) {
        console.log(`\nA Conta número ${numero} não foi encontrada.`);
        return;
    }
    const agencia = await perguntarInt("Digite o novo número da Agência: ");
    const titular = await perguntar("Digite o novo nome do Titular: ");
    const tipo = await perguntarTipoConta();
    const saldo = await perguntarFloat("Digite o novo saldo: ");
    if (tipo === 1) {
        const limite = await perguntarFloat("Digite o novo limite da Conta Corrente: ");
        contas.atualizar(new ContaCorrente_1.ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
    }
    else {
        const aniversario = await perguntarInt("Digite o novo dia do aniversário da Conta Poupança: ");
        contas.atualizar(new ContaPoupanca_1.ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
    }
}
async function apagarConta() {
    console.log("\nApagar Conta\n");
    const numero = await perguntarInt("Digite o número da Conta: ");
    contas.deletar(numero);
}
async function sacar() {
    console.log("\nSacar\n");
    const numero = await perguntarInt("Digite o número da Conta: ");
    const valor = await perguntarFloat("Digite o valor do saque: ");
    contas.sacar(numero, valor);
}
async function depositar() {
    console.log("\nDepositar\n");
    const numero = await perguntarInt("Digite o número da Conta: ");
    const valor = await perguntarFloat("Digite o valor do depósito: ");
    contas.depositar(numero, valor);
}
async function transferir() {
    console.log("\nTransferir valores entre Contas\n");
    const numeroOrigem = await perguntarInt("Digite o número da Conta de origem: ");
    const numeroDestino = await perguntarInt("Digite o número da Conta de destino: ");
    const valor = await perguntarFloat("Digite o valor da transferência: ");
    contas.transferir(numeroOrigem, numeroDestino, valor);
}
function exibirMenu() {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                 BANCO DA GENERATION                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Número              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            0 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
}
async function pausar() {
    await perguntar("\nPressione ENTER para continuar...");
    console.clear();
}
async function main() {
    while (true) {
        exibirMenu();
        const opcao = await perguntarInt("\nEntre com a opção desejada: ");
        switch (opcao) {
            case 1:
                await criarConta();
                break;
            case 2:
                listarContas();
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
            case 0:
                console.log("\nBanco da Generation - Encerrando o sistema.");
                rl.close();
                process.exit(0);
            default:
                console.log("\nOpção inválida.");
        }
        await pausar();
    }
}
main();
