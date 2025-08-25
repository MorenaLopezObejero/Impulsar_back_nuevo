import { error } from "console";
import {getMaterial_CySByEmpService } from "../Services/materiales_cys.service";
import { Request, Response } from 'express';

export const getMaterial_CySByEmpController = async (req:Request, res:Response) => {
    try {
        const materiales_CyS = await getMaterial_CySByEmpService(req.body.emprendimiento);
        res.json(materiales_CyS);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener costo y stock de materiales'});
        throw err;
    }
};