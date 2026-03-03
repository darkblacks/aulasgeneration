// ex05.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const cod = parseInt(await ask("Código do Produto: "));
  const qtd = parseInt(await ask("Quantidade: "));

  let produto = "";
  let preco = 0;

  switch (cod) {
    case 1: produto = "Cachorro Quente"; preco = 10.0; break;
    case 2: produto = "X-Salada"; preco = 15.0; break;
    case 3: produto = "X-Bacon"; preco = 18.0; break;
    case 4: produto = "Bauru"; preco = 12.0; break;
    case 5: produto = "Refrigerante"; preco = 8.0; break;
    case 6: produto = "Suco de laranja"; preco = 13.0; break;
    default:
      console.log("\nCódigo de produto inválido!");
      rl.close();
      return;
  }

  const total = qtd * preco;
  console.log(`\nProduto: ${produto}`);
  console.log(`Valor total: R$ ${total.toFixed(2)}`);

  rl.close();
})();
