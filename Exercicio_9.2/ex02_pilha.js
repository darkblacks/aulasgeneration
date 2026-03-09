const leia = require("readline-sync");

/*
  Classe Stack = Pilha
  Na pilha, o último que entra é o primeiro que sai.
*/
class Stack {
  constructor() {
    /* Guarda os elementos da pilha em um array */
    this.items = [];
  }

  /*
    push(item)
    Adiciona um novo elemento no TOPO da pilha
  */
  push(item) {
    this.items.push(item);
  }

  /*
    pop()
    Remove o elemento do TOPO da pilha
    Se estiver vazia, retorna null
  */
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  /*
    isEmpty()
    Verifica se a pilha está vazia
  */
  isEmpty() {
    return this.items.length === 0;
  }

  /*
    printStack()
    Mostra todos os livros da pilha
  */
  printStack() {
    for (const item of this.items) {
      console.log(item);
    }
  }
}

/* Cria a pilha */
const pilha = new Stack();

/* Guarda a opção do menu */
let opcao;

/*
  Repete o menu até o usuário escolher 0
*/
do {
  console.log("\n************************************");
  console.log("1 - Adicionar Livro na Pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da Pilha");
  console.log("0 - Sair");
  console.log("************************************");

  /* Lê a opção escolhida */
  opcao = leia.questionInt("Digite uma opcao: ");

  switch (opcao) {
    case 1:
      /* Pede o nome do livro */
      const nomeLivro = leia.question("Digite o nome: ");

      /* Adiciona o livro no topo da pilha */
      pilha.push(nomeLivro);

      console.log("\nPilha:");
      pilha.printStack();
      console.log("\nLivro adicionado!");
      break;

    case 2:
      console.log("\nLista de Livros na Pilha:");

      /* Verifica se a pilha está vazia */
      if (pilha.isEmpty()) {
        console.log("A Pilha esta vazia!");
      } else {
        pilha.printStack();
      }
      break;

    case 3:
  if (pilha.isEmpty()) {
    console.log("\nA Pilha esta vazia!");
  } else {
    const livroRetirado = pilha.pop();

    console.log(`\nO Livro ${livroRetirado} foi retirado da pilha!`);

    if (pilha.isEmpty()) {
      console.log("\nA Pilha agora esta vazia!");
    } else {
      console.log("\nPilha:");
      pilha.printStack();
    }
  }
  break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpcao invalida!");
  }
} while (opcao !== 0);