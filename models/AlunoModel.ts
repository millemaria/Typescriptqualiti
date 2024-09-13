import { Schema, Document, model } from "mongoose";

interface IALUNO extends Document {
    nome: string;
    sobrenome: string;
    idade: number;
    turma: string;
    matricula: string;
    createdAt: Date;
    updatedAt: Date;
}

const AlunoSchema = new Schema<IALUNO>({
    nome: { type: String },
    sobrenome: { type: String, required: true },
    idade: { type: Number, required: true },
    turma: { type: String, required: true },
    matricula: { type: String, required: true },
    // createdAt: { type: Date, default: new Date() }
    // createdAt: { type: Date, default: Date.now } 
}, { timestamps: true }); // criar automaticamente createdAt e updateAt 

export const AlunoModel = model<IALUNO>("User", AlunoSchema);