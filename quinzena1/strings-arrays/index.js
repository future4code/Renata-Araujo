/* exercicio 1 

a- imprime undefined 
b- imprime null 
c- imprime "11" 
d- imprime 3 ou undefined
5- imprime 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
6- imprime 9 */ 

/* exercicio 2 

imprime = "SUBI NUM ONIBUS EM MIRROCOS" - 27 */

const nome = prompt("Digite seu nome") 
const email = prompt("Digite seu email")

console.log("O e-mail ", email, " foi cadastrado com sucesso. Seja bem-vinda(o) ", nome, "!")

const array = ["banana", "maça", "uva", "pêra", "melancia"]

console.log(array) 
console.log("Essas são minhas comidas favoritas",
array[0],
array[1],
array[2],
array[3],
array[4])

const comidaFavorita = prompt("Qual a sua comida favorita?")

array.splice(1, 1, comidaFavorita)

console.log(array)

const listaDeTarefas = []
const tarefa1 = prompt("Fale uma tarefa do seu dia a dia:")
const tarefa2 = prompt("Fale uma tarefa do seu dia a dia:")
const tarefa3 = prompt("Fale uma tarefa do seu dia a dia:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

const indice = prompt("Qual tarefa já realizou?")

listaDeTarefas.splice(indice)

console.log(listaDeTarefas)

