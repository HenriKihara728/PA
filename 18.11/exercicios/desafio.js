let elInputPI = document.querySelector("#input");
let elBtnEnvio = document.querySelector("#botao");
let elOutputPI = document.querySelector("#output");

function calcularParOuImpar (){
    let numero = Number(elInputPI.value)
    if(numero % 2 === 0){
        elOutputPI.innerText = numero + " é par"
        elOutputPI.style.color = "red"
        
    } else{
        elOutputPI.textContent = numero + " é impar"
        elOutputPI.style.color = "blue"
    }
}

elBtnEnvio.onclick = calcularParOuImpar