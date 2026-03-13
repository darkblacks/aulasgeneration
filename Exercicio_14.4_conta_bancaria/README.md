# Projeto Conta Bancária - JS14 Task 05

Este projeto foi montado com base na atividade que pede:
- implementação dos métodos `sacar`, `depositar` e `transferir` na `ContaController`
- atualização da classe `Menu` com as entradas de dados desses métodos
- execução e testes no terminal

## Como rodar

No terminal, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

## Como testar rapidamente sem entrar no menu

```bash
npm install
npm run teste
```

## Como compilar e executar o JavaScript final

```bash
npm install
npm run build
npm start
```

## Estrutura

```text
src/
  controller/
    ContaController.ts
  model/
    Conta.ts
    ContaCorrente.ts
    ContaPoupanca.ts
  repository/
    ContaRepository.ts
  Menu.ts
  TesteController.ts
```
