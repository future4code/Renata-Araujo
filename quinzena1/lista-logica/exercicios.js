// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt(1)
  const num2 = prompt(2)

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt("Olá, mundo!")

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
const alturaRetangulo = prompt(3)
const larguraRetangulo = prompt(5) 

console.log(Number(alturaRetangulo) * Number(larguraRetangulo))


}

// Exercício 2
function imprimeIdade() {
 const anoAtual = prompt("Qual o ano atual?")
 const anoNascimento = prompt("Qual seu ano de nascimento?")

 console.log(Number(anoAtual) - Number(anoNascimento))

}

// Exercício 3
function calculaIMC() {
  const peso = prompt("Qual o seu peso?")
  const altura = prompt("Qual a sua altura?") 
  let IMC = peso / (altura * altura) 

  console.log(Number(IMC)) 

}

// Exercício 4
function imprimeInformacoesUsuario() {
let nome = prompt("Alice")
let idade = prompt(28)
let email = prompt("alice@gmail.com")

console.log("Meu nome é", nome, " tenho ", idade, " anos ", "e o meu email é", email, ".") 

}

// Exercício 5
function imprimeTresCoresFavoritas() {

  const corUm = prompt("Azul")
  const corDois = prompt("Amarelo")
  const corTres = prompt("Vermelho")

  const cores = [corUm, corDois, corTres]

  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
 const string = prompt("Diga Algo: ")
 const stringMaiuscula = string.toUpperCase()

 console.log(stringMaiuscula)

}

// Exercício 7
function calculaIngressosEspetaculo() {

const custoEspetaculo = Number(prompt("Qual o custo de um espetaculo de teatro?"))
const custoIngresso = Number(prompt("Qual o custo do ingresso?")) 

console.log(custoEspetaculo / custoIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
 const primeiraString = prompt("Insira uma palavra:")
 const segundaString = prompt("Insira outra palavra:")

 console.log(primeiraString.length === segundaString.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
 const terceiraString = prompt("Insira uma palavra:")
 const quartaString = prompt("Insira outra palavra:")

 console.log(terceiraString.toUpperCase() === quartaString.toUpperCase())

}

// Exercício 10
function checaRenovacaoRG() {
  const atualAno = Number(prompt("Digite o ano atual:"))
  const Nascimento = Number(prompt("Digite seu ano de nascimento:"))
  const emissao = Number(prompt("Digite o ano que sua carteira de ID foi emitida:"))

  const idadeUsuario = atualAno - Nascimento 
  const renovacao = atualAno - emissao 

  const criterio1 = idadeUsuario <= 20 && renovacao >= 5 
  const criterio2 = idadeUsuario > 20 && idadeUsuario <= 50 && (renovacao >= 10)
  const criterio3 = idadeUsuario > 50 && renovacao > 15 

  const resultado = criterio1 || criterio2 || criterio3 

  console.log(resultado)
}

// Exercício 11
function checaAnoBissexto() {

  const ano = Number(prompt("Fale um ano:"))

  const primeroCriterio = ano % 400 === 0 
  const segundoCriterio = (ano % 4 === 0) && (ano % 100 !== 0) 

  const resultado = primeroCriterio || segundoCriterio 

  console.log(resultado)


  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt("Responda sim ou não se você for maior idade:")
  const ensinoMedio = prompt("Responda sim ou não se você tem ensino medio completo:")
  const horario = prompt("Responda sim ou não se você tem horario disponivel para a aula:")

  const validacao = (maiorIdade.toLowerCase() === "sim") && (ensinoMedio.toLowerCase() === "sim") && (horario.toLowerCase() === "sim")

  console.log(validacao)
} 