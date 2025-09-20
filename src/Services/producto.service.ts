import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient()


export const getProductobyTipoService = async (tipo: string) => {
    return await prisma.productos.findMany({
        where: { tipo }
    });
};

export async function getMaterialesbyProductoService(producto: string) {
    const relaciones = await prisma.prod_Mat.findMany({
        where: {
            producto,
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
export const getProductByNameService = async (nombre: string) => {
    return await prisma.productos.findUnique({
        where: {
            nombre: nombre,
        },
    });
};
export const getAllProductsForCatalogService = async () => {
    return await prisma.productos.findMany();
};