//Arquivo que irá conter a rota do servidor

import express from 'express';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send('Rota funcionando'));
    app.use(express.json());  
};

export default routes;