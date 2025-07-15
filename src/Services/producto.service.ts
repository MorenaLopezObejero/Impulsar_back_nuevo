import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient()

export const getProductoService = async (typo_emprendimiento: string) => {
    return await prisma.productos.findMany({
        where: {typo_emprendimiento}
    });
};