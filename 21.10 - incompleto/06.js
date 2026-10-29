const tarefas = [ 
    {
        id: 1,
        descricao: "lavarLouça",
        concluida: true,
        prioridade: "alta"
    },
    
    {
        id: 2,
        descricao: "lavarRoupa",
        concluida: true,
        prioridade: "alta"  
    },

    {
        id: 3,
        descricao: "varrerQuintal",
        concluida: false,
        prioridade: "média"
    },

    {
        id: 4,
        descricao: "dobrarRoupa",
        concluida: false,
        prioridade: "média"
    },

    {
        id: 5,
        descricao: "organizarLivros",
        concluida: false,
        prioridade: "baixa"
    },
    ]


console.log("Tarefas concluidas: " );

for (let i = 0; i < tarefas.length; i++) {
    if(tarefas[i].concluida === true) {
        console.log(tarefas[i].descricao)
    }
};

console.log("Tarefas com prioridade alta: ")

for (let i = 0; i < tarefas.length; i++) {
    if(tarefas[i].prioridade === "alta") {
        console.log(tarefas[i].descricao)
    }
};

let pendentes = 0;

for (let i = 0; i < tarefas.length; i++) {
    if(tarefas[i].concluida === false) {
        pendentes++
    }
};

console.log("Tarefas pendentes: ", pendentes );