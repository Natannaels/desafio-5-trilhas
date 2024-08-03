//Arquivo que irá conter cada rota de user
import express from 'express';
import UserController from "../controllers/userController.js";
import { body } from 'express-validator';

const routes = express.Router();

routes.post('/register', UserController.userRegister);
routes.post('/login', UserController.userLogin); 
routes.get('/users', UserController.findUser);
routes.get('/users/:id', UserController.findUserById);
routes.put('/users/:id', UserController.userUpdate);
routes.delete('/users/:id', UserController.userDelete);

export default routes;
