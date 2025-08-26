import express from "express";
import cors from 'cors';

// Configuración express
const app = express()
const PORT = 3000

// Middlewares
const corsOptions = {
    origin: '*', // permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // permitir métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // permitir headers
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Funca" });
});

import productoRoutes from './Routes/producto.routes';
app.use('/Producto', productoRoutes);

import usuarioRoutes from './Routes/usuario.routes';
app.use('/Usuario', usuarioRoutes);

import contactosRoutes from './Routes/contactos.routes';
app.use('/Contactos', contactosRoutes);

import materiales_CySRoutes from './Routes/materiales_cys.routes';
app.use('/Materiales_CyS', materiales_CySRoutes);

import productos_CySRoutes from './Routes/productos_cys.routes';
app.use('/Productos_CyS', productos_CySRoutes);

export default app;