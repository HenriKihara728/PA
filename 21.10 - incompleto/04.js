const configuracoes = {
    tema: "escuro", 
    idioma: "pt-BR", 
    notificacoes: true, 
    autoSave: false, 
    fonte: "16px",
    chaves: ["tema", "idioma", "notificacoes", "autoSave", "fonte"]

}; 
let chaves = Object.keys(configuracoes)


for (let i = 0; i < configuracoes.chaves.length; i++) {
        console.log(configuracoes.chaves[i] + ": " + configuracoes[chaves[i]]);
}