/*
=====================================================
 Arquivo: 02_media_valores.js
 Objetivo: Calcular a média de três notas.
 Recursos permitidos:
   - prompt() (ou valores fixos)
   - Operadores aritméticos
   - parseFloat
=====================================================
*/
const prompt = require("prompt-sync")(); // importa o prompt-sync

let valor1, valor2, valor3;

// Leitura dos valores com prompt()
valor1 = parseFloat(prompt("Digite a primeira nota:"));
valor2 = parseFloat(prompt("Digite a segunda nota:"));
valor3 = parseFloat(prompt("Digite a terceira nota:"));

// Cálculo da média
let media = (valor1 + valor2 + valor3) / 3;

// Exibição do resultado
console.log("A média é: " + media);