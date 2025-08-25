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
exports.getMaterial_CySByEmpController = void 0;
const materiales_cys_service_1 = require("../Services/materiales_cys.service");
const getMaterial_CySByEmpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const materiales_CyS = yield (0, materiales_cys_service_1.getMaterial_CySByEmpService)(req.body.emprendimiento);
        res.json(materiales_CyS);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al obtener costo y stock de materiales' });
        throw err;
    }
});
exports.getMaterial_CySByEmpController = getMaterial_CySByEmpController;
