/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Bem vindo ao jogo de Blackjack!")
   } else {
      console.log("O jogo acabou!")
   }
   const cartaUsuarioUm = comprarCarta(); 
   
   const cartaUsuarioDois = comprarCarta(); 
   
   const cartaComputadorUm = comprarCarta();
   
   const cartaComputadorDois = comprarCarta()
   
   console.log("Usuário- cartas:", cartaUsuarioUm.texto, cartaUsuarioUm.valor, cartaUsuarioDois.texto, cartaUsuarioDois.valor, "pontuação:", (cartaUsuarioUm.valor + cartaUsuarioDois.valor))
   
   console.log("Computador- cartas:", cartaComputadorUm.texto, cartaComputadorUm.valor, cartaComputadorDois.texto, cartaComputadorDois.valor, "pontuação:", (cartaComputadorUm.valor + cartaComputadorDois.valor))
   
   if(cartaUsuarioUm.valor + cartaUsuarioDois.valor > cartaComputadorUm.valor + cartaComputadorDois.valor) {
      console.log("Parabéns, você venceu!")
   } else if (cartaUsuarioUm.valor + cartaUsuarioDois.valor === cartaComputadorUm.valor + cartaComputadorDois.valor) {
      console.log("Ops, empatou!")
   } else {
      console.log("O computador ganhou!")
   }

   if(cartaUsuarioUm.texto === "A" && cartaUsuarioDois.texto === "A" || cartaComputadorUm.texto && cartaComputadorDois.texto === "A") {
      console.log("Jogue Novamente!")
      comprarCarta()
   } 

   if(confirm(`Suas cartas são: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto}. A carta revelada do computador é: ${cartaComputadorDois.texto} +
      \n. Deseja comprar mais uma carta?`)) {}

   const novaCartaUsuario = comprarCarta() 
   
   confirm(`Suas cartas são: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} ${novaCartaUsuario.texto} . A carta revelada do computador é: ${cartaComputadorDois.texto} +
   \n. Deseja comprar mais uma carta?`) 
   
   while (novaCartaUsuario.valor + cartaUsuarioUm.valor + cartaUsuarioDois.valor <= 21) {} 
   
   console.log("Usuário- cartas:", cartaUsuarioUm.texto, cartaUsuarioUm.valor, cartaUsuarioDois.texto, cartaUsuarioDois.valor, novaCartaUsuario.valor, novaCartaUsuario.texto, "pontuação:", (cartaUsuarioUm.valor + cartaUsuarioDois.valor + novaCartaUsuario.valor))
   if (novaCartaUsuario.valor + cartaUsuarioUm.valor + cartaUsuarioDois.valor > cartaComputadorUm.valor + cartaComputadorDois.valor) {
      console.log ("Você venceu!")
   } else if(novaCartaUsuario.valor + cartaUsuarioUm.valor + cartaUsuarioDois.valor > 21) {
      console.log("Você perdeu!")
   } else if(novaCartaUsuario.valor + cartaUsuarioUm.valor + cartaUsuarioDois.valor === cartaComputadorUm.valor + cartaComputadorDois.valor) {
      console.log("Empatou")
   } else {
      console.log("Você perdeu!")
   }
         
         

   