const produtos = [ 
    {
        id: 1,
        nome: "notebook",
        preço: 3500,
        categoria: "eletronico",
        tags: ["portátil", "trabalho", "estudo"]
    },
    
    {
        id: 2,
        nome: "geladeira",
        preço: 4000,
        categoria: "eletrodomestico",
        tags: ["domestico", "cozinha", "armazenamento"]
    },

    {
        id: 3,
        nome: "mesa",
        preço: 200,
        categoria: "movel",
        tags: ["escritorio", "trabalho", "estudo"]
    },

    {
        id: 4,
        nome: "mouse",
        preço: 34,
        categoria: "eletronico",
        tags: ["escritório", "trabalho", "estudo"]
    },

    {
        id: 5,
        nome: "teclado 60%",
        preço: 130,
        categoria: "eletronico",
        tags: ["periferico", "gamer", "LED"]
    },
    ];

    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].categoria === "eletronico") {
            console.log("Nome: ", produtos[i].nome)
        }
    };

    for (let i = 0; i < produtos.length; i++) {
        if(produtos[i].preço <= 2000) {
            console.log("Preço: ", produtos[i].preço)
        }
    };

let produtoEscolhido = produtos[0];

    for (let i = 0; i < produtoEscolhido.tags.length; i++) {
        console.log("Tags: ", produtoEscolhido.tags[i])
    };

let soma = 0;

for (let i = 0; i < produtos.length; i++) {
    soma += produtos[i].preço
};

console.log("A soma dos valores: R$", soma)