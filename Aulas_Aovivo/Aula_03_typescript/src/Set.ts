import readlineSync from "readline-sync";

const nomes = new Set<string>();
const idades = new Map<string, number>();

let continuar = true;

do {
  console.log("\n=== MENU ALUNOS ===");
  console.log("1 - Adicionar aluno (nome e idade)");
  console.log("2 - Remover aluno (pelo nome)");
  console.log("3 - Listar alunos");
  console.log("0 - Sair");

  const opcao = readlineSync.questionInt("Escolha uma opcao: ");

  switch (opcao) {
    case 1: {
  const nome = readlineSync.question("Nome do aluno: ").trim();
  const idade = readlineSync.questionInt("Idade: ");

  if (!nome) {
    console.log("Nome nao pode ser vazio.");
    break;
  }
  if (idade < 0) {
    console.log("Idade invalida.");
    break;
  }

  if (nomes.has(nome)) {
    console.log(`Aluno "${nome}" ja cadastrado. Nao posso duplicar.`);
    break;
  }

  nomes.add(nome);
  idades.set(nome, idade);
  console.log("Aluno cadastrado com sucesso!");
  break;
}

    case 2: {
      const nome = readlineSync.question("Nome para remover: ").trim();
      if (!nome) { console.log("Nome nao pode ser vazio."); break; }

      const existia = nomes.delete(nome);
      idades.delete(nome);

      console.log(existia ? "Aluno removido." : "Aluno nao encontrado.");
      break;
    }

    case 3: {
  if (nomes.size === 0) {
    console.log("Nenhum aluno cadastrado.");
    break;
  }

  console.log("\n--- LISTA DE ALUNOS ---");
  for (const [nome, idade] of idades) {
    console.log(`Nome: ${nome} | Idade: ${idade}`);
  }
  break;
}

    case 0:
      continuar = false;
      console.log("Saindo...");
      break;

    default:
      console.log("Opcao invalida.");
  }
} while (continuar);