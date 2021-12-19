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
//1

const saudacao = ("Boas vindas ao jogo de Blackjack!")
console.log (saudacao)

function perguntarNovaPartida(){
    
   const perguntaUsuario = confirm("Quer iniciar uma nova rodada?");
    if (perguntaUsuario === true) {
        const totalPontosjogador = totalCastasJogador
        const totalPontosPc = totalCartasPc
        const resultadoJogo    
    }
    else{
        alert("O jogo acabou");
    }
}
const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

