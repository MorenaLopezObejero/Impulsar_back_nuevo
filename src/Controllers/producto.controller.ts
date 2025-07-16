import { error } from "console";
import { getProductobyTipoService} from "../Services/producto.service";
import { Request, Response } from 'express';

export const getProductobyTipo = async (req:Request, res:Response) => {
    try {
        const producto = await getProductobyTipoService(req.params.Typo_emprendimientos);
        res.json(producto);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener productos'});
        throw err;
    }
};