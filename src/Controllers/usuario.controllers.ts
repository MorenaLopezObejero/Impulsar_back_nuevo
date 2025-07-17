import { error } from "console";
import { postUsuarioService} from "../Services/usuario.service";
import { Request, Response } from 'express';

export const postUsuarioController1 = async (req:Request, res:Response) => {
    try {
        const usuario = await postUsuarioService(req.body.email, req.body.contasena, req.body.nombreUsu);
        res.json(usuario);
    } catch (err) {
        res.status(500).json({error: 'Error al crear Usuario'});
        throw err;
    }
};

/*

export const postUsuarioController = async (req:Request, res:Response) => {
    try {
        const emailExistente = await usuarioServices.getUsuarioService(email);
        if (!emailExistente){
            const usernameExistente = await userServices.getUsuarioByUsername(username);
            if(!usernameExistente){
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                const createUser = await userServices.createUsuario(email, username, hashedPassword);
                const sendEmail = await userServices.sendEmail(email);

                return res.status(201).json({ message: 'Usuario registrado con éxito. Verifica tu email'});
            }
            else {
                return res.status(401).json({ error: 'Este nombre ya se encuentra en uso' });
            }
        }
        else {
            return res.status(400).json({ error: 'Este email ya se encuentra en uso' });
        }
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al registrar usuario' });
    }
};
*/