let input = require("readline-sync");

let n = input.questionInt("Digite um numero: ");
let r = n * 3;

if (r > 15) {
    console.log(r);
} else {
    console.log("O resultado não e maior que 15.");
}