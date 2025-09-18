
class Media:
    
    def __init__(self):
        self._media = 0
        self._notas = []


    def notas(self):
        try:
            entradas = input('Informe as notas separadas por vírgula: ').split(",")
            self._notas = [float(n) for n in entradas]
            self._media = sum(self._notas) / len(self._notas)

        except ValueError:
            print("Erro: todas as notas devem ser números.")
        except ZeroDivisionError:
            print("Erro: nenhuma nota foi informada.")
        finally:
            print("Processamento finalizado.")
        
            
        
m = Media()
m.notas()
print(m._notas)
print(m._media)
