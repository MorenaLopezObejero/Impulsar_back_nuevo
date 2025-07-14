"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const dotenv_1 = require("dotenv");
const http_1 = __importDefault(require("http"));
const consola_1 = require("consola");
(0, dotenv_1.config)();
const PORT = parseInt(process.env.PORT || '3000', 10);
const NODE_ENV = process.env.NODE_ENV || 'development';
const server = new http_1.default.Server(index_1.default);
// Handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', (error) => {
    consola_1.consola.error('Uncaught Exception:', error);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    consola_1.consola.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
// Graceful shutdown
const shutdown = () => {
    consola_1.consola.info('Shutting down server...');
    server.close(() => {
        console.info('Server closed');
        process.exit(0);
    });
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
// Start server
server.listen(PORT, () => {
    consola_1.consola.box(`
    Server running in ${NODE_ENV} mode
    Listening on port ${PORT}
    Ready to handle requests
  `);
});
