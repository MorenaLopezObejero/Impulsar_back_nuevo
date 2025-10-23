import { error } from "console";
import {getprod_matservice} from "../Services/prod_mat.service";
import { Request, Response } from 'express';

export const getprod_matcontroller = async (req:Request, res:Response) => {
    try {
        const prod_Mat = await getprod_matservice();
        res.json(prod_Mat);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener costo y stock de materiales'});
        throw err;
    }
}; 