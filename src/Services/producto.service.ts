import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient()


export const getProductobyTipoService = async (tipo: string) => {
    return await prisma.productos.findMany({
        where: { tipo }
    });
};

/* No sirve es para cordarme como hacer un select

export const getProductoDescPaService = async (tipo: string) => {
    return await prisma.productos.findMany({
        where: { tipo },
        select: {
            nombre: true,
            
        }
    });

} */