/*
=====================================================
 Arquivo: 08_inverter_string.ts
 Objetivo: Inverter uma string digitada pelo usuário.
 Recursos permitidos:
   - .split("")
   - .reverse()
   - .join("")
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/08_inverter_string.js
=====================================================
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

// Entrada de dados
const texto: string = prompt("Digite uma palavra ou frase: ");

// Inversão da string
const invertido: string = texto.split("").reverse().join("");

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log(`Original:  ${texto}`);
console.log(`Invertido: ${invertido}`);
