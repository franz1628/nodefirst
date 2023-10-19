const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.personPath = '/api/person';
        this.brandPath = '/api/brand';
        this.modelPath = '/api/model';

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
        this.app.use( this.personPath, require('../routes/person'));
        this.app.use( this.brandPath, require('../routes/brand'));
        this.app.use( this.modelPath, require('../routes/model'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
