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
