/*
   ------------- Operadores aritméticos---------------------
    + adição /concatenação
    - subtração
    / divisão
    * multiplicação
    % modulo - resto da divisão
    ** potenciação
    = atribuição - o valor a esquerda é includo na variável a esquerda
*/

let numero1 = 2
let numero2 = 3
let numero3 = '30'
console.log('soma :', numero1 + numero2)

console.log('concatenação :', numero1 + numero3)

console.log('subtração :', numero1 - numero2)

console.log('multiplicação :', numero1 * numero2)

console.log('divisão :', numero1 / numero2)

console.log('modulo :', numero1 % numero2)

console.log('potenciação :', numero1 ** numero2)


/*
--------------------precedência--------------------
  () - tem maior precedência
  ** - potenciação
  * / % - multiplicação, divisão e módulo
  + -  - adição e subtração
*/

let valor1 = 2;
let valor2 = 4;
let valor3 = 6;

console.log(valor1 + valor2 * valor3)// o resultado será 26 pois primeiro o corre a multiplicação que tem maior precedência em relação a soma

console.log((valor1 + valor2) * valor3) // o resultado agora é 36 pois a expressão que esta dentro dos paranteses tem maior precedência

console.log(valor1 * valor2 / valor3) //como a multiplicação está no mesmo nível da divisão o operador que aparece primeiro na leitura da esquerda para direita terá maior precedência