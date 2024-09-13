// 1 - Importar o Express
// 2 - Instanciar o Express
// 3 - Importar o mongoose
// 4 - Conectar ao banco
// 5 - Criar as rotas
// 6 - Inicializar o servidor

import express, { Express } from "express";
import mongoose from "mongoose";
import userController from "./controllers/user.controller";
import loggerMiddleware from "./middlewares/logger.middleware";
import AlunoController from "./controllers/Aluno.controller"

const app: Express = express();
const port: number = 3003;

// mongoose.connect("mongodb+srv://root:root@cluster0.dcfek.mongodb.net/?retryWrites=true&w=majority",
//     { dbName: "revisao_prefeitura" }
// );
mongoose.connect("mongodb+srv://millesmaria:368368dani@cluster0.px3he.mongodb.net/",
    { dbName: "qualiti" }
);

app.use(express.json());
app.use(loggerMiddleware);

app.use(userController);
app.use(AlunoController)
app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
});