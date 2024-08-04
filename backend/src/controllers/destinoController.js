import destino from "../models/Destino.js";
import {atracao} from "../models/Atracao.js"

class DestinoController{
    static async findDestino(req, res) {
        try {
            const listDestino = await destino.find({});
            res.status(200).json(listDestino);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    }

    // static async destinoRegister(req, res) {
    //     const novoDestino = req.body;
    //     const {atrativos} = req.body;
    //     try {
    //         const listaAtracao = atrativos;
            
    //         res.status(201).json({ message: "Criado com sucesso", atracao: novaAtracao});
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha ao cadastrar Atração` });
    //     }
    // }

    // static async destinoRegister(req, res) {
    //     const novoDestino = req.body;
    //     try {
            
    //         const destinoCompleto = {...novoDestino, atrativos: {...atracoesExistentes}};
    //         const destinoSalvo = await destino.create(destinoCompleto);
    //         res.status(201).json(destinoSalvo);
    //     } catch (erro) {
    //         res.status(500).json({ message: `${erro.message} - falha ao cadastrar destino` });
    //     }
    // }

    static async destinoRegister(req, res) {
        const { nome, descricao, slogan, categoria, imagem, atrativos } = req.body;

        try {
            // Verificar se todas as atrações existem
            const atracoesExistentes = await atracao.find({ _id: { $in: atrativos.map(atracao => atracao._id) } });

            if (atracoesExistentes.length !== atrativos.length) {
                return res.status(400).json({ message: "Uma ou mais atrações não foram encontradas" });
            }

            // Criar novo destino
            const novoDestino = new destino({
                nome,
                descricao,
                slogan,
                categoria,
                imagem,
                atrativos: atracoesExistentes
            });

            const destinoSalvo = await novoDestino.save();
            res.status(201).json(destinoSalvo);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar destino` });
        }
    }
    
};

export default DestinoController;