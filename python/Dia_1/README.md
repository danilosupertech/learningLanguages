# 📊 Tabela Comparativa — Dia 1 (Números e Strings Básicas)

| Conceito              | Python                                    | C                                                | JavaScript                                       | TypeScript                                  |
|-----------------------|-------------------------------------------|--------------------------------------------------|--------------------------------------------------|---------------------------------------------|
| **Número inteiro**    | `x = 10` (tipo `int`)                    | `int x = 10;`                                   | `let x = 10;` (`Number`)                        | `let x: number = 10;`                       |
| **Número decimal**    | `y = 3.14` (tipo `float`)                | `float y = 3.14;` ou `double y = 3.14;`         | `let y = 3.14;` (`Number`)                      | `let y: number = 3.14;`                     |
| **Divisão inteira**   | `7 // 2 → 3`                             | `7 / 2` com `int` → `3`                         | `Math.floor(7/2)` → `3`                         | `Math.floor(7/2)` → `3`                     |
| **Divisão real**      | `7 / 2 → 3.5`                            | `7.0 / 2.0 → 3.5`                               | `7 / 2 → 3.5`                                   | `7 / 2 → 3.5`                               |
| **Precisão/overflow** | `float` perde precisão; `decimal` corrige | Overflow em `int` (`limits.h`)                  | `Number.MAX_SAFE_INTEGER` limita precisão       | `bigint` para inteiros grandes              |
| **String simples**    | `"Olá"`                                  | `"Olá"` como `char*`                            | `"Olá"` ou `'Olá'`                              | `let s: string = "Olá";`                    |
| **Concatenação**      | `"Olá " + "Mundo"`                       | `strcat(s1, s2)` (`<string.h>`)                 | `"Olá " + "Mundo"` ou `` `Olá ${mundo}` ``      | Igual ao JS, mas com tipagem (`string`)     |
| **Tamanho da string** | `len("Python") → 6`                      | `strlen("Python") → 6`                          | `"Python".length → 6`                           | Igual ao JS                                |
| **Maiúsculas**        | `"abc".upper()`                          | `strupr(s)` (*não padrão, depende do compilador*) | `"abc".toUpperCase()`                          | Igual ao JS                                |
| **Inverter string**   | `"Python"[::-1] → "nohtyP"`              | Loop manual decrescente                         | `"Python".split('').reverse().join('')`        | Igual ao JS                                |
| **Interpolação**      | `f"Olá {nome}"`                          | `printf("Olá %s", nome);`                       | `` `Olá ${nome}` ``                             | Igual ao JS, com tipagem (`string`)         |
