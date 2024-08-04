import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import AtracaoController from '../controllers/atracaoController.js';


const routes = express.Router();

routes.get("/atracoes", authMiddleware, AtracaoController.findAtracao);
routes.post("/atracao", authMiddleware, AtracaoController.atracaoRegister);

export default routes;