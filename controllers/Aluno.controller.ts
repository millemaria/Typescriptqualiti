import { Router, Request, Response } from "express"
import { Aluno } from "../models/AlunoModel"
import { AlunoModel } from "../models/AlunoModel";

const router = Router();

router.post("/ualunos", async (req: Request, res: Response) => {
    console.log("/users controller")
    const novoAluno: Aluno = req.body;
    const AlunoCriado = await AlunoModel.create(novoAluno);
    if (!AlunoCriado) res.status(400).send({ error: "Erro ao criar Aluno." });
    else res.send({ AlunoCriado });
});


export default router;