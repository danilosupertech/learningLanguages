/*
=====================================================
 Arquivo: 04_juros_simples.ts
 Objetivo: Calcular o montante com juros simples.
 Recursos permitidos:
   - Variáveis tipadas
   - Operadores aritméticos
   - console.log
 Fórmula:
   M = C + (C * i * t)
   Onde:
     M = Montante
     C = Capital inicial
     i = Taxa de juros (ao período)
     t = Tempo (quantidade de períodos)
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/04_juros_simples.js
=====================================================
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

// Entrada de dados
const capital: number = parseFloat(prompt("Digite o capital inicial: "));
const taxa: number = parseFloat(prompt("Digite a taxa de juros (%): ")) / 100; // convertida para decimal
const tempo: number = parseFloat(prompt("Digite o tempo (em períodos): "));

// Cálculo do montante
const montante: number = capital + (capital * taxa * tempo);

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log(`Capital inicial: R$ ${capital.toFixed(2)}`);
console.log(`Taxa de juros: ${(taxa * 100).toFixed(2)}%`);
console.log(`Tempo: ${tempo} períodos`);
console.log(`Montante com juros simples: R$ ${montante.toFixed(2)}`);
