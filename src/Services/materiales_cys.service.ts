import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getMaterial_CySByEmpService = async (emprendimiento: number) => {
    return await prisma.materiales_CyS.findMany({
        where: {emprendimiento}
    });
};