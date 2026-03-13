"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, agencia, tipo, titular, saldo) {
        this.numero = numero;
        this.agencia = agencia;
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    getNumero() {
        return this.numero;
    }
    getAgencia() {
        return this.agencia;
    }
    getTipo() {
        return this.tipo;
    }
    getTitular() {
        return this.titular;
    }
    getSaldo() {
        return this.saldo;
    }
    setAgencia(agencia) {
        this.agencia = agencia;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setTitular(titular) {
        this.titular = titular;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= 0 || valor > this.saldo) {
            return false;
        }
        this.saldo -= valor;
        return true;
    }
    depositar(valor) {
        if (valor <= 0) {
            return false;
        }
        this.saldo += valor;
        return true;
    }
    visualizar() {
        const tipoConta = this.tipo === 1 ? "Conta Corrente" : "Conta Poupança";
        console.log("\n*************************************");
        console.log("Dados da Conta");
        console.log("*************************************");
        console.log(`Número da Conta: ${this.numero}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Tipo da Conta: ${tipoConta}`);
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
}
exports.Conta = Conta;
