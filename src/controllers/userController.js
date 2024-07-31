import user from '../models/User.js';


class UserController{
    static async findUser(req, res){
        try{
            const listUser = await user.find({});
            res.status(200).json(listUser);
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição`});
        }
    }

    static async userRegister(req, res){
        try{
            const novoUser = await user.create(req.body); //utiliza métodos do mongoose para criação. O parametro é passado na requisição

            res.status(201).json( {message: "Criado com sucesso", user: novoUser});
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar Usuário` });
        }
    }

    static async findUserById(req,res){
        try{
            const id = req.params.id;
            const userFind = await user.findById(id);
            res.status(200).json(userFind);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do usuário`})
        };
    }

    static async userUpdate(req,res){
        try{
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Usuário atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização`});
        }
    }

    static async userDelete(req, res){
        try{
            await user.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Usuário removido"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - erro ao remover`})
        }
    }
};

export default UserController;