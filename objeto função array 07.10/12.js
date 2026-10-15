let numeros = [10, 55, 30, 60, 20];
let removerPosicao = 1;
let numeroSemValor = [];
let destino = 0;

for (let i = 0; i < numeros.length; i++) {
    if(i!==removerPosicao) {
        numeroSemValor[destino] = numeros[i];
        destino++;
    }
}

console.log("Array antigo: ", numeros)
console.log("Array : ", numeroSemValor)