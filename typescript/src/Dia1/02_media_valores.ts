/*
=====================================================
 Arquivo: 02_media_valores.ts
 Objetivo: Calcular a média de três notas.
 Recursos permitidos:
   - prompt() (ou valores fixos)
   - Operadores aritméticos
   - parseFloat
 Extras:
   - Tipar entradas como number

npm install prompt-sync
npm install -D @types/prompt-sync
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/02_media_valores.js
=====================================================
*/

import promptSync from "prompt-sync"; // importa prompt-sync

const prompt = promptSync();

// Entrada de dados (tipadas como number)
const valor1: number = parseFloat(prompt("Digite a primeira nota: "));
const valor2: number = parseFloat(prompt("Digite a segunda nota: "));
const valor3: number = parseFloat(prompt("Digite a terceira nota: "));

// Cálculo da média
const media: number = (valor1 + valor2 + valor3) / 3;

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log(`Notas: ${valor1}, ${valor2}, ${valor3}`);
console.log(`Média: ${media.toFixed(2)}`);
