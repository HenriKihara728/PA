const aluno = { 
    nome: "Ana", 
    idade: 20, 
    curso: "Engenharia", 
    ativo: true 
};

aluno.idade = 21;
aluno.curso = "Ciência da Computação";
aluno.matricula = 2024001;
delete aluno.ativo;

console.log(aluno);