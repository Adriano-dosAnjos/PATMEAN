const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/ecommerce';

const db = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('open', function(){
    console.log('MongoDB está ATIVO');
});

con.on('error', function(){
    console.log('MongoDB está dando ERRO');
});

con.on('close', function(){
    console.log('MongoDB está sendo ENCERRADO');
});

module.exports = db;