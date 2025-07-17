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
exports.postUsuarioController = void 0;
const usuario_service_1 = require("../Services/usuario.service");
const postUsuarioController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield (0, usuario_service_1.postUsuarioService)(req.params.email, req.params.contasena, req.params.nombreUsu);
        res.json(usuario);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al crear Usuario' });
        throw err;
    }
});
exports.postUsuarioController = postUsuarioController;
