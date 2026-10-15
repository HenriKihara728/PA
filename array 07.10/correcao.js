let input = require('readline-sync');

//Exercício 1

console.log("Exercício 1: Digite 5 nomes")
let nomes = [];

for (let i = 0; i < 5; i++) {
    nomes[i] = input.question("Nome: ", (i+i),":  ");
}

for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index])
    
}

console.log("================================")

//Exercício 2
console.log("Exercício 2: nomes com indíces.")

for (let index = 0; index < nomes.length; index++) {
    console.log("Indice " + index + ": " + nomes[index])
}

console.log("================================")

//Exercício 3
console.log("Exercício 3")

let numeros = [2,11,15,8,9,10];
let contMaiorQueDez = 0;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]>10) {
        contMaiorQueDez++
    }
}

console.log("Existem " + contMaiorQueDez + " numeros que são maior que dez no array!")

console.log("================================")

//Exercício 4
console.log("Exercício 4 - soma e média")

let notas = [10,8,5,6.9,8,9];

let somaNotas = 0;
for (let posicao = 0; posicao < notas.length; posicao++) {
    somaNotas=somaNotas + notas[posicao];
}

let media = somaNotas/notas.length;

console.log("Soma = ", somaNotas);
console.log("Media = ", media.toFixed(2));

console.log("================================")

//Exercício 5
console.log("Exercício 5 - Encontrando o maior valor ")

let numerosMaiores = [8,10,25,1,100];
let maiorValor = numerosMaiores[0];

for (let i = 1; i < numerosMaiores.length; i++) {
    if(numerosMaiores[i] > maiorValor) {
        maiorValor = numerosMaiores[i];
    }
}

console.log("O maior número é: ", maiorValor)

console.log("================================")

//Exercício 6
console.log("Exercício 6 - Encontre o menor valor")

let numerosMenores = [0,10,25,1,100];
let menorValor = numerosMenores[0];

for (let i = 1; i < numerosMenores.length; i++) {
    if(numerosMenores[i] < menorValor) {
        menorValor = numerosMenores[i];
    }
}

console.log("O menor número é: ", menorValor)

console.log("================================")

//Exercício 7
console.log("Exercício 7 - Procurando um nome")

let nomes2 = ["Felipe, Carlos, Leonardo, Paulo, Gabriel"];
let nomeProcurado = "Gabriel";
let encontrado = 0;
let posicaoArray = false

for (let i = 0; i < nomes2.length; i++) {
    if(nomes2[i] === nomeProcurado) {
        nomes2 = nomeProcurado[i];
    }
}

if(encontrado === 1) {
    console.log("O nome " + nomeProcurado + " foi encontrado no array")
} else {
    console.log("O nome " + nomeProcurado + " não está no array")
}

console.log("================================")

//Exercício 8
console.log("Exercício 8 - Separando pares e impares")

let numeros3 = [1,2,3,4,5,6,7,8];
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log (`QTD.PARES: ${pares}\n QTD.IMPARES: ${impares}`)

console.log("================================")

//Exercício 9
console.log("Exercício 9 - Copiando um Array")

let numeroCopias = [10,5,4,3,2];
let copiadora = [];

for (let i = 0; i < numeroCopias.length; i++) {
    copiadora[i] = numeroCopias[i]
}

console.log("Original", numeroCopias)
console.log("Cópia", copiadora)

console.log("================================")

//Exercício 10
console.log("Exercício 10 - Invertendo a ordem")

let numeros4 = [10,20,30,40,50];
let invertido = [];

for (let i = 0; i < numeros4.length; i++) {
    invertido[i] = numeros4[numeros4.length - 1 - i];
}

console.log("Array original: ", numeros4)
console.log("Array inverso: ", invertido)

console.log("================================")

//Exercício 11
console.log("Exercício 11 - Alterando valores")

let numeros5 = [10,20,30,40,50];
let dobro = [];

for (let i = 0; i < numeros5.length; i++) {
    dobro[i] = numeros5[i] * 2;
}

console.log("Array normal: ", numeros5)
console.log("Array dobro: ", dobro)

console.log("================================")

//Exercício 12
console.log("Exercício 12 - Removendo um valor")

let numeros6 = [10,55,30,60,20];
let numeroRemoverPosicao = 2;
let numeroSemValor = [];
let destino = 0;

for (let i = 0; i < numeros6.length; i++) {
    if(i!==numeroRemoverPosicao) {
        numeroSemValor[destino]=numeros6[i];
        destino++;
    }
}

console.log("Array anterior: ", numeros6)
console.log("Array atual: ", numeroSemValor)

console.log("================================")