const express = require("express");
const morgan = require("morgan");
const produtos = require("./produtos.json");

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.urlencoded({ extended: true }));

function get(req, res) {
    res.send("Servidor express (get)");
}

function getProdutos(req, res) {
    res.json(produtos);
}

servidor.get("/", get);
servidor.get("/produtos", getProdutos);

function log() {
    console.log("Servidor express rodando na porta 3000");
}

servidor.listen(3000, log);

require("./db/mongodb");
const produtoModel = require("./models/produtoModel");

const produto = {
    nome: "Smartphone",
    desc: "Google Pixel",
    preco: 4000
}

async function gravarDados() {
    const resultado = await produtoModel.create(produto);
    console.log(resultado);
}

gravarDados();
