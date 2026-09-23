let input = require('readline-sync');

let contador = 0;
let n = 1;

while (n <= 5) {
    let numero = input.questionInt("Insira um número inteiro: ");
    let resto = numero;

    while (resto > 1) {
        resto = resto - 2;
    }

    if (resto == 0) {
        contador = contador + 1;
    }

    n = n + 1;
}

console.log("Quantidade de números pares:", contador);