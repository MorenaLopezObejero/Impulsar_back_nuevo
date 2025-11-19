import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient()

export async function getEmprendimientoByID( Id: number ) {
    return await prisma.emprendimiento.findMany({
        where:{ Id },
    })
}

export async function getEmprendimientoByUsuario( usuario: string ) {
    return await prisma.emprendimiento.findMany({
        where:{ usuario },
    })
}