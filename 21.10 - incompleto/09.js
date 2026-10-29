const carrinho = [
    { produto: "Mouse", quantidade: 2, precoUnitario: 50 },
    { produto: "Teclado", quantidade: 1, precoUnitario: 150 },
    { produto: "Monitor", quantidade: 3, precoUnitario: 800 },
  ];
  
  console.log("====== Itens do carrinho ======");

  for (let i = 0; i < carrinho.length; i++) {
    const item = carrinho[i];
    const subtotal = item.quantidade * item.precoUnitario;
    console.log(
      "Produto: " + item.produto +
      " | Qtd: " + item.quantidade +
      " | Preço unit: R$ " + item.precoUnitario +
      " | Subtotal: R$ " + subtotal
    );
  }
  
  let subtotalTotal = 0;

  for (let i = 0; i < carrinho.length; i++) {
    subtotalTotal += carrinho[i].quantidade * carrinho[i].precoUnitario;
  }
  
  console.log("Subtotal total: R$ " + subtotalTotal);
  
  const valorFinal = subtotalTotal - subtotalTotal * 0.1;

  console.log("Valor final com 10% de desconto: R$ " + valorFinal);
  
  const novoCarrinho = [];

  for (let i = 0; i < carrinho.length; i++) {
    if (i !== 1) {
      novoCarrinho.push(carrinho[i]);
    }
  }
  
  console.log("====== Carrinho atualizado ======");

  let novoTotal = 0;

  for (let i = 0; i < novoCarrinho.length; i++) {
    const item = novoCarrinho[i];
    const subtotal = item.quantidade * item.precoUnitario;
    novoTotal += subtotal;
    console.log(
      "Produto: " + item.produto +
      " | Qtd: " + item.quantidade +
      " | Preço unit: R$ " + item.precoUnitario +
      " | Subtotal: R$ " + subtotal
    );
  }

  console.log("Novo total: R$ " + novoTotal);