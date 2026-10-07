let input = require('readline-sync');

let numeros = [1,2,5,14,18,24]
let resto = 0

for (let i = 0; i < numeros.length; i++) {
     if (numeros[i] > 10) {
        resto++
     }
}

console.log("Numeros maiores que 10: ", resto );