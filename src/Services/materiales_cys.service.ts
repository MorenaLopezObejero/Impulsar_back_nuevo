import { PrismaClient } from "../generated/prisma/client.js"

const prisma = new PrismaClient()

export const getMaterial_CySByEmpService = async (emprendimiento: number) => {
    return await prisma.materiales_CyS.findMany({
        where: {emprendimiento},
        include: {
            rela_Mat: true,
        },
    });
};