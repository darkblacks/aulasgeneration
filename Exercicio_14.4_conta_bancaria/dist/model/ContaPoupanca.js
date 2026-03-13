"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("./Conta");
class ContaPoupanca extends Conta_1.Conta {
    constructor(numero, agencia, tipo, titular, saldo, aniversario) {
        super(numero, agencia, tipo, titular, saldo);
        this.aniversario = aniversario;
    }
    getAniversario() {
        return this.aniversario;
    }
    setAniversario(aniversario) {
        this.aniversario = aniversario;
    }
    visualizar() {
        super.visualizar();
        console.log(`Dia do Aniversário: ${this.aniversario}`);
    }
}
exports.ContaPoupanca = ContaPoupanca;
