import  express  from "express";
import {getContactobyHostController } from "../Controllers/contactos.controllers";

const router = express.Router();

router.get('/contactobyPropietario', getContactobyHostController);

export default router;