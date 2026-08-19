let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero:");
let res = n1 - 3;

let n2 = input.questionInt("Digite outro numero");

let res2 = n2 + 2;
let res3 = res + res2;
let res4 = res3 - 1;

console.log("O resultado:", res4)