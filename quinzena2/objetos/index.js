/* Exercícios de interpretação de código 
a-)
- Imprime: "Matheus Nachtergaele" 
- 
- {canal: "Globo", horario: "14h"}

b-) 
- "Juca", 3, "SDR"
- "Juba", 3, "SDR"
- "Jubo", 3, "SDR"

A sitaxe dos três pontos substitue um propriedade dentro do objeto. 

c-) 
-"false"
-"undefined"

O console.log chama a a propriedade dentro do objeto, como foi especificado na criação da função = return objeto[propriedade]. Sendo
assim, chamamdos a função pra retornar o que se encontra dentro do objeto e qual a propriedade de "backender" ou "altura". Como
"altura" não foi definido, não foi possivel identificar. 

*/

// Exercícios de escrita de código

const primeiroObjeto = {
    nome: "Renata",
    apelidos: ["Rena", "Re", "Renatinha"]
}

function primeiraFuncao(objeto) {
    return objeto
}

console.log(primeiraFuncao(`Eu sou ${primeiroObjeto.nome}, mas pode me chamar de: ${primeiroObjeto.apelidos}`))

const novoObjeto = {...primeiroObjeto, apelidos: ['Rezinha', 'Nanata', 'Nanatinha']}

console.log(primeiraFuncao(`Eu sou ${novoObjeto.nome}, mas pode me chamar de: ${novoObjeto.apelidos}`))

const objetoUm = { 
    nome: "Renata", 
    idade: 25, 
    profissao: "Lead Generation Analyst" 
}

const objetoDois = { 
    nome: "Bárbara",
    idade: 31,
    profissao: "Economista" 
}  

function funcaoDois(valorNome, tamanhoNome, valorIdade, valorProfissao, tamanhoProfissao) { 
    return [valorNome, tamanhoNome, valorIdade, valorProfissao, tamanhoProfissao] 
}
 

console.log(funcaoDois(typeof objetoDois.nome, objetoDois.nome.length, typeof objetoDois.idade,typeof objetoDois.profissao, objetoDois.profissao.length))  
console.log(funcaoDois(typeof objetoUm.nome, objetoUm.nome.length, typeof objetoUm.idade, typeof objetoUm.profissao, objetoUm.profissao.length))

const carrinho = []

const frutaUm = {
    fruta: "maça",
    disponibilidade: true 
}

const frutaDois = {
    fruta: "pêra",
    disponibilidade: true
}

const frutaTres = {
    fruta: "uva",
    disponibilidade: true

}

function sacolao(fruta){ 
   return carrinho.push(fruta)
}

sacolao(frutaUm)
sacolao(frutaDois)
sacolao(frutaTres)

console.log(carrinho)






