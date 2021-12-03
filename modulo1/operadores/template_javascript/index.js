//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

/* 1

a. false
b. false
c. true
d. boolean

2

Meu colega não transformou string em Number, logo o programa não realizará a soma, mas sim colocará os 
dois números digitados pelo usuário um ao lado do outro.

3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = Number(primeiroNumero)+ Number(segundoNumero)
console.log(soma)
*/

//EXERCICIOS DE ESCRITA DE CODIGO

//1
//a
const suaIdade = Number(prompt("qual a sua idade"))

//b
const idadeAmigo = Number(prompt("qual a idade do seu melhor amigo"))

//c
const comparaIdades = suaIdade>idadeAmigo
console.log("Sua idade é maior que a do seu amigo", comparaIdades)

//d
const diferencaIdades = suaIdade - idadeAmigo
console.log (diferencaIdades)


// 2
//a
const numeroPar = prompt ("insira um número par")
//b
console.log(Number(numeroPar)%2)
//c
// Se o numero for par, o resto da divisão por 2 será sempre 0.
//d
// Se o número ímpar, o resto da divisão por 2 sera sempre 1.


// 3
const idadeUsuario = Number(prompt("qual a sua idade"))

//a
console.log(idadeUsuario*12)

// b
console.log(idadeUsuario*365)

// c
console.log(idadeUsuario*365*24)

// 4

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero);
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0);
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0);