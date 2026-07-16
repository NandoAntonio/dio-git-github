num1 = float(input('Digite o primeiro número: '))
num2 = float(input('Digite o segundo número: '))
operacao = input('Digite a operação (+, -, *, /): ')

if operacao == '+':
    resultado = num1 + num2
elif operacao == '-':
    resultado = num1 - num2 
elif operacao == '*':
    resultado = num1 * num2
elif operacao == '/':
    resultado = num1 / num2
else:
    print('Operação inválida')
    
print('O resultado da operação é: ' + str(abs(resultado)))