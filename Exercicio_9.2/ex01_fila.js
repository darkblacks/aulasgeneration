const leia = require("readline-sync");

/*
  Classe Queue = Fila
  Na fila, o primeiro que entra é o primeiro que sai.
*/
class Queue {
  constructor() {
    /* Guarda os elementos da fila em um array */
    this.items = [];
  }

  /*
    enqueue(item)
    Adiciona um novo elemento no FINAL da fila
  */
  enqueue(item) {
    this.items.push(item);
  }

  /*
    dequeue()
    Remove o PRIMEIRO elemento da fila
    Se estiver vazia, retorna null
  */
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  /*
    isEmpty()
    Verifica se a fila está vazia
    Retorna true se estiver vazia
    Retorna false se tiver elementos
  */
  isEmpty() {
    return this.items.length === 0;
  }

  /*
    printQueue()
    Mostra todos os elementos da fila
  */
  printQueue() {
    for (const item of this.items) {
      console.log(item);
    }
  }
}

/* Cria a fila */
const fila = new Queue();

/* Variável para guardar a opção do menu */
let opcao;

/*
  do...while
  Repete o menu até o usuário escolher 0
*/
do {
  console.log("\n************************************");
  console.log("1 - Adicionar Cliente na Fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Chamar Cliente");
  console.log("0 - Sair");
  console.log("************************************");

  /* Lê a opção digitada */
  opcao = leia.questionInt("Digite uma opcao: ");

  switch (opcao) {
    case 1:
      /* Pede o nome do cliente */
      const nome = leia.question("Digite o nome: ");

      /* Adiciona o cliente na fila */
      fila.enqueue(nome);

      console.log("\nFila:");
      fila.printQueue();
      console.log("\nCliente Adicionado!");
      break;

    case 2:
      console.log("\nLista de Clientes na Fila:");

      /* Verifica se a fila está vazia */
      if (fila.isEmpty()) {
        console.log("A Fila esta vazia!");
      } else {
        fila.printQueue();
      }
      break;

    case 3:
      /* Verifica se a fila está vazia antes de chamar */
      if (fila.isEmpty()) {
        console.log("\nA Fila esta vazia!");
      } else {
        /* Remove o primeiro cliente */
        const clienteChamado = fila.dequeue();

console.log(`\nO Cliente ${clienteChamado} foi Chamado!`);

console.log("\nFila:");
fila.printQueue();
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpcao invalida!");
  }
} while (opcao !== 0);