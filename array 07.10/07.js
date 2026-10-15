let nomes = ["Ana", "João", "Maria", "Pedro", "Lucas"];
let procurar = "Maria";
let encontrado = 0;

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === procurar) {
        encontrado = 1;
    }
}

if (encontrado === 1) {
    console.log("Nome encontrado!");
} else {
    console.log("Nome não encontrado!");
}