import  express  from "express";
import { postUsuarioController} from "../Controllers/usuario.controllers";

const router = express.Router();

router.post('/UsuarioCrea/:email', postUsuarioController);
export default router;