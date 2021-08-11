/* Exercícios de interpretação de código: 

a - Será impresso 3 versões da variável "usuários", sendo a primeiro com o nome e apelido da Amanda + um array com todos os objetos dentro da variável 
"usuários". Em seguida se repete esse processo só que inicia-se com a Lais e repete o array com os 3 e assim segue-se. 

b- Será impresso somente os nomes que aparecem dentro da variável "usuários".

c- Retornará os apelidos diferentes de "Chijo".

*/ 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ] 
 
 // a) Crie um novo array que contenha apenas o nome dos doguinhos 

 const novoArray = pets.map((item, index, array) => {
    return item.nome
 })
 console.log(novoArray)
 
 // a) Crie um novo array que contenha apenas o nome dos doguinhos 

 const novoArrayB = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })

 // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 console.log(novoArrayB)

 const novoArrayC = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
 }) 
console.log(novoArrayC)


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a) Crie um novo array que contenha apenas o nome de cada item

const arrayProdutosA = produtos.map((item, index, array) => {
    return item.nome
 })
 console.log(arrayProdutosA)

 // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 // c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const arrayProdutosB = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })

 console.log(arrayProdutosB)

 // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

 const arrayProdutosC = produtos.filter((item, index, array) => {
    return array.nome === "Ypê"
 })

 console.log(arrayProdutosC)