import  express  from "express";
import { getProductobyTipo} from "../Controllers/producto.controller";

const router = express.Router();

router.get('/productoFull/:Typo_emprendimiento', getProductobyTipo);
export default router;