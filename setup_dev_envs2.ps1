# setup_dev_envs_relative.ps1
param(
  [switch]$UseScriptLocation
)

if ($UseScriptLocation) {
  $BaseParent = $PSScriptRoot
} else {
  $BaseParent = (Get-Location).Path
}

$BaseDir = Join-Path $BaseParent "/"

Write-Host ">> Executando em: " (Get-Location).Path
Write-Host ">> Base escolhida para criação: $BaseDir"

if (-not (Test-Path $BaseDir)) {
    New-Item -ItemType Directory -Path $BaseDir | Out-Null
}

function Ensure-Dir($path) {
  if (-not (Test-Path $path)) { New-Item -ItemType Directory -Path $path | Out-Null }
}

# ---------------------------
# PYTHON
# ---------------------------
Write-Host ">> Criando estrutura Python..."
$pyRoot = Join-Path $BaseDir "python"
$pyDir = Join-Path $pyRoot "src"
Ensure-Dir $pyDir
@'
def soma(a: int, b: int) -> int:
    return a + b

if __name__ == "__main__":
    print("Hello, Python!", soma(2, 3))
'@ | Set-Content -LiteralPath (Join-Path $pyDir "main.py") -Encoding UTF8

@'
# Byte-compiled / cache
__pycache__/
*.py[cod]
*$py.class

# Virtual environment
.venv/
env/
venv/

# Logs / tests
*.log
.pytest_cache/
.coverage
'@ | Set-Content -LiteralPath (Join-Path $pyRoot ".gitignore") -Encoding UTF8

if (Get-Command py -ErrorAction SilentlyContinue) {
    py -3 -m venv "$pyRoot\.venv"
    & "$pyRoot\.venv\Scripts\pip.exe" install --upgrade pip black flake8 pytest | Out-Null
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
    python -m venv "$pyRoot\.venv"
    & "$pyRoot\.venv\Scripts\pip.exe" install --upgrade pip black flake8 pytest | Out-Null
} else {
    Write-Warning "  - Python não encontrado no PATH."
}

# ---------------------------
# JAVASCRIPT
# ---------------------------
Write-Host ">> Criando estrutura JavaScript..."
$jsRoot = Join-Path $BaseDir "javascript"
$jsSrc = Join-Path $jsRoot "src"
Ensure-Dir $jsSrc
@'
function soma(a, b) {
  return a + b;
}
console.log("Hello, JS!", soma(2, 3));
'@ | Set-Content -LiteralPath (Join-Path $jsSrc "index.js") -Encoding UTF8

@'
# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build
dist/
'@ | Set-Content -LiteralPath (Join-Path $jsRoot ".gitignore") -Encoding UTF8

if (Get-Command npm -ErrorAction SilentlyContinue) {
    Push-Location $jsRoot
    npm init -y | Out-Null
    Pop-Location
} else {
    Write-Warning "  - npm/Node.js não encontrado no PATH."
}

# ---------------------------
# TYPESCRIPT
# ---------------------------
Write-Host ">> Criando estrutura TypeScript..."
$tsRoot = Join-Path $BaseDir "typescript"
$tsSrc = Join-Path $tsRoot "src"
Ensure-Dir $tsSrc
@'
export function soma(a: number, b: number): number {
  return a + b;
}
console.log("Hello, TS!", soma(2, 3));
'@ | Set-Content -LiteralPath (Join-Path $tsSrc "index.ts") -Encoding UTF8

@'
# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build
dist/
build/
'@ | Set-Content -LiteralPath (Join-Path $tsRoot ".gitignore") -Encoding UTF8

if (Get-Command npm -ErrorAction SilentlyContinue) {
    Push-Location $tsRoot
    npm init -y | Out-Null
    npm i -D typescript ts-node @types/node | Out-Null
    Pop-Location
} else {
    Write-Warning "  - npm/Node.js não encontrado no PATH."
}

# ---------------------------
# C
# ---------------------------
Write-Host ">> Criando estrutura C..."
$cRoot = Join-Path $BaseDir "c"
$cSrc = Join-Path $cRoot "src"
Ensure-Dir $cSrc
@'
#include <stdio.h>
int soma(int a, int b) { return a + b; }
int main(void) {
    printf("Hello, C! %d\n", soma(2, 3));
    return 0;
}
'@ | Set-Content -LiteralPath (Join-Path $cSrc "main.c") -Encoding ASCII

@'
# Build
*.o
*.exe
*.out
*.obj
*.dll
*.so
*.dylib

# Generated binary
app
'@ | Set-Content -LiteralPath (Join-Path $cRoot ".gitignore") -Encoding UTF8

@'
@echo off
where cl >nul 2>nul && (
  echo [build] Usando MSVC cl.exe
  cl /nologo /W3 /EHsc src\main.c /Fe:app.exe
  app.exe
  exit /b
)
where gcc >nul 2>nul && (
  echo [build] Usando gcc
  gcc src/main.c -Wall -Wextra -o app.exe
  app.exe
  exit /b
)
where clang >nul 2>nul && (
  echo [build] Usando clang
  clang src/main.c -Wall -Wextra -o app.exe
  app.exe
  exit /b
)
echo Nenhum compilador C encontrado. Instale Visual Studio Build Tools (cl.exe), MSYS2 (gcc) ou WSL.
'@ | Set-Content -LiteralPath (Join-Path $cRoot "build.bat") -Encoding ASCII

Write-Host ""
Write-Host ">> Finalizado. Pastas criadas em: $BaseDir"
