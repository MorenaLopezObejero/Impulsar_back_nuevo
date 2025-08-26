import  express  from "express";
import {getProducto_CySByEmpController } from "../Controllers/productos_cys.controller";

const router = express.Router();

router.get('/CostoyStock', getProducto_CySByEmpController);

export default router;