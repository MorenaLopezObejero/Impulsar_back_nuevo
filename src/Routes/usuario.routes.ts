import  express  from "express";
import { postUsuarioController1, getUsuarioController} from "../Controllers/usuario.controllers";

const router = express.Router();

router.post('/CrearUsuario', postUsuarioController1);
router.get('/Iniciarsesion', getUsuarioController);

export default router;