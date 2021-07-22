// EXERCICIO DE INTERPRETAÇÃO // 

/* exercicio 1: 
1- retorna false 
2- retorna false
3- retorna true
4- retorna booleano 
*/ 

/* exercicio 2/3: */ 

/* o erro foi que ele não transformou a string para Number para que seja feita o calculo
certo, ou seja, apareceu no console a os dois numeros impressos, sem somar.*/ 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

// EXERCICIO ESCRITA DE CODIGO //

// exercicio 1-

let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade de seu melhor amige?"))

console.log("Sua idade é maior do que seu melhor amige?", idade > idadeAmigo)

console.log(idade - idadeAmigo)

// exercicio 2-

let numeroPar = Number(prompt("Digite um numero par!"))

const resultado = numeroPar % 2 

console.log(resultado)// com o numero par dará sempre "0" nesse caso. 

/* caso o usuario coloque o numero impar, o valor que aparecerá será o restante
da divisão. Ex: 17 % 2 = 1 */ 

// exercicio 3- 

let idadeEmAnos = Number(prompt("Qual a sua idade?"))

console.log(idadeEmAnos * 12)
console.log(idadeEmAnos * 365)
console.log(idadeEmAnos * 365 * 24)

// exercicio 4- 

let numeroUm = Number(prompt("Digite um numero:"))
let numeroDois = Number(prompt("Digite um segundo numero:"))

console.log("O primeiro numero é maior que o segundo?", numeroUm > numeroDois)
console.log("O primeiro numero é igual ao segundo?", numeroUm === numeroDois)
console.log("O primeiro numero é divisível pelo segundo?", numeroUm % numeroDois === 0)
console.log("O segundo numero é divisível pelo primeiro?", numeroDois % numeroUm === 0)





