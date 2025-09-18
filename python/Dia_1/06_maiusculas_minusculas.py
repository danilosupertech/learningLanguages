
class conversorStr:
    
    
    def __init__(self, palavra: str):
        self._palavra = palavra
        self._convertida = ""
    
    def ft_toUpper(self):
        lista = list(self._palavra)

        for letra in lista:
            if 97 <= ord(letra) <= 122:
                self._convertida += chr(ord(letra) - 32)
            else:
                self._convertida += letra
        return self._convertida

   

print(conversorStr("danilo").ft_toUpper())
print(conversorStr("teste realizado para transformar minusculas em maiusculas !!").ft_toUpper())

palavra = "estou querendo passar para maiuscula"

# mesma coisa porém usando os recursos do python 
print(palavra.upper())