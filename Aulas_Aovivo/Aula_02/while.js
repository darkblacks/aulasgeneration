const leia = require("readline-sync");

const senhacorreta = "1234";
let senhadigitada = "";
let contador = 0;
const maxTentativas = 3;

while (senhadigitada !== senhacorreta && contador < maxTentativas) {
  senhadigitada = leia.question("Digite a Senha: ");
  contador++;

  const tentativasRestantes = maxTentativas - contador;

  if (senhadigitada === senhacorreta) {
    console.log("Acesso liberado");
    break;
  } else if (tentativasRestantes > 0) {
    console.log("Senha incorreta. Você tem", tentativasRestantes, "tentativa(s).");
  } else {
    console.log("Acesso negado");
  }
}