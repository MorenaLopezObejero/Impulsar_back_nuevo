import { error } from "console";
import {getProducto_CySByEmpService } from "../Services/productos_cys.service";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const getProducto_CySByEmpController = async (req:Request, res:Response) => {
    try {
        const ID_emprendimiento = req.Id_Emprendimiento
        if (!ID_emprendimiento) {
            return res.status(400).json({ error: 'Falta Id_emprendimiento' });
        }
        const productos_CyS = await getProducto_CySByEmpService(Number(ID_emprendimiento));
        res.json(productos_CyS);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener costo y stock de materiales'});
        throw err;
    }
};