let notas = [7, 8, 6, 9, 10];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

let media = soma / notas.length;

console.log("Soma: ", soma);
console.log("Media: ", media);
