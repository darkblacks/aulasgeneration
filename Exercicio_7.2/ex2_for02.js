const leia = require("readline-sync");

let pares = 0;
let impares = 0;
const usados = new Set();
/*/ Usei um Set para impedir numeros repetidos.
 O Set guarda valores UNICOS: quando adicionamos um numero com usados.add(n),
 ele fica registrado.
Antes de aceitar uma nova entrada, checamos usados.has(n):
 se retornar true, significa que esse numero ja foi digitado, entao pedimos outro.
 Assim garantimos que os 10 numeros informados sejam diferentes (sem repeticao). /*/

for (let i = 1; i <= 10; i++) {
  let n;

  while (true) {
    const entrada = leia.question(`Digite o ${i}º numero: `).trim();

    if (entrada === "") {
      console.log("Hey, voce nao digitou nada. Tente novamente!");
      continue;
    }
    /*/ OBS: O enunciado so pede ler 10 numeros e contar pares/impares.
Eu adicionei esta validacao com expressão regular para deixar o programa mais robusto:
  1º^-?\d+$/ eh uma expressao regular que garante que a entrada seja um INTEIRO.
  2º- ^ e $ forcam a validar a string inteira (do começo ao fim)
  3º- -? permite sinal negativo opcional
  4º- \d+ exige um ou mais digitos (0 a 9)
O metodo .test(entrada) retorna true/false:
 true = a entrada eh um numero inteiro valido; false = tem letras, vazio ou decimal.
 A onde aprendeer? https://regexlearn.com/pt-br/*/
    if (!/^-?\d+$/.test(entrada)) {
      console.log("Hey, isto nao e um numero inteiro. Tente novamente!");
      continue;
    }

    n = Number(entrada);

    if (usados.has(n)) {
      console.log("Hey, numero repetido! Digite outro.");
      continue;
    }

    usados.add(n);
    break;
  }

  if (n % 2 === 0) pares++;
  else impares++;
}

console.log(`\nTotal de numeros pares: ${pares}`);
console.log(`Total de numeros impares: ${impares}`);