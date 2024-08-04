import express from 'express';
import DestinoController from '../controllers/destinoController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routes = express.Router();


routes.get("/destino", authMiddleware, DestinoController.findDestino);
routes.post("/destino", authMiddleware, DestinoController.destinoRegister);

export default routes;

