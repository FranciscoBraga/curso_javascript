//tipos primitivos string, number, undefined, null, boolean, symbol
let nome = "Luiz"
let sobrenome = ''
let idade = 10
let rendaFamliar = 5300.50
let dataNascimento = undefined //não aponta para lugar nenhum da memória
let nomeMae 
let nomePai = null//nulo - não aponta para lugar nenhum da memória- porém o desenvolvedor que vai definir explicitamente
let aprovado = false //verdadeiro e falso - valor lógico.
let matricula = Symbol(14582)// valor único 

console.log("o tipo da variável nome é: ",typeof nome)
console.log("o tipo da variável sobrenome  é: ",typeof sobrenome)
console.log("o tipo da variável idade é: ",typeof idade)
console.log("o tipo da variável dataNascimento é: ",typeof dataNascimento)
console.log("o tipo da variável rendaFamliar é: ",typeof rendaFamliar)
console.log("o tipo da variável nomeMae é: ",typeof nomeMae)
console.log("o tipo da variável nomePai é: ",typeof nomePai)
console.log("o tipo da variável aprovado é: ",typeof aprovado)

console.log("o tipo da variável matricula é: ",typeof matricula,matricula)


