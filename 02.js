let input = require('readline-sync');

let saque = input.questionInt("Insira o valor do saque: ");

let restante = saque;
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;

while (restante >= 100) {
    nota100 = nota100 + 1;
    restante = restante - 100;
}

while (restante >= 50) {
    nota50 = nota50 + 1;
    restante = restante - 50;
}

while (restante >= 20) {
    nota20 = nota20 + 1;
    restante = restante - 20;
}

while (restante >= 10) {
    nota10 = nota10 + 1;
    restante = restante - 10;
}

if (restante == 0) {
    console.log("Notas de R$ 100:", nota100);
    console.log("Notas de R$ 50:", nota50);
    console.log("Notas de R$ 20:", nota20);
    console.log("Notas de R$ 10:", nota10);
} else {
    console.log("O saque não pode ser realizado.");
}