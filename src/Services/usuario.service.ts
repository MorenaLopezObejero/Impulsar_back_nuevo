import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient()

export const getUsuarioService = async (email: string) => {
    return await prisma.usuario.findMany({
        where: { email}
    });
};


export const postUsuarioService = async (email: string, contasena: string, nombreUsu: string) => {
    return await prisma.usuario.create({
        data: {
            email, 
            contasena, 
            nombreUsu
        }
    }) 
}
