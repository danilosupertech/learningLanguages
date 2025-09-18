class Converssor:
    
    def __init__(self):
        pass
    
    def ConvertToCelsius(self, valor):
    
        try:
            Celcius = (valor - 32) * 5/9
            return Celcius
        except Exception as e:
            print(f"Tipo do erro: {type(e).__name__}")
            print(f"Descrição do erro: {str(e)}")

    def ConvertTFahrenheit(self, valor):

        try:

            Fahrenheit = ((valor * 9) / 5) + 32
            
            return Fahrenheit
        except Exception as e:
            print(f"Tipo do erro: {type(e).__name__}")
            print(f"Descrição do erro: {str(e)}")
            
calcConv = Converssor()
print(calcConv.ConvertToCelsius(122))
print(calcConv.ConvertTFahrenheit(10))

 
 