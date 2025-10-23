import { PrismaClient } from "../generated/prisma/client.js"

const prisma = new PrismaClient()

export const getprod_matservice = async () => {
    return await prisma.prod_Mat.findMany({
        
    });
};