let input = require('readline-sync');

let nomes = ["João","Maria","Lucas","Guilherme","Vitória"];
let Indice = 0

for (let i = 0; i < nomes.length; i++) {
    console.log("Indice", Indice++, nomes[i]);
}