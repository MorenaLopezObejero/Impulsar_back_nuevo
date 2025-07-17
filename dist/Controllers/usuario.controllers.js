"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsuarioController1 = void 0;
const usuario_service_1 = require("../Services/usuario.service");
const postUsuarioController1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield (0, usuario_service_1.postUsuarioService)(req.body.email, req.body.contasena, req.body.nombreUsu);
        res.json(usuario);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al crear Usuario' });
        throw err;
    }
});
exports.postUsuarioController1 = postUsuarioController1;
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
