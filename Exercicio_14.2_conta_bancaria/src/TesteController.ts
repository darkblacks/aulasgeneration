import { ContaController } from "./controller/ContaController";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";

const contas = new ContaController();

const conta1 = new ContaCorrente(contas.gerarNumero(), 123, 1, "Ana", 1000, 500);
const conta2 = new ContaPoupanca(contas.gerarNumero(), 456, 2, "Bia", 200, 10);

contas.cadastrar(conta1);
contas.cadastrar(conta2);

console.log("\n=== LISTAGEM INICIAL ===");
contas.listarTodas();

console.log("\n=== BUSCA CONTA 2 ===");
contas.procurarPorNumero(2);

console.log("\n=== SAQUE CONTA 1 ===");
contas.sacar(1, 100);

console.log("\n=== DEPÓSITO CONTA 2 ===");
contas.depositar(2, 50);

console.log("\n=== TRANSFERÊNCIA 1 -> 2 ===");
contas.transferir(1, 2, 200);

console.log("\n=== ATUALIZAÇÃO CONTA 1 ===");
contas.atualizar(new ContaCorrente(1, 999, 1, "Ana Silva", 700, 800));
contas.procurarPorNumero(1);

console.log("\n=== EXCLUSÃO CONTA 1 ===");
contas.deletar(1);

console.log("\n=== LISTAGEM FINAL ===");
contas.listarTodas();
