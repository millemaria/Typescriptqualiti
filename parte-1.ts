/**
 * - Criar interfaces typescript que descrevam aluno, pessoa e 
 * turma de alunos com suas devidas propriedades. 
 * Cada interface deve ter campos obrigatórios e opcionais. 
 **/

interface Animal {
    name: string;
}
const dog: Animal = { name: "Bob" }
const cat: Animal = { name: "Alfredo" }

interface Dog extends Animal {
    breed: string; // raça
}
const dog2: Dog = { name: "Zequinha", breed: "Shitzu" }

type Animal2 = {
    name: string;
}

type Dog2 = Animal2 & {
    breed: string;
    size: string;
}

type Cat = Animal2 & {
    breed: string; // raça
    coat: string; // pelagem
    color: string
}

const typedAnimal: Animal2 = { name: "Girafales" }
const typedDog: Dog2 = { name: "Zequinha Tipado", breed: "Dog Alemão", size: "gigante" }
const typedCat: Cat = { name: "Lulu", breed: "Persa", coat: "Longa", color: "Amarelo " }

type Pet = Dog2 | Cat; // { name, breed, size, coat? }

const pet1: Pet = { name: "Floquinho", coat: "média", breed: "Persa", color: "Marrom" }
const pet2: Pet = { size: "Grande", color: "Branco", name: "Borys", breed: "teste" }
