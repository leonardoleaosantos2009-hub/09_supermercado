// Importa o Express (Framwork para Servidores da Web).
const express = require("express");

// Importa as funções para manipular banco de dados.
const { gravarProdutos, lerProdutos } = require("./database");

// Cria a aplicação da web.
const app = express();

// Define a porta onde o servidor da web vai funcionar.
const porta = 3000;

// Permite que o Express entenda requisições de HTTP via JSON.
app.use(express.json());

// Cria a rota padrão.
app.get("/", (req, res) => {

    res.send("Servidor da web do supermercado no ar!");
});

// Cria a rota que cadastra produtos.
app.post("/produtos", (req, res) => {

    // Lê os produtos já gravados no banco de dados.
    let produtos = lerProdutos();

    // Recupera os dados enviados para cadastrado pelo frontend.
    let { nome, preco, quantidade } = req.body;

    // Verifica se todos os dados foram informados.
    if (!nome || preco === undefined || quantidade === undefined) {

        return res.status(400).json({ erro: "Informe os campos obrigatórios!" });
    }

    // Calcula o ID do próximo produto.
    let proximoID = produtos.length > 0 ? Math.max(...produtos.map((item) => item.id)) + 1 : 1;

    // Cria um novo produto.
    let novoProduto = {
        id: proximoID,
        nome,
        preco,
        quantidade
    };

    // Adiciona o novo produto à lista de produtos.
    produtos.push(novoProduto);

    // Grava a lista de produtos no JSON.
    gravarProdutos(produtos);

    // Informa que o produto foi cadastrado com sucesso.
    res.status(201).json({ sucesso: "Produto cadastrado com sucesso!" });
});

    // Cria a rota que exibe todos os produtos.
    app.get("/produtos", (req, res) => {

    // Lê os produtos já gravados no banco de dados.
    let produtos = lerProdutos();

    // Retorna os produtos do JSON
    res.json(produtos);
});

    // Cria a rota que exibe um produto específico.
    app.get("/produtos/:id", (req, res) => {

        // Lê os produtos gravados no JSON
        let produtos = lerProdutos();

        // Pega o ID que veio na URL.
        let id = Number(req.params.id);

        // Procura na lista de produtos aquele com o ID recebido.
        let produto = produtos.find((item) => item.id === id);

        // Se o produto não existir, retorna um erro.
        if (!produto) {

            return res.status(404).json({ erro: "Produto não encontrado!" });
        }

        // Retorna o produto encontrado.
        res.json(produto);
    });

    // Cria a rota que atualiza um produto.
    app.put("/produtos/:id", (req, res) => {    

        // Lê os produtos gravados no JSON
        let produtos = lerProdutos();

        // Pega o ID que veio na URL.
        let id = Number(req.params.id);
        
        // Procura na lista de produtos aquele com o ID recebido.
        let indice = produtos.findIndex((item) => item.id === id);

        // Verifica se o produto foi encontrado.
        if (indice === -1) {

            return res.status(404).json({ erro: "Produto não encontrado..." });
        }

        //Pega os novos dados enviados na requisição.
        let { nome, preco, quantidade } = req.body;

        // Atualiza os dados do produto.
        produtos[indice] = {
            id,
            nome: nome ?? produtos[indice].nome,
            preco: preco ?? produtos[indice].preco,
            quantidade: quantidade ?? produtos[indice].quantidade
        };

        // Grava os dados atualizado na lista de produtos.
        gravarProdutos(produtos);

        // Retorna o produto atualizado.
        res.json(produtos[indice]);
  });
  
    // Cria a rota que exclui um produto.
    app.delete("/produtos/:id", (req, res) => {

        // Lê os produtos gravados no JSON
        let produtos = lerProdutos();

        // Pega o ID que veio na URL.
        let id = Number(req.params.id);

        // Procura na lista de produtos aquele com o ID recebido.
        let indice = produtos.findIndex((item) => item.id === id);

        // Verifica se o produto foi encontrado.
        if (indice === -1) {

            return res.status(404).json({ erro: "Produto não encontrado..." });
        }

        // Remove o produto da lista.
        let [produtoRemovido] = produtos.splice(indice, 1);

        // Grava a lista de produtos já atualizada.
        gravarProdutos(produtos);

        // Informa que o produto foi removido com sucesso.
        res.status(201).json({ sucesso: "Produto removido com sucesso!" });
    });

// Colocar o servidor da web no ar.
app.listen(porta, () => {

    console.log(`Servidor da web rodando em http://localhost:${porta}`);
});