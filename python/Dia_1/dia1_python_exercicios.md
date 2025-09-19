# 🐍 Lista de Exercícios — Dia 2 (Python)

## 01_listas_basico.py

- **Objetivo:** criar uma lista com 5 números e exibir o primeiro e o último elemento.

- **Recursos permitidos:** listas (`list`), indexação (`[ ]`).

- **Dicas:**
  - Lembre-se que índices começam em `0`.
  - O último elemento pode ser acessado por índice negativo: `lista[-1]`.

---

## 02_lista_append.py

- **Objetivo:** adicionar um número ao final da lista.

- **Recursos permitidos:** método `.append()`.

- **Dicas:**
  - `.append()` insere o item no **fim** da lista.
  - Você pode verificar o resultado imprimindo a lista inteira.

---

## 03_lista_pop.py

- **Objetivo:** remover o último número da lista e exibir o resultado.

- **Recursos permitidos:** método `.pop()`.

- **Dicas:**
  - `.pop()` retorna o elemento removido → você pode armazená-lo em uma variável.
  - Após o `pop`, a lista fica com um elemento a menos.

---

## 04_lista_sort.py

- **Objetivo:** ordenar a lista em ordem crescente.

- **Recursos permitidos:** método `.sort()`.

- **Dicas:**
  - `.sort()` altera a lista original.
  - Para uma nova lista ordenada sem alterar a original, use `sorted(lista)`.

---

## 05_pilha.py

- **Objetivo:** implementar uma pilha usando lista.

- **Recursos permitidos:** `.append()` (push) e `.pop()` (pop).

- **Dicas:**
  - Pilha segue a lógica **LIFO** (*Last In, First Out*).
  - Exemplo: empilhar valores `1, 2, 3` → `pop()` retorna `3`.

---

## 06_fila.py

- **Objetivo:** implementar uma fila.

- **Recursos permitidos:** `collections.deque`.

- **Dicas:**
  - Fila segue a lógica **FIFO** (*First In, First Out*).
  - Use `.append()` para enfileirar e `.popleft()` para desenfileirar.
  - `deque` é mais eficiente que listas para operações em filas.

---

## 07_dicionario.py

- **Objetivo:** criar um dicionário para mapear nomes de alunos às suas notas.

- **Recursos permitidos:** `dict`, acesso por chave.

- **Dicas:**
  - Um `dict` é composto de pares `chave: valor`.
  - Exemplo: `{"Maria": 8.5, "João": 7.0}`.
  - Acesse uma nota com `dicionario["Maria"]`.

---

## 📌 Particularidades do Python

- `list` é dinâmica e pode armazenar diferentes tipos.  
- `dict` é altamente otimizado para acesso rápido.  
- `collections.deque` deve ser usado para filas por eficiência.  
- Índices negativos em listas são muito úteis (`lista[-1]` = último item).  
