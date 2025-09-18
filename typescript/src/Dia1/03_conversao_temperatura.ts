/*
=====================================================
 Arquivo: 03_conversao_temperatura.ts
 Objetivo: Converter Fahrenheit para Celsius.
 Recursos permitidos:
   - Operadores aritméticos
 Fórmula:
   C = (F - 32) * 5/9
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/03_conversao_temperatura.js
=====================================================
*/

import promptSync from "prompt-sync"; // importa prompt-sync

const prompt = promptSync();

// Entrada de dados
const fahrenheit: number = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));

// Conversão
const celsius: number = (fahrenheit - 32) * 5 / 9;

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log(`${fahrenheit.toFixed(2)}°F equivalem a ${celsius.toFixed(2)}°C`);
