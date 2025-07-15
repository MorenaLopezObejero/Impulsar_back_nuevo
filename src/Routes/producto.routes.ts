import  express  from "express";
import { getProducto } from "../Controllers/producto.controller";

const router = express.Router();

router.get('/:Typo_emprendimiento', getProducto);

export default router;