import  express  from "express";
import { postUsuarioController1} from "../Controllers/usuario.controllers";

const router = express.Router();

router.post('/CrearUsuario', postUsuarioController1);
export default router;