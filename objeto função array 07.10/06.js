let numeros = [12, 5, 28, 9, 17];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Menor valor: ",menor);
