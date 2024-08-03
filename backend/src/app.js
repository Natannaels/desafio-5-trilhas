import express from 'express';
import dbConnect from './config/dbConfig.js';
import routes from './routes/index.js';
import authRoutes from './routes/authRoutes.js';


const conexao = await dbConnect(); //funções assíncronas precisam de um await

conexao.on('error', (erro) => {
     console.error('Erro de conexão', erro);
});

conexao.once('open', () => {
    console.log('Conexão com o banco feita com sucesso');
});

const app = express();

routes(app);

export default app;

/*
app.get('/', (req, res) => res.send("Hello World"));

app.listen(3000);
*/