/*
=====================================================
 Arquivo: 05_nome_completo.js
 Objetivo: Ler nome e sobrenome e exibir o nome completo.
 Recursos permitidos:
   - Concatenação (+)
   - Template strings
=====================================================
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync

// Entrada de dados
let nome = (prompt("Digite o nome: "));
let sobrenome = (prompt("Digite o sobrenome: "));

console.log('Seja bem-vindo ' + nome +' '+ sobrenome +' !!!');