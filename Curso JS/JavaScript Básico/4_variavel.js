/*  Regras para nomeação das variavés e constantes
    Não pode nomear variáveis e constantes com palavras reservadas Ex(if, let, const)
    Variáveis e Constantes devem ter nomes significativos 
    Não podem começar com número
    Não podem conter espaços
    São Case-Sensitive
    use let , não var
    as variavéis são dinâmicas
*/

//var var = "nome" , palavra reservada var

let dias = new Date()
console.log(dias) /* imprime a data de hoje, 
                     então o nome dias não é um bom nome o ideal seria  dias            
                */

//let 2dias = new Date()  erro a variável está inicializando com um número

//let nome completo = "Joaqui Mendes"; erro não pode conter espaços

var nome = "Antônio"

var nome = "Adriano"

var nome = "Elefante"

console.log(nome)

//let nome = "João"  erro o nome já foi declarado , esse é um dos motivos de escolher let no lugar de var . O let torna o sistema mais seguro e consistente.

let idade 
console.log(typeof idade)//undefined

idade = null
console.log(typeof idade)//null

idade = 45;
console.log(typeof idade)//number

idade = "Quarenta e cinco"
console.log(typeof idade)//string



