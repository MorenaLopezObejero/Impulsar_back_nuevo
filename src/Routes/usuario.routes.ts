import  express  from "express";
import { postUsuarioController1, getUsuarioController} from "../Controllers/usuario.controllers";
import authMidd from '../Middleware/auth';

const router = express.Router();

router.post('/CrearUsuario', postUsuarioController1);
router.get('/Iniciarsesion', getUsuarioController);

export default router;