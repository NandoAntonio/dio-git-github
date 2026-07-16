def isPalindromo(palavra):
    palavra = palavra.lower().replace(" ", "")
    return palavra

palavraEscolhida = input("Digite uma palavra: ")

palavra_limpa = isPalindromo(palavraEscolhida)

if palavra_limpa == palavra_limpa[::-1]:
    print(f'A palavra "{palavraEscolhida}" é um palíndromo.')
else:
    print(f'A palavra "{palavraEscolhida}" não é um palíndromo.')