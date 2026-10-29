const alunos = [

    { nome: "Carlos", nota: 8, turma: "A" },
    { nome: "Maria", nota: 9, turma: "B" },
    { nome: "João", nota: 6, turma: "A" },
    { nome: "Ana", nota: 7, turma: "B" },
    { nome: "Pedro", nota: 5, turma: "A" },
    { nome: "Lucia", nota: 10, turma: "B" },

];

let turmaA = [];
let turmaB = [];

for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].turma === "A" ) {
        turmaA[turmaA.length] = alunos[i]
    } else if(alunos[i].turma === "B") {
        turmaB[turmaB.length] = alunos[i]
    }
};

console.log("Alunos da Turma A: ", turmaA)
console.log("Alunos da Turma B: ", turmaB)

let somaA = 0;

for (let i = 0; i < turmaA.length; i++) {
  somaA = somaA + turmaA[i].nota;
}

let somaB = 0;

for (let i = 0; i < turmaB.length; i++) {
  somaB = turmaB + turmaB[i].nota;
}

console.log("Média da turma A:", (somaA / turmaA.length));
console.log("Média da turma B:", (somaB / turmaB.length));


const aprovados = [];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    aprovados[aprovados.length] = (alunos[i].nome);
  }
}

console.log("Aprovados:", aprovados);

let melhorAluno = alunos[0];

for (let i = 1; i < alunos.length; i++) {
  if (alunos[i].nota > melhorAluno.nota) {
    melhorAluno = alunos[i];
  }
}

console.log("Aluno com maior nota:", melhorAluno.nome, "(" + melhorAluno.nota + ")");