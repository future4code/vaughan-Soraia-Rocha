/* EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
1
a:
O codigo pede um numero ao usuario e imprime no console a condição de que se 
a divisão desse numero por 2 for zero, o numero passa no teste, se não, 
o numero não passou no teste.

b:
Para os números pares

c:
Para números ímpares

2
a: O usuário digita uma fruta e o codigo encontra o preço dessa fruta.

b: O preço da fruta maçã é R$2.25.

c: O preço seria 5,00.

3
a: A primeira linha pede um numero ao usuario

b: Se o usuario digitar 10, a mensagem será: Esse número passou no teste;
Se o número for -10, nenhuma mensagem será impressa.

c: haverá um erro pois não foi definida condição para a hipótese de número 
menor ou igual a 0 e a variavel mensagem não esta dentro do escopo, logo dará undefined.

EXERCICIOS DE ESCRITA DE CÓDIGO */

//1
const idadeUsuario = Number(prompt("Digite a sua idade"))

if (idadeUsuario >= 18) {
  console.log("você pode dirigir")
}
else {
console.log("você não pode dirigir");
}

//2

const turnoEstudo = prompt("Digite em qual turno você estuda, M, V ou N")

if (turnoEstudo == "M"){
    console.log("Bom dia!")
}
else if (turnoEstudo == "V"){
    console.log("Boa tarde!")
}
else {
    console.log("Boa Noite")
}

//3
const turnoEstudo = prompt("Digite em qual turno você estuda, M, V ou N")

switch (turnoEstudo){
    case "M":
    console.log("Bom dia!")
    break

    case "V":
    console.log("Boa tarde!")
    break

    case "N":
    console.log("Boa Noite")
    break

    default:
    console.log("ERRO")
    break
}

//4
const generoFilme = prompt("Qual o genero do filme")
const precoIngresso = Number(prompt("Qual o preço do ingresso"))

if (generoFilme == "fantasia" && precoIngresso < 15) {
    console.log ("Bom filme!")
}
else {
    console.log ("Escolha outro filme :(")
}



