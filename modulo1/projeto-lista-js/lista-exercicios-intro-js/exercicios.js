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


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("digite o ano atual"))
  const anoNascimento = Number(prompt("digite o ano do seu nascimento"))
  const idade = anoAtual - anoNascimento
  return idade

}

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
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`) 
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite uma cor")
  const cor2 = prompt("digite outra cor")
  const cor3 = prompt("digite mais uma cor")
  const coresFavoritas = [cor1, cor2, cor3]
  console.log (coresFavoritas)

}
imprimeTresCoresFavoritas



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


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemnto = array[array.length-1]
  array[0] = ultimoElemnto
  array[array.length-1] = primeiroElemento
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"))
   const anoNascimento = Number(prompt("Digite o ano de nascimento"))
   const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

   const idade = anoAtual - anoNascimento
   const tempoCarteira = anoAtual - anoEmissao

   const cond1 = idade <= 20 && tempoCarteira >= 5
   const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
   const cond3 = idade > 50 && tempoCarteira >= 15

   console.log(cond1 || cond2 || cond3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const cond1 = ano % 400 === 0
   const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
   return cond1 || cond2
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")

}

