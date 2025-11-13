import { error } from "console";
import { getContactobyHostService, postContactosByUsuarioService} from "../Services/contactos.service";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';


export const getContactobyHostController = async (req:Request, res:Response) => {
    try{
        const contactosDefault = await getContactobyHostService("HOST")
        const contactos = await getContactobyHostService(req.host)
        
        return res.status(200).json({ message: 'Login exitoso', user: contactos[0], contactosDefault }); 

    } catch (err){
        res.status(500).json({error: 'Error al obtener Contactos'});
        throw err;
    }
}

export const postContactobyUsuarioController = async (req: Request, res:Response) => {
    try{
        const contactos = await postContactosByUsuarioService(req.body.nombre, req.body.host);
        res.json(contactos);
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
}