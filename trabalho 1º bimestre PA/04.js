let input = require('readline-sync');

console.log("1 - Aplicar 10% de desconto");
console.log("2 - Calcular o dobro");

let opcao = input.questionInt("Escolha uma opção: ");

if (opcao == 1) {
    let preco = input.questionInt("Insira o preço: ");

    let desconto = preco * 10 / 100;
    let resultado = preco - desconto;

    console.log("Preço com desconto:", resultado);

} else if (opcao == 2) {
    let numero = input.questionInt("Insira um número: ");

    let resultado = numero * 2;

    console.log("Dobro:", resultado);

} else {
    console.log("Opção inválida.");
}