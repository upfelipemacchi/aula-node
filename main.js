const express = require("express");
const morgan = require("morgan");

const produtos = require("./produtos.json");

const servidor = express();
servidor.use(morgan("dev"));
servidor.use(express.urlencoded({ "extended": true }));
servidor.use(express.json());

const get = (req, res) => res.send("Servidor Express (GET)");

const getProdutos = (req, res) => res.json(produtos);

servidor.get("/", get);
servidor.get("/produtos", getProdutosclear);

const log = () => console.log("Servidor Express rodando na porta 3000");

servidor.listen(3000, log);
