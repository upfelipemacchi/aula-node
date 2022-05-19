const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
    nome: String,
    desc: String,
    preco: Number,
}); 

module.exports = mongoose.model("produto", produtoSchema);
