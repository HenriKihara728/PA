let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero:");
let res = n1 + 10;
let n2 = input.questionInt("Digite um segundo numero:");
let res2 = n2 + 5;
let n3 = input.questionInt("Digite um terceiro numero:");
let res3 = n3 * 10;

console.log("O resultado:", + res, + res2, + res3)