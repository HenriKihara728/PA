let input = require('readline-sync')

let n1 = input.questionInt("insira um numero: ");

while (n1 <= 20){
    n1 = input.questionInt("insira um número maior que 20: ");

}

while (n1 >= 1){
    console.log(n1);
    n1--;
}