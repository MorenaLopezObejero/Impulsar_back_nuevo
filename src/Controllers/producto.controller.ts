import { error } from "console";
import { getProductobyTipoService, getMaterialesbyProductoService} from "../Services/producto.service";
import { Request, Response } from 'express';

export const getProductobyTipoController = async (req:Request, res:Response) => {
    try {
        const producto = await getProductobyTipoService(req.params.Typo_emprendimiento);
        res.json(producto);
    } // --- CÓDIGO CORREGIDO ---
catch (err) {
    console.error("--- ¡ERROR REAL DE PRISMA! ---", err); // Agregamos esto para ver el error en la terminal
    res.status(500).json({error: 'Error al obtener productos'});
    // Quitamos el 'throw err;' para que el servidor no se cuelgue
}
};

export const getMaterialbyProductoController = async (req: Request, res: Response) => {
    try {
        const producto = await getMaterialesbyProductoService(req.params.producto);
        res.json(producto)
    } catch (err){
        res.status(500).json({error: 'Error al obtener materiales'});
        throw err;
    }
}
