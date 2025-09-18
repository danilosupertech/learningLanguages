class Palavra:
    def ft_inverter_str(self, palavra: str) -> str:
        tamanho = len(palavra) - 1
        novaPalavra = ""

        while tamanho >= 0:
            novaPalavra += palavra[tamanho]
            tamanho -=  1

        return novaPalavra


p1 = Palavra()
print(p1.ft_inverter_str("danilo"))


palavra = "danilo"

#usando biblioteca própria do python
print(palavra[::-1])