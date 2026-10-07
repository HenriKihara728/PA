let input = require('readline-sync');

let notas = [6,8,4,5,10];
let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i]/notas.length
}   
 console.log("Média: ", soma)