import { error } from "console";
import { getContactobyHostService, postContactosByUsuarioService} from "../Services/contactos.service";
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

export const postContactobyUsuarioController = async (req: Request, res:Response) => {
    try{
        const contactos = await postContactosByUsuarioService(req.body.nombre, req.body.host);
        res.json(contactos);
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
}

/*export const postUsuarioController1 = async (req:Request, res:Response) => {
    try {
        const usuario = await postUsuarioService(req.body.email, req.body.contasena, req.body.nombreUsu);
        res.json(usuario);
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
};
*/