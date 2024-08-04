//Arquivo que irá conter a rota do servidor
import express from 'express';
import user from './userRoutes.js';
import atracao from './atracaoRoutes.js';
import destino from './destinoRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send('Rota funcionando'));
    app.use(express.json(),user,atracao, destino);  //middleware utilizado para termos acesso as requisições no momento que estão sendo feitas e permite realizar alterações
    //qualquer objeto que tenha compatibilidade com json, serão convertidos
    //precisamos fazer isso, pois os dados vêm na forma de string
};

export default routes;