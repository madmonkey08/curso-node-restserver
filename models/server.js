const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutes = '/api/users';

        // Middlewares
        this.middlewares();

        // Lectura y parseo del body
        this.app.use(express.json());

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usuariosRoutes, require('../routes/user.routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);;
        });
    }

}

module.exports = Server;