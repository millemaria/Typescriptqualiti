export interface CreateUserDTO {
    name?: string;
    email: string;
    password: string;
}

export interface FindUserByEmailDTO {
    email: string;
}