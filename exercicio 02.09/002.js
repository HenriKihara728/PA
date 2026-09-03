let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite outro numero: ");
let soma1 = n1 + 5;
let soma2 = n2 + 5;

if (n1 < n2) {
    console.log(soma1);
} else if (n2 < n1) {
    console.log(soma2);
}