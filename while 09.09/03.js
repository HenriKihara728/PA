let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite outro numero: ");

while(n1 < n2) {
    console.log(n1);
     n1 = n1 + 1
}
while(n1 > n2) {
    console.log(n1);
    n1 = n1 - 1
}