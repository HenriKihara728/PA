let input = require("readline-sync");

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");

let soma = n1 + n2;

if (soma < 20) {
    console.log(n1 * 10);
    console.log(n2 * 10);
} else {
    console.log("A soma não e menor que 20.");
}