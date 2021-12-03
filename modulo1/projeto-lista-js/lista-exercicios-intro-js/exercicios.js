// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const alturaRetangulo = Number(prompt("digite a altura do retangulo"))
  const larguraRetangulo = Number(prompt("digite a largura do retangulo"))
  const areaRetangulo = alturaRetangulo*larguraRetangulo
  return areaRetangulo
}
console.log (calculaAreaRetangulo(3,5))
console.log (calculaAreaRetangulo (2,6))

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("digite o ano atual"))
  const anoNascimento = Number(prompt("digite o ano do seu nascimento"))
  const idade = anoAtual - anoNascimento
  return idade

}
console.log (imprimeIdade (2020, 1990))
console.log (imprimeIdade (2021, 1967))

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso/(altura*altura)
  return IMC

}
console.log (calculaIMC(85,1.8))
console.log (calculaIMC(70,1.75))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("digite seu nome")
  const idade = prompt(Number("digite sua idade"))
  const email = prompt("digite seu email")
  const frase = ´Meu nome é ${nome}, tenho ${idade}, e o meu e-mail é ${email}.´
  return frase
}
console.log (imprimeInformacoesUsuario)
//NÃO RESOLVIDO

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite uma cor")
  const cor2 = prompt("digite outra cor")
  const cor3 = prompt("digite mais uma cor")
  const coresFavoritas = [cor1, cor2, cor3]
  console.log (coresFavoritas)

}
imprimeTresCoresFavoritas

//NADA NO CONSOLE, NEM O PROMPT ABRIU


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 return string.toUpperCase()

}
console.log (retornaStringEmMaiuscula("oi"))
console.log (retornaStringEmMaiuscula("bAnAnA"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 const quantidadeIgressos = custo/valorIngresso
 return quantidadeIgressos

}
console.log (calculaIngressosEspetaculo(3000,100))
console.log (calculaIngressosEspetaculo(5500,50))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length

  return tamanhoString1 === tamanhoString2
}
console.log (checaStringsMesmoTamanho ("ola", "abc"))
console.log (checaStringsMesmoTamanho ("teste", "porta"))
console.log (checaStringsMesmoTamanho ("ola", "abcd"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0] 
  return primeiroElemento

}
console.log (retornaPrimeiroElemento[1,2,3])
//não resolviso, UNDEFINED


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemnto = array[array.length-1]
  return ultimoElemnto
}
//DEU ERRADO

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemnto = array[array.length-1]
  array[0] = ultimoElemnto
  array[array.length-1] = primeiroElemento
  return array
//DEU ERRADO

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
const comparacao = string1 == string2
return comparacao
}
console.log (checaIgualdadeDesconsiderandoCase ("ola","olA" ))
console.log (checaIgualdadeDesconsiderandoCase ("bananinha","BANANINHA"))
console.log (checaIgualdadeDesconsiderandoCase ("banana","BANANINHA" ))
//DEU TUDO FALSE 

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}