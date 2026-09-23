let input = require('readline-sync')
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um segundo numero: ")
let n3 = input.questionInt("Digite um terceiro numero: ")

while(`{n1< n2, n3} < 10  `){
    console.log(n1);
    n1 = n1 + 1
}