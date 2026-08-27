let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

let r = n1 + 5;

if (r > 10) {
    console.log(r);
} else {
    console.log("O resultado nao e maior que 10");
}