import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getProducto_CySByEmpService = async (emprendimiento: number) => {
    return await prisma.productos_CyS.findMany({
        where: {emprendimiento}
    });
};