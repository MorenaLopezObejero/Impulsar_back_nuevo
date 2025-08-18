import { error } from "console";
import { getContactobyUsuarioService} from "../Services/contactos.service";
import { Request, Response } from 'express';

export const getContactobyUsuarioController = async (req:Request, res:Response) => {
    try{
        const contactos = await getContactobyUsuarioService("HOST")
        res.json(contactos);
    } catch (err){
        res.status(500).json({error: 'Error al obtener Contactos'});
        throw err;
    }
}