#!/usr/bin/env bash
set -e

BASE_DIR="$HOME/ambientes-dev"
mkdir -p "$BASE_DIR"
cd "$BASE_DIR"

echo ">> Criando ambiente de desenvolvimento em $BASE_DIR"

# ---------------------------
# Python
# ---------------------------
echo ">> Configurando Python..."
mkdir -p python/src
cat > python/src/main.py << 'EOF'
def soma(a: int, b: int) -> int:
    return a + b

if __name__ == "__main__":
    print("Hello, Python!", soma(2, 3))
EOF

cd python
if command -v python3 &> /dev/null; then
    python3 -m venv .venv
    source .venv/bin/activate
    pip install --upgrade pip black flake8 pytest
    deactivate
else
    echo "Python3 não encontrado. Instale antes de prosseguir."
fi
cd ..

# ---------------------------
# JavaScript
# ---------------------------
echo ">> Configurando JavaScript..."
mkdir -p javascript/src
cd javascript
if command -v npm &> /dev/null; then
    npm init -y > /dev/null
    cat > src/index.js << 'EOF'
function soma(a, b) {
  return a + b;
}
console.log("Hello, JS!", soma(2, 3));
EOF
else
    echo "npm não encontrado. Instale Node.js antes de prosseguir."
fi
cd ..

# ---------------------------
# TypeScript
# ---------------------------
echo ">> Configurando TypeScript..."
mkdir -p typescript/src
cd typescript
if command -v npm &> /dev/null; then
    npm init -y > /dev/null
    npm i -D typescript ts-node @types/node
    cat > src/index.ts << 'EOF'
export function soma(a: number, b: number): number {
  return a + b;
}
console.log("Hello, TS!", soma(2, 3));
EOF
else
    echo "npm não encontrado. Instale Node.js antes de prosseguir."
fi
cd ..

# ---------------------------
# C (42 style)
# ---------------------------
echo ">> Configurando C..."
mkdir -p c/src
cat > c/src/main.c << 'EOF'
#include <stdio.h>
int soma(int a, int b) { return a + b; }

int main(void) {
    printf("Hello, C! %d\n", soma(2, 3));
    return 0;
}
EOF

cat > c/Makefile << 'EOF'
CC      = cc
CFLAGS  = -Wall -Wextra -Werror -Iinclude
SRC     = src/main.c
OBJ     = $(SRC:.c=.o)
NAME    = app

all: $(NAME)

$(NAME): $(OBJ)
	$(CC) $(CFLAGS) $(OBJ) -o $(NAME)

clean:
	rm -f $(OBJ)

fclean: clean
	rm -f $(NAME)

re: fclean all
.PHONY: all clean fclean re
EOF

echo ">> Ambientes prontos em $BASE_DIR"
