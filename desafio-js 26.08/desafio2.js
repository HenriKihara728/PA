let input = require("readline-sync");

let dividendo = input.questionInt=("Digite um numero para agir como dividendo: ");
let divisor = input.questionInt=("Digite outro numero para agir como divisor: ");

let quociente = dividendo / divisor;
let quocienteint = parseInt(quociente);

let resto = (quociente - quocienteint)*divisor

console.log(resto);