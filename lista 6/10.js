let input = require('readline-sync')

let n1 = input.questionInt("insira um numero entre 5 e 10: ");

while (n1 < 5 || n1 > 10){
    let n1 = input.questionInt("insira um numero entre 5 e 10: ");
}

console.log(n1)