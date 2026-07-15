let resultado = soma(10, 10)

console.log("O resultado dessa funcao e: " + resultado)
console.log("O resultado dessa funcao e: " + soma(10, 10))

function soma(numA, numB){
    // let vetor = [3, 45, 65] = Vetores podem ser retornados por serem considerados um unico valor
    // return vetor
    let somatorio = numA + numB
    return somatorio //Retorna o produto da funcao, para que possamos altera-la e manipula-la

    // return somente pode retornar um valor, ele nao poderia por exemplo retornar = numA, numB => Porque ele ira ignorar um dos valores
}

console.log("") // Pular linha

let userName = getFirstName("Fernando-Costa-Reis", "-") //Com o splitChar na chamada da funcao passar o valor que vai separar as strings
console.log(`Seja Bem-vindo ao meu estabelecimento: ${userName}`)

userName = getFirstName("Fernando da Costa Antonio", " ")
console.log(`Seja Bem-vindo ao meu estabelecimento: ${userName}`)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar) //Funcao ou Metodo padrao do JS que separa o texto de acordo com valor que voce passa para ele. O [] seleciona a parte do vetor que eu quero que seja pega
    return firstName
}