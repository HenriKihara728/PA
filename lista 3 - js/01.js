let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

if (n1 < 5) {
    console.log(n1);
} else {
    console.log("O numero nao e menor que 5");
}