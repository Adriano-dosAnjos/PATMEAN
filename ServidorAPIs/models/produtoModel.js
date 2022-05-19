const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    
    id: Number,
    item: String,
    categoria: String,
    valor: String,
    desc: String,
    foto: String,
});

module.exports = mongoose.model('produto', produtoSchema);