# 📘 Conceitos Fundamentais — TypeScript (Dia 1)

Este arquivo cobre os principais conceitos usados na lista de exercícios de TypeScript.

---

## 🔹 Declaração de Variáveis
Em TypeScript, podemos usar:
- `let`: variável mutável, com tipo explícito ou inferido.
- `const`: variável imutável.
- `var`: existe, mas é desencorajado.

Exemplo:
```ts
let idade: number = 25;
const nome: string = "João";
```

---

## 🔹 Tipos Primitivos
TypeScript adiciona **tipagem estática** sobre o JavaScript.
- `number`: inteiros e decimais.
- `bigint`: inteiros muito grandes (`123n`).
- `string`: textos.
- `boolean`: valores lógicos.
- `any`: pode receber qualquer valor (evitar se possível).

Exemplo:
```ts
let ativo: boolean = true;
let salario: number = 4500.50;
let sobrenome: string = "Silva";
```

---

## 🔹 Inferência vs Anotação de Tipos
- Inferência → o compilador deduz o tipo automaticamente.
- Anotação → o programador define explicitamente.

Exemplo:
```ts
let x = 10;        // inferido como number
let y: string = "Olá";  // anotação explícita
```

---

## 🔹 Métodos de String
Mesmos do JavaScript, mas com checagem de tipos:
```ts
let palavra: string = "TypeScript";
console.log(palavra.toUpperCase());
console.log(palavra.length);
```

---

## 🔹 Template Strings
Idêntico ao JavaScript:
```ts
let nome: string = "Maria";
console.log(`Bem-vinda, ${nome}`);
```

---

## 🔹 Operadores Aritméticos
Idênticos ao JavaScript:
- `+`, `-`, `*`, `/`, `%`, `**`
