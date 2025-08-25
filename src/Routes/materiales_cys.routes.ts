import  express  from "express";
import {getMaterial_CySByEmpController } from "../Controllers/materiales_cys.controller";

const router = express.Router();

router.get('/CostoyStock', getMaterial_CySByEmpController);

export default router;