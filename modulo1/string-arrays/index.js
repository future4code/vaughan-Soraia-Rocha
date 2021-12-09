/*EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

1
a. undefined
b.null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2
"SUBA NUM ONABUS EM MIRROCOS", 27*/

//EXERCICIOS DE ESCRITA DE CODIGO

//1
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt("digite seu nome")
const emailDoUsuario = prompt("digite seu email")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda, ${nomeDoUsuario}`)

//2
const comidasPreferidas = ["feijao", "arroz", "batata", "tomate", "bife"]

 //a  
 console.log (comidasPreferidas)

 //b

 console.log("Essas são as minhas comidas preferidas:")
 console.log(comidasPreferidas[0])
 console.log(comidasPreferidas[1])
 console.log(comidasPreferidas[2])
 console.log(comidasPreferidas[3])
 console.log(comidasPreferidas[4])

//c

const comidaUsuario = prompt("qual a sua comida preferida")
comidasPreferidas[1] = comidaUsuario
console.log (comidasPreferidas)

//3

//a
const listaDeTarefas = []

//b
const tarefa1 = prompt("digite a primeira tarefa")
const tarefa2 = prompt("digite a segunda tarefa")
const tarefa3 = prompt("digite a terceira tarefa")

listaDeTarefas.push (tarefa1) 
listaDeTarefas.push (tarefa2)
listaDeTarefas.push (tarefa3)

//c
console.log(listaDeTarefas)

//d
const tarefaRealizada = prompt ("digite uma tarefa já realizada, 0,1 ou 2")

//e
listaDeTarefas.splice (Number(tarefaRealizada),1)
console.log (listaDeTarefas)