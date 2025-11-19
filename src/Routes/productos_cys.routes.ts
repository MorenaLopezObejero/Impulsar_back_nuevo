import  express  from "express";
import {getProducto_CySByEmpController } from "../Controllers/productos_cys.controller";
import authMidd from "../Middleware/auth";

const router = express.Router();

router.get('/CostoyStock', authMidd.verifyToken, getProducto_CySByEmpController);

export default router;