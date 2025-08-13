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
exports.getProductobyTipoService = void 0;
exports.getMaterialesbyProductoService = getMaterialesbyProductoService;
const client_js_1 = require("../generated/prisma/client.js");
const prisma = new client_js_1.PrismaClient();
const getProductobyTipoService = (tipo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.productos.findMany({
        where: { tipo }
    });
});
exports.getProductobyTipoService = getProductobyTipoService;
function getMaterialesbyProductoService(producto) {
    return __awaiter(this, void 0, void 0, function* () {
        const relaciones = yield prisma.prod_Mat.findMany({
            where: {
                producto,
            },
            include: {
                rela_MyP: true,
            },
        });
        return relaciones;
    });
}
/* Creo que funciona, no la llegue a probar
export const getMaterialesvyProducto = async (nombreProducto: string) => {
    return await prisma.prod_Mat.findMany({
        where: {producto: nombreProducto},
        include: {rela_MyP: true},
    });
}
*/
/* No sirve es para cordarme como hacer un select

export const getProductoDescPaService = async (tipo: string) => {
    return await prisma.productos.findMany({
        where: { tipo },
        select: {
            nombre: true,
            
        }
    });

} */ 
