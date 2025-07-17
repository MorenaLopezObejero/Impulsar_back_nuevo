"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controllers_1 = require("../Controllers/usuario.controllers");
const router = express_1.default.Router();
router.post('/CrearUsuario', usuario_controllers_1.postUsuarioController1);
exports.default = router;
