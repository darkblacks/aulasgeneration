const leia = require("readline-sync");

let backend = 0;
let mulheresCisTransFrontend = 0;
let homensCisTransMobileMaior40 = 0;
let naoBinarioFullstackMenor30 = 0;

let totalPessoas = 0;
let somaIdades = 0;

let continuar = "S";

while (continuar.toUpperCase() === "S") {
  const idade = leia.questionInt("\nIdade: ");
  const genero = leia.questionInt(
    "Identidade de Genero (1-Mulher Cis | 2-Homem Cis | 3-Nao Binario | 4-Mulher Trans | 5-Homem Trans | 6-Outros): "
  );
  const dev = leia.questionInt(
    "Pessoa Desenvolvedora (1-Backend | 2-Frontend | 3-Mobile | 4-FullStack): "
  );

  totalPessoas++;
  somaIdades += idade;

  // Backend
  if (dev === 1) backend++;

  // Mulheres Cis (1) e Trans (4) Frontend (2)
  if ((genero === 1 || genero === 4) && dev === 2) mulheresCisTransFrontend++;

  // Homens Cis (2) e Trans (5) Mobile (3) maiores de 40
  if ((genero === 2 || genero === 5) && dev === 3 && idade > 40) {
    homensCisTransMobileMaior40++;
  }

  // Não binário (3) FullStack (4) menores de 30
  if (genero === 3 && dev === 4 && idade < 30) naoBinarioFullstackMenor30++;

  continuar = leia.question("Deseja continuar (S/N): ");
}

const media = totalPessoas > 0 ? (somaIdades / totalPessoas).toFixed(2) : "0.00";

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresCisTransFrontend}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensCisTransMobileMaior40}`);
console.log(`Total de Pessoas Nao Binarias desenvolvedoras FullStack menores de 30 anos: ${naoBinarioFullstackMenor30}`);
console.log(`O numero total de pessoas que responderam a pesquisa: ${totalPessoas}`);
console.log(`A media de idade das pessoas que responderam a pesquisa: ${media}`);