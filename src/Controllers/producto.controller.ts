import { error } from "console";
import { getProductoService } from "../Services/producto.service";
import { Request, Response } from 'express';

export const getProducto = async (req:Request, res:Response) => {
    try {
        const producto = await getProductoService(req.params.Typo_emprendimientos);
        res.json(producto);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener productos'});
        throw err;
    }
};