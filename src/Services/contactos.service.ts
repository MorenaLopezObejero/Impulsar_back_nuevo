import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getContactobyHostService(host:string) {
    return await prisma.contactos.findMany({
        where:{host},
        include:{
            propietario: true
        }
    })
}

export const postContactosByUsuarioService = async (nombre: string, host:string) => {
    return await prisma.contactos.create({
        data: {
            nombre,
            host
        }
    })
}

/*
export const postUsuarioService = async (email: string, contasena: string, nombreUsu: string) => {
    return await prisma.usuario.create({
        data: {
            email, 
            contasena, 
            nombreUsu
        }
    }) 
}
*/