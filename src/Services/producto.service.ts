import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProductoService = async () => {
    return await prisma.producto.findMany();
};