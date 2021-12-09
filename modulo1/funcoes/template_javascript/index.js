/* EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
1
a
10
50

b
Não apareceria nada.

2
a
Recebe como parametro um texto inserido pelo usuario.
Coloca esse texto em letras minusculas e verifica se no teto há a palavra "cenoura".

b
true 
true
true

EXERCICIOS  DE ESCRITA DE CODIGO

1*/
//a
const nome = "soraia"
const idade = 31
const cidade = "BH"
const estuda = "sou estudante"

function iprimirMensagem() {
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estuda}`)
}
iprimirMensagem()

//b

function coletaInformacoes (nome, idade, cidade, profissao) {
return(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${profissao}`)
    
}

console.log (coletaInformacoes ("soraia", 31, "BH", "advogada"))

//2
//a
function somarNumeros (num1, num2) {
    return num1 + num2
  
}
const soma = somarNumeros (3,5)
console.log (soma)

 //b
 function verificaSeEmaior (num1, num2) {
return num1 >= num2
}
const resultado = verificaSeEmaior (5,3)
console.log (resultado)

//c

function verificaSeEpar (num) {
return num/2 === 0
}
const resultado = verificaSeEpar (5)
console.log (resultado)

//d
function imprimeMensagem(mensagem) {
    return `${mensagem.length}, ${mensagem.toUpperCase()}`
    }
    
    console.log (imprimeMensagem ("Ola Pessoal"))

  //3

function soma (num1, num2) {
      return num1+num2
}

function subtracao (num1, num2) {
    return num1-num2
}

function multiplicacao (num1, num2) {
    return num1*num2
}

function divisao (num1, num2) {
    return num1/num2
}

const primeiroNumero = Number(prompt("insira um numero"))
const segundoNumero = Number(prompt("insira outro numero"))

console.log (soma (primeiroNumero, segundoNumero))
console.log (subtracao (primeiroNumero, segundoNumero))
console.log (multiplicacao (primeiroNumero, segundoNumero))
console.log (divisao (primeiroNumero, segundoNumero))