//Arquivo que irá conter cada rota de user
import express from 'express';
import UserController from "../controllers/userController.js";


const routes = express.Router();

routes.get("/users", UserController.findUser);
routes.get("/users/:id", UserController.findUserById);
routes.post("/users", UserController.userRegister);
routes.put("/users/:id", UserController.userUpdate);
routes.delete("/users/:id", UserController.userDelete);

export default routes;

