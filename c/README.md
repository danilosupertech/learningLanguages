# Ambiente C

## Compilar e rodar
```powershell
.\build.bat
```

## Compilar manualmente (se tiver gcc)
```powershell
gcc src/main.c -Wall -Wextra -o app.exe
.\app.exe
```

## Depurar (se tiver gdb)
```powershell
gdb app.exe
```
