// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return (array.length)

}
console.log (tamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
         let arrayIvertido= array.reverse()
         return arrayIvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayOrdenado = array.sort()
        return arrayOrdenado
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
       let numerosPares = array.filter(array[i] % 2 === 0)
        return numerosPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
        let numerosPares = array.filter(array.length[i] % 2===0)
        return numerosPares*numerosPares
   
 }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (let i = 0; i < array.length; i++) {
      if (maiorNumero < array[i]) {
        maiorNumero = array[i]
      }
    }
    return maiorNumero
  }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    let maiorDivisivelPorMenor

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
       
        if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
            return "Escaleno"
          }
        else if (ladoA === ladoB && ladoB === ladoC) {
            return "Equilátero"
          } 
        else {
            return "Isósceles"
          }
        }
        

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let organizaArray = array.length.sort()
  let segundoMenor = organizaArray[1]
  let verSegundoMaior = organizaArray.length-1
  let segMaior = verSegundoMaior.pop()
  let segundoMaior = segMaior.length-1
  return segundoMaior, segundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let elenco = ""
    for (let i = 0; i < filme.atores.length; i++) {
      if (i === filme.atores.length - 1) {
       elenco += filme.atores[i]
      } else {
       elenco += filme.atores[i] + ", "
      }
    }
  
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`
  }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome:"ANÔNIMO"}
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = [];
  for (const pessoaAuto of pessoas) {
    if (pessoaAuto.altura >= 1.5 && pessoaAuto.idade > 14 && pessoaAuto.idade < 60) {
      pessoasAutorizadas.push(pessoaAuto);
    }
  }
  return pessoasAutorizadas;
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = [];
    for (const pessoaNaoAuto of pessoas) {
      if (pessoaNaoAuto.altura < 1.5 || pessoaNaoAuto.idade <= 14 || pessoaNaoAuto.idade >= 60) {
        pessoasNaoAutorizadas.push(pessoaNaoAuto);
      }
    }
    return pessoasNaoAutorizadas;
  }


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}