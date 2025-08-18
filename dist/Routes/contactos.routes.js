"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactos_controllers_1 = require("../Controllers/contactos.controllers");
const router = express_1.default.Router();
router.get('/contactobyPropietario', contactos_controllers_1.getContactobyUsuarioController);
exports.default = router;
