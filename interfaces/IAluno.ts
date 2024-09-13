
export interface Pessoa{
    name: string;
    sobrenome : string;
    idade : number;
}

export interface Aluno extends Pessoa{
    turma : string;
    matricula : string;
}

export type Group = {

}
