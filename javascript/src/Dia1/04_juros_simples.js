/*
=====================================================
 Arquivo: 04_juros_simples.js
 Objetivo: Calcular o montante com juros simples.
 Recursos permitidos:
   - Variáveis
   - Operadores aritméticos
   - console.log
 Fórmula: M = C + (C * i * t)
   Onde:
     M = Montante
     C = Capital inicial
     i = Taxa de juros (ao período)
     t = Tempo (quantidade de períodos)
=====================================================
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync

// Entrada de dados
let capital = parseFloat(prompt("Digite o capital inicial: "));
let taxa = parseFloat(prompt("Digite a taxa de juros (%): ")) / 100; // converte para decimal
let tempo = parseFloat(prompt("Digite o tempo (em períodos): "));

// Cálculo do montante
let montante = capital + (capital * taxa * tempo);

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log("Capital inicial: " + capital.toFixed(2));
console.log("Taxa de juros: " + (taxa * 100).toFixed(2) + "%");
console.log("Tempo: " + tempo + " períodos");
console.log("Montante com juros simples: " + montante.toFixed(2));
