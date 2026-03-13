"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaController = void 0;
class ContaController {
    constructor() {
        this.listaContas = [];
        this.numero = 0;
    }
    procurarPorNumero(numero) {
        const indice = this.buscarNoArray(numero);
        if (indice !== -1) {
            this.listaContas[indice].visualizar();
        }
        else {
            console.log(`\nA Conta número ${numero} não foi encontrada.`);
        }
    }
    listarTodas() {
        if (this.listaContas.length === 0) {
            console.log("\nNenhuma conta cadastrada.");
            return;
        }
        for (const conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta) {
        this.listaContas.push(conta);
        console.log(`\nA Conta número ${conta.getNumero()} foi cadastrada com sucesso!`);
    }
    atualizar(conta) {
        const indice = this.buscarNoArray(conta.getNumero());
        if (indice !== -1) {
            this.listaContas[indice] = conta;
            console.log(`\nA Conta número ${conta.getNumero()} foi atualizada com sucesso!`);
        }
        else {
            console.log(`\nA Conta número ${conta.getNumero()} não foi encontrada.`);
        }
    }
    deletar(numero) {
        const indice = this.buscarNoArray(numero);
        if (indice !== -1) {
            this.listaContas.splice(indice, 1);
            console.log(`\nA Conta número ${numero} foi apagada com sucesso!`);
        }
        else {
            console.log(`\nA Conta número ${numero} não foi encontrada.`);
        }
    }
    sacar(numero, valor) {
        const indice = this.buscarNoArray(numero);
        if (indice === -1) {
            console.log(`\nA Conta número ${numero} não foi encontrada.`);
            return;
        }
        const sucesso = this.listaContas[indice].sacar(valor);
        if (sucesso) {
            console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso na conta ${numero}!`);
        }
        else {
            console.log("\nNão foi possível realizar o saque. Verifique o saldo e o valor informado.");
        }
    }
    depositar(numero, valor) {
        const indice = this.buscarNoArray(numero);
        if (indice === -1) {
            console.log(`\nA Conta número ${numero} não foi encontrada.`);
            return;
        }
        const sucesso = this.listaContas[indice].depositar(valor);
        if (sucesso) {
            console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso na conta ${numero}!`);
        }
        else {
            console.log("\nNão foi possível realizar o depósito. Informe um valor válido.");
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        const indiceOrigem = this.buscarNoArray(numeroOrigem);
        const indiceDestino = this.buscarNoArray(numeroDestino);
        if (indiceOrigem === -1) {
            console.log(`\nA Conta de origem número ${numeroOrigem} não foi encontrada.`);
            return;
        }
        if (indiceDestino === -1) {
            console.log(`\nA Conta de destino número ${numeroDestino} não foi encontrada.`);
            return;
        }
        const saqueRealizado = this.listaContas[indiceOrigem].sacar(valor);
        if (!saqueRealizado) {
            console.log("\nNão foi possível realizar a transferência. Verifique o saldo e o valor informado.");
            return;
        }
        this.listaContas[indiceDestino].depositar(valor);
        console.log(`\nTransferência de R$ ${valor.toFixed(2)} da conta ${numeroOrigem} para a conta ${numeroDestino} realizada com sucesso!`);
    }
    gerarNumero() {
        this.numero += 1;
        return this.numero;
    }
    buscarNoArray(numero) {
        return this.listaContas.findIndex((conta) => conta.getNumero() === numero);
    }
}
exports.ContaController = ContaController;
