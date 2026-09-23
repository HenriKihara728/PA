let tabuada = 2;
let multiplicando = 1;

while(tabuada <=10){
    console.log(`-----tabuada-${tabuada}--------`);

console.log(`######### TABUADA DO ${tabuada}##############`)
while(multiplicando <= 10){
    console.log(`${multiplicando} x ${tabuada} = ${multiplicando * tabuada} `)
    multiplicando = multiplicando + 1;
}
console.log("##############################################");

tabuada = tabuada + 1;

}