/*
=====================================================
 Arquivo: 06_maiusculas_minusculas.ts
 Objetivo: Transformar uma string em maiúsculas e minúsculas.
 Recursos permitidos:
   - .toUpperCase()
   - .toLowerCase()
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/06_maiusculas_minusculas.js
=====================================================
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

// Entrada de dados
const texto: string = prompt("Digite uma palavra ou frase: ");

// Transformações
const maiusculas: string = texto.toUpperCase();
const minusculas: string = texto.toLowerCase();

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log(`Original:    ${texto}`);
console.log(`Maiúsculas: ${maiusculas}`);
console.log(`Minúsculas: ${minusculas}`);
