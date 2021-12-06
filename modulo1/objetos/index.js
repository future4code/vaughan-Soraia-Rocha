/*EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
1
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}

2
a: 
{nome: "Juca", 
idade: 3, 
raca: "SRD"}

{nome: "Juba", 
idade: 3, 
raca: "SRD"}

{nome: "Jubo", 
idade: 3, 
raca: "SRD"}

b:
Faz uma cópia deste objeto

3
a:
false
undefined

b:
false: foi o valor boolean contido na chave backender
undefined: o valor altura não foi declarado 

EXERCICIOS DE ESCRITA DE CODIGO

1*/

const pessoa = {
nome: "Soraia", 
apelidos: ["Sol", "Sô", "Sosô"]
}

function imprimeFrase(pessoa) {
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},
${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
frase(pessoa)

//b
const novaPessoa = {... pessoa,
apelidos: ["Sora", "Sorainha", "Sorão"]
}
imprimeFrase(novaPessoa)

//2
//a

const pessoa = {
nome: "Soraia", 
idade: 31, 
profissao: "Dev"

}

const segundaPessoa = {
    nome: "Chris", 
    idade: 43, 
    profissao: "Servidora"
    
    }

    //b

function recebeObjetos (pessoa, segundaPessoa){
    return [
    pessoa.nome,
    pessoa.nome.lenght,
    pessoa.idade,
    pessoa.profissao,
    pessoa.profissao.lenght,
    segundaPessoa.nome,
    segundaPessoa.nome.lenght,
    segundaPessoa.idade,
    segundaPessoa.profissao,
    segundaPessoa.profissao.lenght]
}

console.log( recebeObjetos (pessoa, segundaPessoa))

//deu undefined quando coloco lenght

//3
//a
const carrinho = []
    
//b
const fruta1 = {
    nome: "laranja",
    disponibilidade: true 
}
const fruta2 = {
    nome: "banana",
    disponibilidade: true 
}
const fruta3 = {
    nome: "abacaxi",
    disponibilidade: false 
}

//c
function recebeFrutas (fruta) {
carrinho.push(fruta)

}
recebeFrutas(fruta1)
recebeFrutas(fruta2)
recebeFrutas(fruta3)

//d
console.log(carrinho)