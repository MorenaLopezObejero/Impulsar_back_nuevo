import  express  from "express";
import {getContactobyHostController, postContactobyUsuarioController } from "../Controllers/contactos.controllers";
import authMidd from '../Middleware/auth';


const router = express.Router();

router.get('/contactobyPropietario', authMidd.verifyToken, getContactobyHostController);
router.post('/contactobyUsuario', authMidd.verifyToken, postContactobyUsuarioController);

export default router;