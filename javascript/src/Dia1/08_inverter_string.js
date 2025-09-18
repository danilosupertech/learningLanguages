/*
=====================================================
 Arquivo: 08_inverter_string.js
 Objetivo: Inverter uma string digitada pelo usuário.
 Recursos permitidos:
   - .split("")
   - .reverse()
   - .join("")
=====================================================
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync

// Entrada de dados
let texto = prompt("Digite uma palavra ou frase: ");

// Inversão da string
let invertido = texto.split("").reverse().join("");

// Exibição do resultado
console.log("\n--- Resultado ---\n");
console.log("Original:  " + texto);
console.log("Invertido: " + invertido);
