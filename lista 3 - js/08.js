let input = require("readline-sync");

let n1 =  input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");

if (n1 == n2) {
    console.log(n1);
    console.log(n2);
} else {
    console.log("Os numeros são diferentes.");
}