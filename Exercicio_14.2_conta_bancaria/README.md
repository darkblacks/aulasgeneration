# Projeto Conta Bancária

Projeto completo em **TypeScript** criado do zero para a atividade de **ContaController + CRUD**.

## O que foi implementado

- `ContaController`
- Métodos do CRUD:
  - `procurarPorNumero(numero: number)`
  - `listarTodas()`
  - `cadastrar(conta: Conta)`
  - `atualizar(conta: Conta)`
  - `deletar(numero: number)`
- Métodos auxiliares:
  - `gerarNumero()`
  - `buscarNoArray(numero: number)`
- Operações extras para o menu:
  - `sacar(numero, valor)`
  - `depositar(numero, valor)`
  - `transferir(numeroOrigem, numeroDestino, valor)`
- `Menu.ts` com entrada de dados completa
- Classes:
  - `Conta`
  - `ContaCorrente`
  - `ContaPoupanca`

## Estrutura

```txt
src
 ┣ controller
 ┃ ┗ ContaController.ts
 ┣ model
 ┃ ┣ Conta.ts
 ┃ ┣ ContaCorrente.ts
 ┃ ┗ ContaPoupanca.ts
 ┣ repository
 ┃ ┗ ContaRepository.ts
 ┣ global.d.ts
 ┗ Menu.ts
```

## Como compilar

```bash
tsc
```

## Como rodar

```bash
node dist/Menu.js
```

## Observação

O projeto foi feito sem dependências externas, usando apenas recursos nativos do Node.js, para facilitar sua execução.
