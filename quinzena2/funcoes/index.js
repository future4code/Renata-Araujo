// Exercícios de interpretação de código 
// 1. 
// a- Será impresso: 10, 50. 
// b- Não apareceria nada pois não teriamos convocado a mensagem pro console. 

// 2.
/* a- Inicialmente o codigo solicita um texto ao usuario por meio do prompt. Logo em seguida, é criado uma nova variável e dentro dela é 
criada uma função. Dentro dessa função é solicitado que o texto retorne em letra minuscula e pergunta se inclui a palavra
"cenoura dentro do texto. Após fechar a função, é criado novamente uma nova variável que chama a variavel da função e o
texto do Usuario. Assim sendo, quando feito o console.log, imprimirá se o texto que o usuário inseriu contém ou não
a palavra "cenoura". */
// b- true/ true/ true. 

function textoSobreMim(){
  console.log("Eu sou Renata, tenho 25 anos, moro em Belo Horizonte e sou estudante")

} 

textoSobreMim() 

function sobreAPessoa(nome, idade, cidade, carreira) {
    nome = "Barbara"
    idade = 25
    cidade = "Belo Horizonte"
    carreira = "Economista"

    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${carreira}.`)
}

sobreAPessoa()

function somaDeNumeros(numero1, numero2){
    const soma = numero1 + numero2 
    console.log(soma)
}
 somaDeNumeros(2, 5)

 function numerosBoleanos(numeroUm, numeroDois){
     const boleano = numeroUm >= numeroDois 
     console.log(boleano)

 }
 
 numerosBoleanos(10, 5)

 function retornaPar(numero){
 const resultado = numero % 2 === 0 
 console.log(resultado) 
 }

 retornaPar(4)

 function mensagem(texto) {
     texto = "Olá, meu nome é Renata."
     console.log(texto.length) 
     console.log(texto.toUpperCase())    
 }
mensagem()

function somaDois() {
    const somaDoUsuario = respostaUm + resposta2
    console.log(somaDoUsuario) 
}

function subtracao(){ 
    const subtracao = respostaUm - resposta2
    console.log(subtracao)
}

function multiplicacao(){
    const multiplicacao = respostaUm * resposta2
    console.log(multiplicacao)

}

function divisao() {
    const divisao = respostaUm / resposta2
    console.log(divisao)

}

const respostaUm = Number(prompt("Insira um Numero"))

const resposta2 = Number(prompt("Insira outro numero"))

somaDois()
subtracao()
multiplicacao()
divisao()
