/*
=====================================================
 Arquivo: 06_maiusculas_minusculas.js
 Objetivo: Transformar uma string em maiúsculas e minúsculas.
 Recursos permitidos:
   - .toUpperCase()
   - .toLowerCase()
=====================================================
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync

// Entrada de dados
let texto = prompt("Digite uma palavra ou frase: ");

// Transformações
let maiusculas = texto.toUpperCase();
let minusculas = texto.toLowerCase();

// Exibição dos resultados
console.log("\n--- Resultado ---");
console.log("Original:    " + texto);
console.log("Maiúsculas: " + maiusculas);
console.log("Minúsculas: " + minusculas);
