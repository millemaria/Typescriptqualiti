import { Router, Request, Response } from "express"
import { CreateUserDTO, FindUserByEmailDTO } from "../dtos/user.dto";
import UserService from "../services/user.service";

const router = Router();

router.post("/users", async (req: Request, res: Response) => {
    console.log("/users controller")
    const userToCreate: CreateUserDTO = req.body;
    const createdUser = await UserService.create(userToCreate);
    if (!createdUser) res.status(400).send({ error: "Erro ao criar usuário." });
    else res.send({ createdUser });
});

router.post("/find_user_by_email", async (req: Request, res: Response) => {
    const userToFind: FindUserByEmailDTO = req.body;
    const user = await UserService.findByEmail(userToFind);
    if (!user) res.status(400).send({ error: "Erro ao pesquisar usuário por e-mail." });
    else res.send({ user });
});

export default router;