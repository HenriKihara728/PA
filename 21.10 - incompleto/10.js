const livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, emprestado: false },
    { id: 2, titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881, emprestado: false },
    { id: 3, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, emprestado: false },
  ];
  
  const usuarios = [
    { id: 1, nome: "Carlos", email: "carlos@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
  ];
  
  console.log("--- Livros disponíveis ---");
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].emprestado === false) {
      console.log(livros[i].titulo);
    }
  }
  
  const livroId = 2;
  const usuarioId = 1;

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === livroId) {
      livros[i].emprestado = true;
      for (let j = 0; j < usuarios.length; j++) {
        if (usuarios[j].id === usuarioId) {
          console.log(usuarios[j].nome + " pegou emprestado: " + livros[i].titulo);
        }
      }
    }
  }
  
  console.log("=== Livros emprestados ===");
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].emprestado === true) {
      console.log(livros[i].titulo);
    }
  }
  
  const livroIdDevolucao = 2;

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === livroIdDevolucao) {
      livros[i].emprestado = false;
      console.log("Livro devolvido: " + livros[i].titulo);
    }
  }
  
  const autorBuscado = "Machado de Assis";

  console.log("=== Livros de " + autorBuscado + " ===");

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].autor === autorBuscado) {
      console.log(livros[i].titulo + " (" + livros[i].ano + ")");
    }
  }