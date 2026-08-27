let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

let resultado = n1 - 10;

if (resultado > 3) {
    console.log(resultado);
} else {
    console.log("O resultado nao e maior que 3");
}