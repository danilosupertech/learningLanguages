# 📘 Dia 1 — Números e Strings Básicas

## 📊 Tabela Comparativa — Declaração de Variáveis e Tipos Básicos

| Linguagem   | Formas de declarar variáveis                                                                 | Observações sobre tipos básicos |
|-------------|-----------------------------------------------------------------------------------------------|---------------------------------|
| **Python**  | `x = 10` (dinâmico, inferido)<br>`x: int = 10` (type hint, opcional)                         | Tipagem dinâmica, mas pode usar anotações para clareza. `int`, `float`, `str`, `bool`. Strings são imutáveis. |
| **C**       | `int x = 10;`<br>`float y = 3.14;`<br>`char s[] = "Olá";`<br>Modificadores: `auto`, `register`, `static`, `extern` | Tipagem estática. Inteiros limitados (`int`, `long`, `short`), sujeitos a overflow. `float` e `double` para precisão. Strings manipuladas como `char*`. |
| **JavaScript** | `var x = 10;` (escopo função/global)<br>`let x = 10;` (escopo bloco)<br>`const x = 10;` (imutável) | Tipagem dinâmica. `Number` único para inteiros e floats (IEEE 754). `BigInt` para inteiros grandes. Strings são imutáveis. |
| **TypeScript** | `let x: number = 10;`<br>`const y: string = "Olá";`<br>`var z: boolean = true;`           | Tipagem estática opcional e segura. Tipos primitivos: `number`, `bigint`, `string`, `boolean`. Força contratos de tipo. |

---

## 📘 Explicações das Diferenças Relevantes

### 🔹 Inteiros e Floats
- **Python**: `int` é ilimitado em precisão (cresce conforme memória disponível). `float` segue IEEE 754.  
- **C**: `int`, `short`, `long` variam em tamanho. Overflow é comum. `float` (32 bits) vs `double` (64 bits).  
- **JavaScript**: não separa inteiros de floats, tudo é `Number` (precisão até `2^53 - 1`).  
- **TypeScript**: diferencia explicitamente `number` e `bigint`, trazendo mais clareza.  

### 🔹 Strings
- **Python/JS/TS**: strings são imutáveis — qualquer modificação gera uma nova string.  
- **C**: strings são arrays de `char`, manipuláveis, mas exigem cuidado com limites de memória e ponteiros.  

### 🔹 Declaração Implícita vs Explícita
- **Python**: não exige declaração de tipo, mas pode usar *type hints*.  
- **C**: exige declaração explícita de tipo para cada variável.  
- **JavaScript**: dinâmica, tipo inferido.  
- **TypeScript**: exige ou infere tipos, mas permite reforçar com anotação.  

### 🔹 Mutabilidade
- **JavaScript/TypeScript**: `const` evita reatribuição, mas não impede mutações internas em objetos/arrays.  
- **C**: tem `const`, mas usado de forma diferente (ex.: `const int x = 10;`).  
- **Python**: não possui palavra-chave `const` para variáveis comuns, mas convenção usa maiúsculas para constantes (`PI = 3.14`).  
