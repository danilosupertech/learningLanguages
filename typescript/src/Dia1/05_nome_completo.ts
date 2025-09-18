/*
=====================================================
 Arquivo: 05_nome_completo.ts
 Objetivo: Ler nome e sobrenome e exibir o nome completo.
 Recursos permitidos:
   - Concatenação (+)
   - Template strings
 Extras:
   - Declarar variáveis como string
=====================================================
 To execute:
   1. Run: tsc --project tsconfig.json
   2. Run: node dist/Dia1/05_nome_completo.js
=====================================================
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

// Entrada de dados
const nome: string = prompt("Digite o nome: ");
const sobrenome: string = prompt("Digite o sobrenome: ");

// Concatenação simples
const nomeCompletoConcat: string = nome + " " + sobrenome;

// Template string
const nomeCompletoTemplate: string = `${nome} ${sobrenome}`;

// Exibição do resultado
console.log("\n--- Resultado ---");
console.log("Concatenação (+): " + nomeCompletoConcat);
console.log(`Template string: ${nomeCompletoTemplate}`);
