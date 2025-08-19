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

/*
export async function getContactobyUsuario(host: string){
    const resultado = await prisma.Contactos.findMany({
        
    })
    return resultado
*/