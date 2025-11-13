import { error } from "console";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { postUsuarioService, getUsuarioService} from "../Services/usuario.service";
import { Request, Response } from 'express';

export const getUsuarioController = async (req: Request, res: Response) => {
    try{
        const { email, contasena } = req.body;

        if (!email || !contasena) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const admin = await getUsuarioService(req.body.email);
        if (admin.length === 0) {
            return res.status(400).json({ error: 'Mete info' });
        }

        const usuario = await getUsuarioService(req.body.email);
        const storedPassword = usuario[0].contasena;

        //const token = jwt.sign({ email: usuario[0].email}, process.env.JWT_SECRET as string);
        //return res.status(201).json({ message: 'Usuario registrado con éxito.', token, user: { email: usuario[0].email}
        
        if (contasena !== storedPassword) {
            return res.status(400).json({ error: 'Credenciales inválidas' });
        }

        // Si la contraseña coincide, generamos el token
        const token = jwt.sign({ email: usuario[0].email}, process.env.JWT_SECRET as string);
        return res.status(201).json({ message: 'Iniciaste sesion con éxito.', token, user: { email: usuario[0].email}
    });
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
}

export const postUsuarioController1 = async (req:Request, res:Response) => {
    try {
        const usuario = await postUsuarioService(req.body.email, req.body.contrasena, req.body.nombreUsu);
        const token = jwt.sign({ email: usuario.email}, process.env.JWT_SECRET as string);
        return res.status(201).json({ message: 'Usuario registrado con éxito.', token, user: { email: usuario.email} });
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
};