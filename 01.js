let input = require('readline-sync');

let nome = input.question("Insira o nome do aluno: ");
let n1 = input.questionInt("Insira a primeira nota: ");
let n2 = input.questionInt("Insira a segunda nota: ");
let n3 = input.questionInt("Insira a terceira nota: ");

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    console.log("Nome:", nome, "| Notas:", n1, n2, n3, "| Média:", media, "| Situação final: APROVADO(A)");
} else if (media >= 5) {
    console.log("Nome:", nome, "| Notas:", n1, n2, n3, "| Média:", media, "| Situação final: RECUPERAÇÃO");
} else {
    console.log("Nome:", nome, "| Notas:", n1, n2, n3, "| Média:", media, "| Situação final: REPROVADO(A)");
}