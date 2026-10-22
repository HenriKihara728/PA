// ex01
let livro = {
    titulo: "Neste livro a bruxas não vai para a fogueira",
    autor: "Amanda Lovelace",
    anoPublicação: 2018,
    disponivel: true,
};


console.log('- livros disponiveis -')
console.log('.  livro: ' + livro.titulo)
console.log('.  autor: ' + livro.autor)
console.log('.  ano: ' + livro.autor)
console.log('.  disponivel: ')
if(livro.disponivel == true){
    console.log("sim")
} else {
    console.log("não")
}