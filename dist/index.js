"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Configuración express
const app = (0, express_1.default)();
const PORT = 3000;
// Middlewares
const corsOptions = {
    origin: '*', // permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // permitir métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // permitir headers
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Funca" });
});
const producto_routes_1 = __importDefault(require("./Routes/producto.routes"));
app.use('/Producto', producto_routes_1.default);
const usuario_routes_1 = __importDefault(require("./Routes/usuario.routes"));
app.use('/Usuario', usuario_routes_1.default);
const contactos_routes_1 = __importDefault(require("./Routes/contactos.routes"));
app.use('/Contactos', contactos_routes_1.default);
const materiales_cys_routes_1 = __importDefault(require("./Routes/materiales_cys.routes"));
app.use('/Materiales_CyS', materiales_cys_routes_1.default);
const productos_cys_routes_1 = __importDefault(require("./Routes/productos_cys.routes"));
app.use('/Productos_CyS', productos_cys_routes_1.default);
exports.default = app;
