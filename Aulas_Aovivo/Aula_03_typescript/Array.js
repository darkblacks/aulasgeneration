"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const notas = new Array(5);
for (let i = 0; i < notas.length; i++) {
    notas[i] = readline_sync_1.default.questionFloat("Digite a nota: ");
}
console.table(notas);
