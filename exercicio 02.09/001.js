let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite um segundo numero: ");

if (n1 < n2) {
    console.log(+ n1)
}else if (n2 < n1) {
    console.log(+ n2)
} else {
    console.log("Tente novamente. ")
}