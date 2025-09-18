
/*
=====================================================
 Arquivo: 03_conversao_temperatura.js
 Objetivo: Converter Fahrenheit para Celsius.
 Recursos permitidos:
   - Operadores aritméticos
   - parseFloat
 Fórmula: C = (F - 32) * 5/9
=====================================================
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync

Farenheit = parseFloat(prompt("Digite a temperatura em Farenheit:"));


Celsius = (Farenheit - 32) * 5/9;

console.log('A temperatura ' + Farenheit +'ºF convertida é de '+ Celsius + 'ºC');