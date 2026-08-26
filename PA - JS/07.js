let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));

let soma = numero1 + numero2 + numero3;

if (soma > 20) {
    console.log(soma);
} else {
    console.log("A soma não é maior que 20.");
}