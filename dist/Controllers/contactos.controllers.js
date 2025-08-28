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
exports.postContactobyUsuarioController = exports.getContactobyHostController = void 0;
const contactos_service_1 = require("../Services/contactos.service");
const getContactobyHostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactosDefault = yield (0, contactos_service_1.getContactobyHostService)("HOST");
        const contactos = yield (0, contactos_service_1.getContactobyHostService)(req.body.host);
        res.json({ contactosDefault, contactos });
    }
    catch (err) {
        res.status(500).json({ error: 'Error al obtener Contactos' });
        throw err;
    }
});
exports.getContactobyHostController = getContactobyHostController;
const postContactobyUsuarioController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactos = yield (0, contactos_service_1.postContactosByUsuarioService)(req.body.nombre, req.body.host);
        res.json(contactos);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al crear Usuario' });
        throw err;
    }
});
exports.postContactobyUsuarioController = postContactobyUsuarioController;
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
