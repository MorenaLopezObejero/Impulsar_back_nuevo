import  express  from "express";
import { getProductobyTipoController, getMaterialbyProductoController} from "../Controllers/producto.controller";
import authMidd from "../Middleware/auth";

const router = express.Router();

router.get('/productoFull', authMidd.verifyToken, getProductobyTipoController);
router.get('/materialByproducto', authMidd.verifyToken, getMaterialbyProductoController);

export default router;