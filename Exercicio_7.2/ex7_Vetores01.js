const leia = require("readline-sync");

// vetor fixo do enunciado/exemplo
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const alvo = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === alvo) {
    posicao = i;
    break;
  }
}

if (posicao >= 0) {
  console.log(`\nO numero ${alvo} esta localizado na posicao: ${posicao}`);
} else {
  console.log(`\nO numero ${alvo} nao foi encontrado!`);
}