import  express  from "express";
import { getProductobyTipoController, getMaterialbyProductoController} from "../Controllers/producto.controller";

const router = express.Router();

router.get('/productoFull/:Typo_emprendimiento', getProductobyTipoController);
router.get('/materialByproducto/:producto', getMaterialbyProductoController);

export default router;