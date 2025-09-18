/*
=====================================================
 Arquivo: 07_contar_caracteres.js
 Objetivo: Contar quantos caracteres existem em uma palavra.
 Recursos permitidos:
   - .length
=====================================================
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync

// Entrada de dados
let palavra = prompt("Digite uma palavra: ");

// Contagem de caracteres
let quantidade = palavra.length;

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log("Palavra: " + palavra);
console.log("Quantidade de caracteres: " + quantidade);
