import  express  from "express";
import {getContactobyHostController, postContactobyUsuarioController } from "../Controllers/contactos.controllers";
import authMidd from '../Middleware/auth';


const router = express.Router();

router.get('/contactobyPropietario', getContactobyHostController);
router.post('/contactobyUsuario', postContactobyUsuarioController);

export default router;