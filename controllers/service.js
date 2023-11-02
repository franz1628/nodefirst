const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Service = require('../models/service.js');



const serviceGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { state: true };

    const [ total, service ] = await Promise.all([
        Service.countDocuments(query),
        Service.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        service
    });
}

const servicePost = async(req, res = response) => {
    
    const { description } = req.body;
  
    // Guardar en BD
    const service = new Service({description});

    await service.save();

    res.json({
        service
    });
}

const servicePut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const service = await service.findByIdAndUpdate( id, resto );

    res.json(service);
}

const servicePatch = (req, res = response) => {
    res.json({
        msg: 'patch API - servicePatch'
    });
}

const serviceDelete = async(req, res = response) => {

    const { id } = req.params;

    const service = await service.findByIdAndUpdate( id, { estado: false } );


    res.json(service);
}




module.exports = {
    serviceGet,
    servicePost,
    servicePut,
    servicePatch,
    serviceDelete,
}