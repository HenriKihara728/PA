let input = require("readline-sync");

let n1 = input.questionInt("Digite um numero: ");

let multiplicando = 1;
 
console.log(`-- tabuada do ${n1} --`)     
while(multiplicando <= 10) {
    console.log(`${multiplicando} x ${n1} = ${multiplicando * n1} `)
    multiplicando = multiplicando + 1;
}
console.log("--");