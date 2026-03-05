const leia = require("readline-sync");

let continuar = true;

while (continuar) {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
  const palpite = leia.questionInt("Adivinhe um numero de 1 a 10: ");

  if (palpite === numeroSecreto) {
    console.log("Acertou! Era", numeroSecreto);
  } else {
    console.log("Errou! Era", numeroSecreto);
  }

  continuar = leia.keyInYN("Quer jogar de novo? ");
}

console.log("Fim de jogo!");