let input = require('readline-sync')

let n1 = input.questionInt("insira um numero: ");

while (n1 >= 5){
    n1 = input.questionInt("digite um numero menor que cinco: ");
    
}

let i = n1;

while( i <= 20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}