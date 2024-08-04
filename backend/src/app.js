import express from 'express';
import dbConnect from './config/dbConfig.js';
import routes from './routes/index.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'; // Adicionando cors para permitir requisições entre origens diferentes

const conexao = await dbConnect(); // funções assíncronas precisam de um await

conexao.on('error', (erro) => {
    console.error('Erro de conexão', erro);
});

conexao.once('open', () => {
    console.log('Conexão com o banco feita com sucesso');
});

const app = express();

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Habilitar CORS
app.use(cors());

// Middleware para analisar JSON
app.use(express.json());

// Roteamento
routes(app);

export default app;
