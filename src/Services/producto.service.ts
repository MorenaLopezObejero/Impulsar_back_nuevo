import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient()


export const getProductobyTipoService = async (tipo: string) => {
    return await prisma.productos.findMany({
        where: { tipo }
    });
};

export async function getMaterialesbyProducto(nombreProducto: string) {
    const relaciones = await prisma.prod_Mat.findMany({
        where: {
            producto: nombreProducto,
        },
        include: {
            rela_MyP: true,
        },
    });

    return relaciones
}

/* Creo que funciona, no la llegue a probar
export const getMaterialesvyProducto = async (nombreProducto: string) => {
    return await prisma.prod_Mat.findMany({
        where: {producto: nombreProducto},
        include: {rela_MyP: true},
    });
}
*/

/* No sirve es para cordarme como hacer un select

export const getProductoDescPaService = async (tipo: string) => {
    return await prisma.productos.findMany({
        where: { tipo },
        select: {
            nombre: true,
            
        }
    });

} */