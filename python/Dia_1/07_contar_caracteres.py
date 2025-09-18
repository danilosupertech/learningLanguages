class Calculadora:
   
    def ft_strlen(self, palavra : str) -> int:
        contador = 0
      
        for _ in palavra:
            contador += 1
        return contador

#segundo estilo
class MinhaStr(str):
    def ft_strlen(self) -> int:
        contador = 0
        for _ in self:
            contador += 1
        return contador


# Teste
palavra = MinhaStr("texto")
print(palavra.ft_strlen())  # 5

calc = Calculadora()
print(calc.ft_strlen("danilo"))  # 6

#usando recursos do python
palavra = "daniloc"
print(len(palavra))
