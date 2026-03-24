const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { dbConnection } = require('../database/config');
const { errorHandler } = require('../middlewares/error-handler');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 8080;

        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {
        // Security headers
        this.app.use( helmet() );

        // Request logging
        this.app.use( morgan('dev') );

        // CORS
        this.app.use( cors() );

        // Read and parse body
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use('/api', require('../routes'));
        
        // Error handler (must be last)
        this.app.use( errorHandler );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
