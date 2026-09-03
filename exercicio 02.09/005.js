let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite um segundo numero: ");
let n3 = input.questionInt("Digite um terceiro numero: ")

let soma1 = n1 + 5;
let soma2 = n2 + 5;
let soma3 = n3 + 5;

if (n1 < n2 && n3) {
    console.log(soma1);
} else if (n2 < n1 && n3) {
    console.log(soma2);
} else {
    console.log(soma3);
}