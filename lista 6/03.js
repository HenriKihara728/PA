let input = require('readline-sync')

let num1 = input.questionInt("Digite um número:");

let num2 = input.questionInt("Digite outro numero:")

while(num1 >= num2){
  console.log(num1);
  num1 = num1 - 1;
}
while(num1 <= num2){
  console.log(num1);
  num1 = num1 + 1;
}