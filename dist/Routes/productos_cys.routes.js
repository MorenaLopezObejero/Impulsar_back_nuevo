"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_cys_controller_1 = require("../Controllers/productos_cys.controller");
const router = express_1.default.Router();
router.get('/CostoyStock', productos_cys_controller_1.getProducto_CySByEmpController);
exports.default = router;
