let numeros = [10, 20, 30, 40, 50];
let invertido = [];

for (let i = 0; i < numeros.length; i++) {
    invertido[i] = numeros[numeros.length - 1 - i];
}

console.log("Original: " , numeros);
console.log("Invertido: " , invertido);