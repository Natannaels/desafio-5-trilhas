import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String}
}, {versionKey: false});


const user = mongoose.model('user', userSchema);

export default user;