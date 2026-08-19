#!/bin/bash

# Criar diretórios
mkdir -p devtech/projetos/site-institucional/src/css
mkdir -p devtech/projetos/site-institucional/src/js
mkdir -p devtech/projetos/site-institucional/src/img
mkdir -p devtech/projetos/site-institucional/public

mkdir -p devtech/projetos/sistema-interno/backend/src/controllers
mkdir -p devtech/projetos/sistema-interno/backend/src/models
mkdir -p devtech/projetos/sistema-interno/backend/src/routes
mkdir -p devtech/projetos/sistema-interno/frontend/src/components
mkdir -p devtech/projetos/sistema-interno/frontend/src/pages
mkdir -p devtech/projetos/sistema-interno/frontend/src/services

mkdir -p devtech/financeiro/2025
mkdir -p devtech/RH
mkdir -p devtech/docs/contratos
mkdir -p devtech/docs/manuais

# Criar arquivos
touch devtech/projetos/site-institucional/public/index.html
touch devtech/projetos/site-institucional/README.md

touch devtech/projetos/sistema-interno/backend/server.js
touch devtech/projetos/sistema-interno/frontend/index.html

touch devtech/financeiro/2025/janeiro.txt
touch devtech/financeiro/2025/fevereiro.txt
touch devtech/financeiro/2025/marco.txt
touch devtech/financeiro/relatorio-anual.txt

touch devtech/RH/funcionarios.txt
touch devtech/RH/contratacoes-2025.txt

# Inserir conteúdo nos arquivos
echo "# Site Institucional DevTech Solutions" > devtech/projetos/site-institucional/README.md

echo "<!DOCTYPE html>
<html>
<head>
    <title>DevTech Solutions</title>
</head>
<body>
    <h1>DevTech Solutions</h1>
    <p>Site institucional da empresa.</p>
</body>
</html>" > devtech/projetos/site-institucional/public/index.html

echo "// Servidor do Sistema Interno
console.log('Servidor DevTech iniciado');" > devtech/projetos/sistema-interno/backend/server.js

echo "<!DOCTYPE html>
<html>
<head>
    <title>Sistema Interno</title>
</head>
<body>
    <h1>Sistema Interno DevTech</h1>
    <p>Área interna da empresa.</p>
</body>
</html>" > devtech/projetos/sistema-interno/frontend/index.html

echo "Funcionários da DevTech Solutions" > devtech/RH/funcionarios.txt

echo "Relatório financeiro anual de 2025" > devtech/financeiro/relatorio-anual.txt

# Entrar na pasta de projetos
cd devtech/projetos

# Criar backup do sistema interno
cp -r sistema-interno sistema-interno-backup

echo "Estrutura da DevTech Solutions criada com sucesso!"
echo "Backup de sistema-interno criado com sucesso!"
