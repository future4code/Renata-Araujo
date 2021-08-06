/*
1- O resultado impresso no console será 10. O código está realizando loops com a condição definidas por números
Ele define um valor, uma condição de "i" em dois blocos e cria um loop finito até atingir o valor 5 em "i". 

2- Será impresso todos os números maiores de 18. 
Sim mas é possível imprimir diretamente com o console.log, como: "console.log(lista)"

3- Seria impresso: 
*
**
***
****

*/
const quantidadeAnimais= Number(prompt("Quantos animais de estimação você tem?"))
 if(quantidadeAnimais === 0) {
   console.log("Que pena! Você pode adotar um pet!")
 } else if(quantidadeAnimais > 0 ) {
   const nomeAnimais = prompt("Qual o nome deles?") 
   console.log([nomeAnimais])
 }  

 const arrayOriginal = [5, 10, 15]

 function imprimaArray(){
   console.log(arrayOriginal)
 }
 imprimaArray()

 function imprimaDivisao(){
  console.log(arrayOriginal[0] / 2, arrayOriginal[1] / 2, arrayOriginal[2] /2)
 }
 imprimaDivisao()

const novoArray = [...arrayOriginal] 
let par = 2
for(let num of novoArray) {
  if(num % par === 0) {
    par = num 
  }
}
console.log(par)

let maior = 0
for(let maiorNum of novoArray) {
  if(maiorNum > maior) {
    maior = maiorNum
  }
}
console.log(maior) 
