let input = require('readline-sync')
let n1 = input.questionInt("Digite um numero")

let mult = 1

 console.log(`tabuada`)
 while(mult <= 10){
    console.log(`${mult} x ${n1} = ${mult * n1} `)
        mult = mult + 1
 }
 console.log("----")