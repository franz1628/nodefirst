const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.personPath = '/api/person';
        this.brandPath = '/api/brand';
        this.modelPath = '/api/model';
        this.servicePath = '/api/service';
        this.vehiclePath = '/api/vehicle';

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.brandPath, require('../routes/brand'));
        this.app.use( this.modelPath, require('../routes/model'));
        this.app.use( this.personPath, require('../routes/person'));
        this.app.use( this.servicePath, require('../routes/service'));
        this.app.use( this.vehiclePath, require('../routes/vehicle'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
