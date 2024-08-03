//Arquivo que irá conter cada rota de user
// src/routes/userRoutes.js
import express from 'express';
import UserController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routes = express.Router();

// Rota pública para registro e login
routes.post('/register', UserController.userRegister);
routes.post('/login', UserController.userLogin);

// Rota privada - precisa de autenticação
routes.get('/users', authMiddleware, UserController.findUser);
routes.get('/users/:id', authMiddleware, UserController.findUserById);
routes.put('/users/:id', authMiddleware, UserController.userUpdate);
routes.delete('/users/:id', authMiddleware, UserController.userDelete);

export default routes;

