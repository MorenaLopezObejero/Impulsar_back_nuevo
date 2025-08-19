import { error } from "console";
import { getContactobyHostService} from "../Services/contactos.service";
import { Request, Response } from 'express';

export const getContactobyHostController = async (req:Request, res:Response) => {
    try{
        const contactosDefault = await getContactobyHostService("HOST")
        const contactos = await getContactobyHostService(req.body.host)
        res.json({contactosDefault, contactos})
    } catch (err){
        res.status(500).json({error: 'Error al obtener Contactos'});
        throw err;
    }
}