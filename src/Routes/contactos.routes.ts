import  express  from "express";
import {getContactobyUsuarioController } from "../Controllers/contactos.controllers";

const router = express.Router();

router.get('/contactobyPropietario', getContactobyUsuarioController);

export default router;