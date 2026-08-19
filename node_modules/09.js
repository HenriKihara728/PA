let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero:");
let res = n1 - 3;
let res2 = n1 + res;

console.log("O resultado:", res2)