import { User } from "../models/User";
import { CreateUserDTO, FindUserByEmailDTO } from "../dtos/user.dto";

export const create = async (userToCreate: CreateUserDTO) => {
    console.log("create user repository")
    return await User.create(userToCreate);
}

export const findByEmail = async (userToFind: FindUserByEmailDTO) => {
    return await User.findOne({ email: userToFind.email });
}

export default { create, findByEmail }