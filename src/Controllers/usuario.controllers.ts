import { error } from "console";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { postUsuarioService, getUsuarioService} from "../Services/usuario.service";
import { Request, Response } from 'express';

export const getUsuarioController = async (req: Request, res: Response) => {
    try{
        const usuario = await getUsuarioService(req.body.email);
        res.json(usuario);
        
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

/*export const postUsuarioController =async (req:Request, res:Response) => {
    try{
        const {email, nombreUsu, contasena} = req.body;
        if(!email || !nombreUsu || !contasena) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        } 
        const emailExistente = await 
    }
}
*/

/*

export const registerAdminController = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const emailExistente = await getAdminByEmailService(email);
        
        if (emailExistente.length === 0) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newAdmin = await registerAdminService(email, name, hashedPassword)
            const token = jwt.sign({ email: newAdmin.email, institutionID: newAdmin.institutionID }, process.env.JWT_SECRET as string);
            return res.status(201).json({ message: 'Usuario registrado con éxito.', token, user: { email: newAdmin.email, name: newAdmin.name  } });
        }
        else {
            return res.status(400).json({ error: 'Este email ya se encuentra en uso' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error de db' });
        throw err;
    }
}
*/