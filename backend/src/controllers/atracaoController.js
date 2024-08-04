import {atracao} from "../models/Atracao.js";

class AtracaoController{
    static async findAtracao(req, res){
        try{
            const listAtracao = await atracao.find({});
            res.status(200).json(listAtracao);
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição`})
        }
    }

    static async atracaoRegister(req, res) {

        try {
            const novaAtracao = await atracao.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", atracao: novaAtracao});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Atração` });
        }
    }
};

export default AtracaoController;