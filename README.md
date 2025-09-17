# Manual Prático de Criação de Ambientes de Desenvolvimento

Este guia mostra o **passo a passo mais simples possível** para criar ambientes de desenvolvimento para **Python, JavaScript, TypeScript e Linguagem C (42)**.

---

## Script de Automação

Você pode configurar tudo de uma vez usando o script [`setup_dev_envs.sh`](setup_dev_envs.sh).

### Uso:
```bash
chmod +x setup_dev_envs.sh
./setup_dev_envs.sh
```

Isso criará automaticamente a pasta `~/ambientes-dev/` com subpastas:
- `python/`
- `javascript/`
- `typescript/`
- `c/`

Cada uma já vem com um código de exemplo e configuração mínima.

---

## Python

### Instalação
- **Windows**: baixe Python 3 no site oficial e marque "Add Python to PATH".
- **macOS**: `brew install python`
- **Ubuntu/Debian**: 
  ```bash
  sudo apt update && sudo apt install -y python3 python3-venv python3-pip
  ```

### Criar ambiente e rodar
```bash
mkdir projeto-python && cd projeto-python
python -m venv .venv
# macOS/Linux:
source .venv/bin/activate
# Windows PowerShell:
.venv\Scripts\Activate.ps1

echo 'print("Hello, Python!")' > main.py
python main.py
```

---

## JavaScript (Node.js)

### Instalação
- Instale **Node.js LTS** do site oficial.
- **macOS**: `brew install node`
- **Ubuntu/Debian**: `sudo apt install -y nodejs npm`

### Criar projeto e rodar
```bash
mkdir projeto-js && cd projeto-js
npm init -y
mkdir src
echo 'console.log("Hello, JS!", 2+3);' > src/index.js
node src/index.js
```

---

## TypeScript

### Criar projeto e rodar
```bash
mkdir projeto-ts && cd projeto-ts
npm init -y
npm i -D typescript ts-node @types/node

mkdir src
echo 'const soma = (a:number,b:number)=>a+b; console.log("Hello, TS!", soma(2,3));' > src/index.ts

npx ts-node src/index.ts
```

> (Para configurar depois: `npx tsc --init` e rodar `npx tsc`).

---

## Linguagem C (42 style)

### Instalação do compilador
- **Windows (WSL)**:
  ```powershell
  wsl --install
  ```
  Depois no Ubuntu:
  ```bash
  sudo apt update && sudo apt install -y build-essential gdb
  ```
- **macOS**: `xcode-select --install`
- **Ubuntu/Debian**: `sudo apt update && sudo apt install -y build-essential gdb`

### Criar e rodar
```bash
mkdir projeto-c && cd projeto-c

cat > hello.c << 'EOF'
#include <stdio.h>
int main(void){
    printf("Hello, C! %d\n", 2+3);
    return 0;
}
EOF

gcc hello.c -o app && ./app
```

Para depurar: 
```bash
gdb ./app
# dentro do gdb: run, break main, next, print variavel
```

---

## Dicas Finais

- Use **VS Code** com extensões:
  - Python, C/C++, ESLint, Prettier, GitLens.
- Crie **uma pasta por linguagem** para não misturar dependências.
- No Windows, o **WSL** é o caminho mais simples para C estilo 42.

---

🚀 Pronto! Você já tem 4 ambientes configurados.
