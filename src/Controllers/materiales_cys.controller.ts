import { error } from "console";
import {getMaterial_CySByEmpService } from "../Services/materiales_cys.service";
import { Request, Response } from 'express';

export const getMaterial_CySByEmpController = async (req:Request, res:Response) => {
    try {
        const ID_emprendimiento = req.Id_Emprendimiento
        if (!ID_emprendimiento) {
            return res.status(400).json({ error: 'Falta Id_emprendimiento' });
        }
        const materiales_CyS = await getMaterial_CySByEmpService(Number(ID_emprendimiento));
        res.json(materiales_CyS);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener costo y stock de materiales'});
        throw err;
    }
};