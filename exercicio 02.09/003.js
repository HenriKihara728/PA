let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

if (n1 > 10) {
    console.log("Numero maior que 10");
} else if (n1 == 10) {
    console.log("Numero igual a 10");
} else {
    console.log("Numero menor que 10");
}