import * as readline from "readline";

// =====================================
// INTERFACE
// Todo animal precisa ter nome e falar
// =====================================
interface IAnimal {
  nome: string;
  falar(): void;
}

// =====================================
// SUPERCLASSE BASE
// Evita repetir o nome em todas as classes
// =====================================
abstract class AnimalBase implements IAnimal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  abstract falar(): void;
  abstract agirAutomaticamente(): void;
}

// =====================================
// SUPERCLASSE AVE
// Toda ave sabe se voa ou não
// =====================================
abstract class Ave extends AnimalBase {
  podeVoar: boolean;

  constructor(nome: string, podeVoar: boolean) {
    super(nome);
    this.podeVoar = podeVoar;
  }

  voar(): void {
    console.log(`${this.nome} está voando!`);
  }

  agirAutomaticamente(): void {
    if (this.podeVoar) {
      this.voar();
      this.falar();
    } else {
      this.falar();
    }
  }
}

// =====================================
// SUPERCLASSE MAMÍFERO
// Todo mamífero sabe se morde ou não
// =====================================
abstract class Mamifero extends AnimalBase {
  podeMorder: boolean;

  constructor(nome: string, podeMorder: boolean) {
    super(nome);
    this.podeMorder = podeMorder;
  }

  morder(): void {
    console.log(`${this.nome} mordeu!`);
  }

  agirAutomaticamente(): void {
    if (this.podeMorder) {
      this.morder();
      this.falar();
    } else {
      this.falar();
    }
  }
}

// =====================================
// CLASSES CONCRETAS
// =====================================
class Galinha extends Ave {
  constructor(nome: string) {
    super(nome, false);
  }

  falar(): void {
    console.log(`(piu piu) - disse ${this.nome}`);
  }
}

class Gaivota extends Ave {
  constructor(nome: string) {
    super(nome, true);
  }

  falar(): void {
    console.log(`(yaaaaa) - disse ${this.nome}`);
  }
}

class Cachorro extends Mamifero {
  constructor(nome: string) {
    super(nome, true);
  }

  falar(): void {
    console.log(`(au au) - disse ${this.nome}`);
  }
}

class Ornitorrinco extends Mamifero {
  constructor(nome: string) {
    super(nome, false);
  }

  falar(): void {
    console.log(`(grrr) - disse ${this.nome}`);
  }
}

// =====================================
// REGISTRO DE ANIMAL CRIADO
// Guarda o animal + intervalo automático
// =====================================
type RegistroAnimal = {
  animal: AnimalBase;
  intervalo: NodeJS.Timeout;
};

// =====================================
// READLINE
// =====================================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// =====================================
// PERGUNTAR
// =====================================
function perguntar(texto: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => {
      resolve(resposta.trim());
    });
  });
}

// =====================================
// LISTA DE ANIMAIS DO JOGO
// =====================================
const animaisCriados: RegistroAnimal[] = [];

// =====================================
// CRIAR ANIMAL
// =====================================
function criarAnimal(opcao: string, nome: string): AnimalBase | null {
  switch (opcao) {
    case "1":
      return new Galinha(nome);
    case "2":
      return new Gaivota(nome);
    case "3":
      return new Cachorro(nome);
    case "4":
      return new Ornitorrinco(nome);
    default:
      return null;
  }
}

// =====================================
// MENU
// =====================================
function mostrarMenu(): void {
  console.log("\n==============================");
  console.log("1 - Começar jogo");
  console.log("2 - Criar animal");
  console.log("3 - Listar animais");
  console.log("0 - Finalizar jogo");
  console.log("==============================");
}

// =====================================
// MENU DE TIPOS
// =====================================
function mostrarTipos(): void {
  console.log("\nEscolha o tipo do animal:");
  console.log("1 - Galinha (piu piu / não voa)");
  console.log("2 - Gaivota (yaaaaa / voa)");
  console.log("3 - Cachorro (au au / morde)");
  console.log("4 - Ornitorrinco (grrr / não morde)");
}

// =====================================
// INICIA O COMPORTAMENTO AUTOMÁTICO
// A cada 10 segundos o animal age sozinho
// =====================================
function iniciarComportamentoAutomatico(animal: AnimalBase): NodeJS.Timeout {
  return setInterval(() => {
    animal.agirAutomaticamente();
  }, 10000);
}

// =====================================
// CRIAÇÃO DE ANIMAL
// =====================================
async function processoCriacao(): Promise<void> {
  console.log("\n=== CRIAÇÃO DE ANIMAL ===");
  mostrarTipos();

  const tipo = await perguntar("Digite a opção do animal: ");
  const nome = await perguntar("Digite o nome do animal: ");

  const animal = criarAnimal(tipo, nome);

  if (!animal) {
    console.log("Opção inválida.");
    return;
  }

  const intervalo = iniciarComportamentoAutomatico(animal);

  animaisCriados.push({
    animal,
    intervalo,
  });

  console.log(`\n${animal.constructor.name} chamado ${animal.nome} foi criado com sucesso.`);
  console.log(`${animal.nome} já entrou no jogo.`);

  // ação inicial imediata
  animal.agirAutomaticamente();
}

// =====================================
// LISTAR ANIMAIS
// =====================================
function listarAnimais(): void {
  console.log("\n=== ANIMAIS NO JOGO ===");

  if (animaisCriados.length === 0) {
    console.log("Nenhum animal foi criado ainda.");
    return;
  }

  animaisCriados.forEach((registro, index) => {
    console.log(`${index + 1}. ${registro.animal.constructor.name} - Nome: ${registro.animal.nome}`);
  });
}

// =====================================
// FINALIZAR JOGO
// =====================================
function finalizarJogo(): void {
  console.log("\nFinalizando jogo...");

  for (const registro of animaisCriados) {
    clearInterval(registro.intervalo);
  }

  console.log("Todos os animais pararam.");
  console.log("Jogo encerrado.");
  rl.close();
}

// =====================================
// LOOP PRINCIPAL
// =====================================
async function iniciarJogo(): Promise<void> {
  console.log("=== BEM-VINDO AO JOGO DOS ANIMAIS ===");

  let jogoIniciado = false;
  let executando = true;

  while (executando) {
    mostrarMenu();
    const opcao = await perguntar("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        if (!jogoIniciado) {
          jogoIniciado = true;
          console.log("\nJogo começou!");
        } else {
          console.log("\nO jogo já foi iniciado.");
        }
        break;

      case "2":
        if (!jogoIniciado) {
          console.log("\nVocê precisa começar o jogo primeiro.");
          break;
        }

        await processoCriacao();
        break;

      case "3":
        listarAnimais();
        break;

      case "0":
        executando = false;
        finalizarJogo();
        break;

      default:
        console.log("\nOpção inválida.");
        break;
    }
  }
}

// =====================================
// INÍCIO REAL DO PROGRAMA
// =====================================
iniciarJogo().catch((erro) => {
  console.error("Erro no jogo:", erro);
  finalizarJogo();
});