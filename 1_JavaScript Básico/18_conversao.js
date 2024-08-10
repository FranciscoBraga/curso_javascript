/*
    As conversões podem ser implicita como explicitas
    implicita quando o interpretador do javascript reconhece que a variável dever ser alterado o seu tipo, para que
    possa continuar a excução do código
    
    excplicito quando o desenvolvedor utilza de metodos para converter o tipo da varíavel

    parseInt()
    parseFloat()
    Number()
*/


  // conversão implicita
  let numero1 = 10
  let numero2 = '20.10'
  console.log(numero1 * numero2)

  //conversão explicita

  console.log(numero1 + numero2)// aqui vai ocorrer a concatenação
  let numero3 = parseInt(numero2)// a variável perdera o número flutuante, pois esse o parseInt conver em inteiro
  console.log(numero1 + numero3) 

  let numero4 = parseFloat(numero2)
  console.log(numero1 + numero4)

  let numero5  = Number(numero2)
  console.log(numero1 + numero5)
