# 📘 Conceitos Fundamentais — JavaScript (Dia 1)

Este arquivo cobre os principais conceitos usados na lista de exercícios de JavaScript.

---

## 🔹 Declaração de Variáveis
Em JavaScript existem três formas de declarar variáveis:
- `var`: escopo de função (antigo, menos recomendado).
- `let`: escopo de bloco (recomendado para variáveis mutáveis).
- `const`: escopo de bloco, imutável (não pode ser reatribuído).

Exemplo:
```js
var a = 10;
let b = 20;
const c = 30;
```

---

## 🔹 Tipagem Dinâmica
JavaScript é **fracamente tipado**:
- Não é necessário declarar o tipo da variável.
- Uma mesma variável pode mudar de tipo durante a execução.

Exemplo:
```js
let x = 10;     // number
x = "texto";    // agora é string
```

---

## 🔹 Tipos Básicos
- **Number**: inteiro ou decimal, segue padrão IEEE 754.  
- **BigInt**: números inteiros muito grandes (`123n`).  
- **String**: textos, podem ser delimitados por aspas simples, duplas ou crase.  
- **Boolean**: `true` ou `false`.  

---

## 🔹 Métodos Úteis de String
- `.toUpperCase()` → transforma em maiúsculas.
- `.toLowerCase()` → transforma em minúsculas.
- `.length` → retorna o tamanho da string.
- `.split(",")` → quebra string em array.
- `.join("")` → junta array em string.

Exemplo:
```js
let palavra = "JavaScript";
console.log(palavra.toUpperCase()); // JAVASCRIPT
console.log(palavra.length);        // 10
```

---

## 🔹 Template Strings
Com crases (`` ` ``), podemos interpolar variáveis:
```js
let nome = "Maria";
console.log(`Olá, ${nome}!`);
```

---

## 🔹 Operadores Aritméticos
- Soma: `+`
- Subtração: `-`
- Multiplicação: `*`
- Divisão: `/`
- Resto: `%`
- Potência: `**`



## 🔹 Entrada de Dados

### 📍 Navegador
O método **`prompt()`** está disponível apenas em navegadores.  
Ele abre uma caixa de diálogo para o usuário digitar algo.

Exemplo:
```js
let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome);
```

### 📍 Node.js
No Node.js o `prompt()` **não existe**.  
As alternativas mais comuns são:

- **prompt-sync** (biblioteca externa, simples de usar).
- **readline** (módulo nativo do Node.js, já vem sem precisar instalar).

---

### 🔹 Comparativo

| Método        | Ambiente     | Instalação necessária | Simplicidade |
|---------------|-------------|-----------------------|--------------|
| `prompt()`    | Navegador   | ❌                   | ✅ Muito simples |
| `prompt-sync` | Node.js     | ✅ (`npm install`)   | ✅ Simples |
| `readline`    | Node.js     | ❌ (já vem incluso)   | ⚠️ Mais verboso |

---

### 🔹 Exemplo com prompt-sync
```js
const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;

console.log("Média: " + media);
```

---

### 🔹 Exemplo com readline
```js
const readline = require("readline");

// Criando interface para leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lendo valores de forma assíncrona
rl.question("Digite a primeira nota: ", (n1) => {
  rl.question("Digite a segunda nota: ", (n2) => {
    let media = (parseFloat(n1) + parseFloat(n2)) / 2;
    console.log("Média: " + media);
    rl.close();
  });
});
```

⚠️ Note que com `readline` precisamos lidar com **callbacks**, o que deixa o código mais longo.  

---

## 🔹 Conversão Numérica
Quando usamos `prompt()` ou `readline`, os valores digitados chegam como **string**.  
Para trabalhar corretamente em operações matemáticas, precisamos converter:

- `parseInt("10")` → converte para inteiro (`10`)
- `parseFloat("10.5")` → converte para decimal (`10.5`)
- `Number("20")` → conversão genérica

Exemplo:
```js
let valor = "10.5";
valor = parseFloat(valor);
console.log(valor + 5); // 15.5
```

---
