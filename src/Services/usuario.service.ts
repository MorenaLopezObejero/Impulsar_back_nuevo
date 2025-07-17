import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const getUsuarioService = async (email: string) => {
    return await prisma.usuario.findUnique({
        where: { email }
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
