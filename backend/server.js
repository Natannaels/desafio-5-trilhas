//utilizar arquivo de variavel de ambiente
import 'dotenv/config';
import cors from 'cors';
//importar implementação de app
import app from './src/app.js';


app.use(cors());
//ouvinte para acessar o servidor na porta especificada
app.listen(process.env.PORT, () => {
    console.log('Servidor Escutando');
});