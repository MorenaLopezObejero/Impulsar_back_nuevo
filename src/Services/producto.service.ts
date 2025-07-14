import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProductoService = async (Typo_emprendimientos: string) => {
    return await prisma.producto.findMany({
        where: {Typo_emprendimientos}
    });
};