import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient()

export async function getTypoByID( typo: string ) {
    return await prisma.typo_emprendimiento.findMany({
        where:{ typo },
    })
}