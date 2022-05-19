const usuarioModel = require('../models/usuarioModel');

class UsuarioController {

    async create(req, res){
        const max = await usuarioModel.findOne({}).sort({id: -1});
        let usuario = req.body;
        usuario.id = max == null ? 1 : max.id + 1;
        const resultado = await usuarioModel.create(usuario);
        res.status(201).json(resultado);
    }

    async read(req, res){
        const resultado = await usuarioModel.find({});
        res.status(200).json(resultado);
    }

    async readForId(req, res){
        const id = req.params.usuarioId;
        const resultado = await usuarioModel.findOne({'id': id});
        res.status(200).json(resultado);
    }

    async update(req, res){
        const id = req.params.usuarioId;
        const _id = String((await usuarioModel.findOne({'id': id}))._id);
        let usuario = req.body;
        await usuarioModel.findByIdAndUpdate(String(_id), usuario);
        res.status(200).send();
    }

    async delete(req, res){
        const id = req.params.usuarioId;
        const _id = String((await usuarioModel.findOne({'id': id}))._id);
        await usuarioModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new UsuarioController();