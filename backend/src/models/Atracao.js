import mongoose from "mongoose";

const atracaoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: String,
    descricao: String,
    tipo: String,
    imagem: String
}, {versionKey: false});

const atracao = mongoose.model('atracaos', atracaoSchema);

export  {atracao, atracaoSchema};