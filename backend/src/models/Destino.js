import mongoose from "mongoose";
import {atracaoSchema} from "./Atracao.js";

const destinoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: String,
    descricao: String,
    slogan: String,
    categoria: String,
    imagem: String,
    atrativos: [atracaoSchema]
}, {versionKey: false});

const destino = mongoose.model('destinos', destinoSchema);

export default destino;