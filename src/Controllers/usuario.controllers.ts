import { error } from "console";
import { postUsuarioService} from "../Services/usuario.service";
import { Request, Response } from 'express';

export const postUsuarioController = async (req:Request, res:Response) => {
    try {
        const usuario = await postUsuarioService(req.body.email, req.body.contasena, req.body.nombreUsu);
        res.json(usuario);
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
};