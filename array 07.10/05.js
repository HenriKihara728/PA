let numeros = [12, 5, 28, 9, 17];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Maior valor: ", maior);
