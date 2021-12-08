/* EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

1 
O código faz a repetição enquanto i for menor que 5.
O programa para de rodar quando atinge 4.

2
a: [19, 21, 23, 25, 27, 30]

b: Sim, declararando uma variavel com o índice do array começando na primeira posição,
ou seja, no 0, colocar a condição enquanto o numero for maior que 18, há um incremento 
no índice até chegar à lista acima, quando o programa parará de rodar.

3
Enquanto a quantidade atual fosse menor que a quantidade digitada pelo usuário o programa
acrescentaria um asterisco e pularia para a linha de baixo e a cada vez que houvesse incremento
na quantidade atual, haveria incremento de um asterisco.
*
**
***
****

EXERCICIOS DE ESCRITA DE CODIGO */

//1

const bichosEstimacao = Number(prompt("Quantos bichos de estimação voce tem"))
console.log (bichosEstimacao)

if (bichosEstimacao === 0) {
    console.log("Que pena, voce pode adotar um pet")
}

if (bichosEstimacao > 0){
    let pets = []
for (let i = 0; i < bichosEstimacao; i++) {
    pets.push(prompt("digite os nomes dos seus bichos"))
}
console.log (pets)
}


//2

const arrayOriginal = [10, 20, 25, 35, 40]
console.log (arrayOriginal)


function imprimeValor(arrayOriginal) {

    for (let valorArray of arrayOriginal){
        console.log(valorArray/10)
    }
}
imprimeValor(arrayOriginal) 


