const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Vehicle = require('../models/vehicle.js');



const vehicleGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { state: true };

    const [ total, vehicle ] = await Promise.all([
        Vehicle.countDocuments(query),
        Vehicle.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        vehicle
    });
}

const vehiclePost = async(req, res = response) => {
    
    const { description } = req.body;
  
    // Guardar en BD
    const vehicle = new Vehicle({description});

    await vehicle.save();

    res.json({
        vehicle
    });
}

const vehiclePut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const vehicle = await Vehicle.findByIdAndUpdate( id, resto );

    res.json(vehicle);
}

const vehiclePatch = (req, res = response) => {
    res.json({
        msg: 'patch API - vehiclePatch'
    });
}

const vehicleDelete = async(req, res = response) => {

    const { id } = req.params;

    const vehicle = await Vehicle.findByIdAndUpdate( id, { estado: false } );


    res.json(vehicle);
}




module.exports = {
    vehicleGet,
    vehiclePost,
    vehiclePut,
    vehiclePatch,
    vehicleDelete,
}