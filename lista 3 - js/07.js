let input = require("readline-sync");

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");
let n3 = input.questionInt("Digite o terceiro numero: ");

let soma = n1 + n2 + n3;

if (soma > 20) {
    console.log(soma);
} else {
    console.log("A soma não é maior que 20.");
}