import { PrismaClient } from "../generated/prisma/client.js"

const prisma = new PrismaClient()

export const getProducto_CySByEmpService = async (emprendimiento: number) => {
    return await prisma.productos_CyS.findMany({
        where: {emprendimiento},
        include: {
            rela_Prod: true,
        },
    });
};