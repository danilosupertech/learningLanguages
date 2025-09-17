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
