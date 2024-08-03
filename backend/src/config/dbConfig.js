import mongoose from "mongoose";

//faz requisição, por isso precisa de async
async function dbConnect(){
    mongoose.connect(process.env.DB_CONNECTION_PASS);

    return mongoose.connection;
};

export default dbConnect;
