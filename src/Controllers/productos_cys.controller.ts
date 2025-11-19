import { error } from "console";
import {getProducto_CySByEmpService } from "../Services/productos_cys.service";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const getProducto_CySByEmpController = async (req:Request, res:Response) => {
    try {
        const productos_CyS = await getProducto_CySByEmpService(req.body.emprendimiento);
        res.json(productos_CyS);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener costo y stock de materiales'});
        throw err;
    }
};