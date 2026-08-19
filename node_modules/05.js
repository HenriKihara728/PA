let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero:");
let n2 = input.questionInt("Digite outro numero:");

let res = n1 - n2;
let res2 = res + 10;

console.log("O resultado:", res2)