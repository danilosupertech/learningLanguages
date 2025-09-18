# ⚙️ Configuração de Projeto TypeScript com Saída Separada

Este guia mostra como configurar o TypeScript para que os arquivos `.js` compilados sejam gerados em uma pasta separada (`dist`), mantendo os `.ts` organizados em `src`.

---

## 🔹 1. Instalar o TypeScript

No terminal, dentro do seu projeto:

```bash
npm install -g typescript
```

Verifique se instalou corretamente:

```bash
tsc -v
```

---

## 🔹 2. Inicializar o TypeScript

Crie o arquivo de configuração `tsconfig.json` com:

```bash
npx tsc --init
```

---

## 🔹 3. Editar o tsconfig.json

Abra o arquivo `tsconfig.json` e ajuste as opções:

```json
{
  "compilerOptions": {
    "target": "es6",              // versão do JS gerado
    "module": "commonjs",         // padrão Node.js
    "outDir": "./dist",           // saída dos arquivos compilados
    "rootDir": "./src",           // onde ficam seus arquivos .ts
    "strict": true,               // boas práticas de tipagem
    "esModuleInterop": true       // compatibilidade com imports
  }
}
```

---

## 🔹 4. Estrutura de Pastas Recomendada

```
meu-projeto/
 ├── src/          # arquivos .ts (código-fonte)
 │    └── Dia1/
 │         └── 01_operacoes_basicas.ts
 ├── dist/         # arquivos .js compilados automaticamente
 └── tsconfig.json
```

---

## 🔹 5. Compilar o Projeto

No terminal, execute:

```bash
tsc
```

Isso vai compilar **todos os arquivos `.ts` dentro de `src/`** e gerar os `.js` correspondentes dentro de `dist/`.

---

## 🔹 6. Executar o Arquivo Compilado

Use o Node.js para rodar os arquivos JavaScript gerados:

```bash
node dist/Dia1/01_operacoes_basicas.js
```

---

## 🔹 7. Compilação Automática (Modo Watch)

Para compilar automaticamente sempre que salvar:

```bash
tsc --watch
```

Assim, qualquer alteração nos arquivos `.ts` em `src/` vai gerar imediatamente os `.js` em `dist/`.

---

✅ Agora você tem um ambiente TypeScript organizado, com código-fonte separado (`src`) e saída compilada (`dist`).
