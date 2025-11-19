import  express  from "express";
import {getMaterial_CySByEmpController } from "../Controllers/materiales_cys.controller";
import authMidd from "../Middleware/auth";

const router = express.Router();

router.get('/CostoyStock', authMidd.verifyToken, getMaterial_CySByEmpController);

export default router;