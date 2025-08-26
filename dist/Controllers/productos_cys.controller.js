"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducto_CySByEmpController = void 0;
const productos_cys_service_1 = require("../Services/productos_cys.service");
const getProducto_CySByEmpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos_CyS = yield (0, productos_cys_service_1.getProducto_CySByEmpService)(req.body.emprendimiento);
        res.json(productos_CyS);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al obtener costo y stock de materiales' });
        throw err;
    }
});
exports.getProducto_CySByEmpController = getProducto_CySByEmpController;
