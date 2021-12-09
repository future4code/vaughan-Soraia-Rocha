/*EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

1: 
A cada vez que um item do array, juntamente com o seu índice é impresso, 
o array inteiro é impresso em seguida.

2
Será impresso somente a chave nome de cada item do array.

3
O array será impresso quase na totalidade, exceto o item onde há o apleido Chijo.

EXERCICIOS DE ESCRITA DE CÓDIGO */

//1
//a
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
  
  const novoArray = pets.map((doguinhos) => {
     return doguinhos.nome 
  })
  
  console.log(novoArray)

  //b
  
  const dogSalsicha = pets.filter((dog) => {
     return dog.raca === "Salsicha"
  })
  
  console.log(dogSalsicha)

  //c

  const dogPoodle = pets.filter((dogP) => {
    return dogP.raca === "Poodle"
 })
 const descontoPoodles = dogPoodle.map((caesP) => {
 return `Você ganhou um cupom de desconto de 10% para tosar o/a ${caesP.nome}`
})
console.log (descontoPoodles)

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 } ]

    //a
    const novoArray = produtos.map((intemSuper) => {
        return intemSuper.nome 
     })
     
     console.log(novoArray)

     //b
     
    const produtosDesconto = produtos.map ((produtoSuper) => {
        return {
        nome: produtoSuper.nome,
        preco: (produtoSuper.preco * 0.95).toFixed(2)}
        })

        console.log (produtosDesconto)
   
    //c
    const catBebidas = produtos.filter((bebidas) => {
        return bebidas.categoria === "Bebidas"
     })
     
     console.log(catBebidas)

     //d
     const palavraYpe = produtos.filter ((produtoYpe) => {
        return produtoYpe.nome.includes("Ypê")
        })

    console.log (palavraYpe)

    //e
    const fraseYpe = palavraYpe.map ((produtoYpe) => {
        return `Compre ${produtoYpe.nome} por ${produtoYpe.preco}`
        })

    console.log (fraseYpe)

    