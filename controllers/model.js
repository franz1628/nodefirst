const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Model = require('../models/model');



const modelGet = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { state: true };

    const [ total, model ] = await Promise.all([
        Model.countDocuments(query),
        Model.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        model
    });
}

const modelPost = async(req, res = response) => {
    
    const { idBrand, description } = req.body;
    const model = new Model({ idBrand,description });

    await model.save();

    res.json({
        model
    });
}

const modelPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const model = await Model.findByIdAndUpdate( id, resto );

    res.json(model);
}

const modelPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - modelPatch'
    });
}

const modelDelete = async(req, res = response) => {

    const { id } = req.params;

    const model = await Model.findByIdAndUpdate( id, { state: false } );


    res.json(model);
}

module.exports = {
    modelGet,
    modelPost,
    modelPut,
    modelPatch,
    modelDelete,
}