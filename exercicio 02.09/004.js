let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite um segundo numero: ");
let n3 = input.questionInt("Digite um terceiro numero: ");

if (n1 > n2 && n3) {
    console.log(n1);
} else if (n2 > n3 && n1) {
    console.log(n2);
} else {
    console.log(n3);
}