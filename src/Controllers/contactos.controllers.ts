import { error } from "console";
import { getContactobyHostService, postContactosByUsuarioService} from "../Services/contactos.service";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export const getContactobyHostController = async (req:Request, res:Response) => {
    try{
        const email = req.email;
        if (!email) {
            return res.status(400).json({ error: 'Falta email' });
        }
        const contactosDefault = await getContactobyHostService("HOST")
        const contactos = await getContactobyHostService(email)
        
        return res.status(200).json({ user: contactos[0], contactosDefault }); 

    } catch (err){
        res.status(500).json({error: 'Error al obtener Contactos'});
        throw err;
    }
}

export const postContactobyUsuarioController = async (req: Request, res:Response) => {
    try{
        const email = req.email;
        if (!email) {
            return res.status(400).json({ error: 'Falta email' });
        }
        const contactos = await postContactosByUsuarioService(req.body.nombre, email);
        res.json(contactos);
    } catch (err) {
        res.status(500).json({error: 'Error al crear Contacto'});
        throw err;
    }
}