import { error } from "console";
import { getProductobyTipoService, getMaterialesbyProductoService} from "../Services/producto.service";
import { getEmprendimientoByID } from "../Services/emprendimiento.service";
import { getTypoByID } from "../Services/typo.service";
import { Request, Response } from 'express';

export const getProductobyTipoController = async (req:Request, res:Response) => {
    try {
        const ID_emprendimiento = req.Id_Emprendimiento
        if (!ID_emprendimiento) {
            return res.status(400).json({ error: 'Falta Id_emprendimiento' });
        }
        const emprendimiento = await getEmprendimientoByID (Number(ID_emprendimiento))
        const producto = await getProductobyTipoService(emprendimiento[0].tipo);
        res.json(producto);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener productos'});
        throw err;
    }
};

export const getMaterialbyProductoController = async (req: Request, res: Response) => {
    try {
        const ID_emprendimiento = req.Id_Emprendimiento
        if (!ID_emprendimiento) {
            return res.status(400).json({ error: 'Falta Id_emprendimiento' });
        }
        const emprendimiento = await getEmprendimientoByID(Number(ID_emprendimiento))
        const tipo = await getTypoByID(emprendimiento[0].tipo)
        const product = await getProductobyTipoService(emprendimiento[0].tipo)
        const producto = await getMaterialesbyProductoService(product[0].nombre);
        res.json(producto)
    } catch (err){
        res.status(500).json({error: 'Error al obtener materiales'});
        throw err;
    }
}
