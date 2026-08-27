let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero para determinar se é par ou impar:");

let r = n1 % 2;

if (r == 0) {
    console.log("par")
} else {
    console.log("impar")
}