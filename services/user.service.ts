import { CreateUserDTO, FindUserByEmailDTO } from "../dtos/user.dto";
import UserRepository from "../repositories/user.repository";

export const create = async (userToCreate: CreateUserDTO) => {
    console.log("create user service")
    if (!userToCreate?.email || !userToCreate?.password) {
        return false;
    }
    return await UserRepository.create(userToCreate);
}

export const findByEmail = async (userToFind: FindUserByEmailDTO) => {
    if (!userToFind?.email) return false;
    return await UserRepository.findByEmail(userToFind);
}

export default { create, findByEmail }