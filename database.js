// Importa o módulo para trabalhar com arquivos.
const fs = require("fs");

// Importa o módulo para montar caminhos.
const path = require("path");

// Define o caminho completo até o arquivo de banco de dados.
const database = path.join(__dirname, "data", "produtos.json");

// Função que grava o conteúdo no JSON.
function gravarProdutos (produtos) {

    // Converter os dados para o formato de JSON (texto).
    const conteudo = JSON.stringify(produtos, null, 2);

    // Grava o texto no arquivo (sobrescreve o anterior).
    fs.writeFileSync(database, conteudo, "utf-8");
}

// Função que lê o conteúdo do JSON.
function lerProdutos () {

    // Lê o conteúdo do JSON como texto.
    const conteudo = fs.readFileSync(database, "utf-8");

    // Retorna o conteúdo como um vetor de objetos de JS.
    return JSON.parse(conteudo);
}

// Exporta as duas funções para uso externo.
module.exports = { gravarProdutos, lerProdutos }