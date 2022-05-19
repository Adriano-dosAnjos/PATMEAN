const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    
    id: Number,
    nome: String,
    email: String,
    tel: String,
    cidade: String,
    uf: String,
});

module.exports = mongoose.model('usuario',usuarioSchema);
