let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

while(n1 < 20) {
    console.log(n1);
    n1 = n1 + 1;
}
while(n1 > 20) {
    console.log(n1);
    n1 = n1 - 1;
}