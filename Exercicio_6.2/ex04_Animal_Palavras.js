// ex04.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const p1 = (await ask("Digite a 1ª palavra: ")).trim().toLowerCase();
  const p2 = (await ask("Digite a 2ª palavra: ")).trim().toLowerCase();
  const p3 = (await ask("Digite a 3ª palavra: ")).trim().toLowerCase();

  let animal = "";

  if (p1 === "vertebrado") {
    if (p2 === "ave") {
      if (p3 === "carnívoro" || p3 === "carnivoro") animal = "Águia";
      else if (p3 === "onívoro" || p3 === "onivoro") animal = "Pomba";
    } else if (p2 === "mamífero" || p2 === "mamifero") {
      if (p3 === "onívoro" || p3 === "onivoro") animal = "Homem";
      else if (p3 === "herbívoro" || p3 === "herbivoro") animal = "Vaca";
    }
  } else if (p1 === "invertebrado") {
    if (p2 === "inseto") {
      if (p3 === "hematófago" || p3 === "hematofago") animal = "Pulga";
      else if (p3 === "herbívoro" || p3 === "herbivoro") animal = "Lagarta";
    } else if (p2 === "anelídeo" || p2 === "anelideo") {
      if (p3 === "hematófago" || p3 === "hematofago") animal = "Sanguessuga";
      else if (p3 === "onívoro" || p3 === "onivoro") animal = "Minhoca";
    }
  }

  console.log(`\n${animal || "Entrada inválida!"}`);
  rl.close();
})();
