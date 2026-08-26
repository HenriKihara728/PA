let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;

if (soma < 20) {
    console.log(numero1 * 10);
    console.log(numero2 * 10);
} else {
    console.log("A soma não é menor que 20.");
}