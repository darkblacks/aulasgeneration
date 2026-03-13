"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, agencia, tipo, titular, saldo, limite) {
        super(numero, agencia, tipo, titular, saldo);
        this.limite = limite;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
    }
    visualizar() {
        super.visualizar();
        console.log(`Limite: R$ ${this.limite.toFixed(2)}`);
    }
}
exports.ContaCorrente = ContaCorrente;
