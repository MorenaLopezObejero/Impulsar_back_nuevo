import express from "express";

// 1. IMPORT ACTUALIZADO: Trae los 3 controladores que necesitamos.
import { getProductobyTipoController, getMaterialbyProductoController, getProductByNameController } from "../Controllers/producto.controller";

const router = express.Router();

// --- Rutas originales ---
router.get('/productoFull/:Typo_emprendimiento', getProductobyTipoController);
router.get('/materialByproducto/:producto', getMaterialbyProductoController);

// 2. RUTA NUEVA: La que acabamos de agregar para buscar un producto.
router.get('/producto/:nombre', getProductByNameController);

export default router;