/* Exercícios de interpretação de código: 

1 - 

a: O código pede para o usuário inserir um número qualquer. Uma outra variável transofrma 
o número que o usuário insere em número e depois disso cria um condicional
onde especifica que se o número inserido pelo usuário dividido por dois tiver como resto o valo "0",
na tela será impresso o console.log "Passou no teste". Caso contrário, se o resto da divisão der diferente 
de "0", o console.log será "Não passou no teste". 

b: Números pares.

c: Números impares. 

2 - 

a: O código serve para condicionar condições das frutas para entregar/imprimir
informações especificas sobre cada uma das condições. 

b: O preço da fruta maça é R$ 2.25. 

c: Ficaria: O preço da fruta pêra é R$ 5. 

3- 

a: A Primeira frase contém uma variável que pede ao usuário um número. PS: O valor da variável já está
definido como número por conta do "Number". 

b: Com 10 a frase seria: "Esse número passou no teste" 
Com - 10 não aparecerá nada. 

c: Sim, pois a variável foi declarada dentro do escopo filho e foi chamada no pai, 
o que não funciona pois não está dentro do bloco de pai ou global. 

*/
const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18) {
  console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

const turno = prompt("Qual turno você estuda? Digite M(matutino), V(Vespertino) ou N(Noturno).")

if(turno === "M") {
  console.log("Bom Dia")
} else if (turno === "V") {
    console.log("Você não pode dirigir.")}
 else if (turno === "N") {
console.log ("Boa noite!")}   
else {
    console.log("Digite uma mensagem válida")
}

const turnoDoUsuario = prompt("Qual turno você estuda? Digite M(matutino), V(Vespertino) ou N(Noturno).")
let mensagem
switch(turnoDoUsuario) {
case "M":  
    mensagem = "Bom dia"
    break
case "V":
    mensagem = "Boa tarde"
    break
case "N":
    mensagem = "Boa noite"
    break
default: 
    mensagem = "Digite uma mensagem válida"
    break
}

console.log(mensagem)

const filme = prompt("Qual o gênero do filme que você irá assistir?")
const preco = Number(prompt("Qual o preço do ingresso?"))

if(filme === "fantasia" && preco <= 15) {
  console.log("Bom filme")
} else {
    console.log("Escolha outro filme :(.")}
