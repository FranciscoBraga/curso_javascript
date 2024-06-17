/*
O operador de incremento e decremento no JavaScript. 
Eles são operadores unários que aumentam ou diminuem o valor de uma variável em uma unidade, respectivamente.
 O operador de incremento é representado por "++" e o de decremento por "--". Além disso o incremento e decremento pode ser pré-incremento ou pós-incremento
 Mas existem outros operadores. 
"+="
"-="
"*="
"/="
*/

let numero1 = 1
console.log(numero1++)// é o mesmo que numero1= numero1 + 1, porém primeiro realizada a  leitura da variável depois será realizado a operação de soma
console.log(numero1)//aqui podemos ver o valor do pós- incremento

let numero2 = 1
console.log(++numero2)// é o mesmo que numero1= numero1 + 1, porém primeiro será realizada a operação de soma e depois a leitura do valor da variável

let numero3 = 1
console.log("+=",numero3 += numero2)
console.log("-=",numero3 -= numero2)
console.log("*=",numero3 *= numero2)
console.log("/=",numero3 /= numero2)