let input = require("readline-sync");

let n1 = Number(prompt("Digite um numero: "));

if (n1 < 10) {
    console.log(n1 * 1);
    console.log(n1 * 2);
    console.log(n1 * 3);
    console.log(n1 * 4);
    console.log(n1 * 5);
    console.log(n1 * 6);
    console.log(n1 * 7);
    console.log(n1 * 8);
    console.log(n1 * 9);
    console.log(n1 * 10);
} else {
    console.log("O numero não e menor que 10.");
}