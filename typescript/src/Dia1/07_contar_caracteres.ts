/*
=====================================================
 Arquivo: 07_contar_caracteres.ts
 Objetivo: Contar quantos caracteres existem em uma palavra.
 Recursos permitidos:
   - .length
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/07_contar_caracteres.js
=====================================================
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

// Entrada de dados
const palavra: string = prompt("Digite uma palavra: ");

// Contagem de caracteres
const quantidade: number = palavra.length;

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log(`Palavra: ${palavra}`);
console.log(`Quantidade de caracteres: ${quantidade}`);
