const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Brand = require('../models/brand');



const brandGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, brand ] = await Promise.all([
        Brand.countDocuments(query),
        Brand.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        brand
    });
}

const brandPost = async(req, res = response) => {
    
    const { description } = req.body;
    const brand = new Brand({ description });

    await brand.save();

    res.json({
        brand
    });
}

const brandPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const brand = await Brand.findByIdAndUpdate( id, resto );

    res.json(brand);
}

const brandPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - brandPatch'
    });
}

const brandDelete = async(req, res = response) => {

    const { id } = req.params;

    const brand = await Brand.findByIdAndUpdate( id, { state: false } );


    res.json(brand);
}




module.exports = {
    brandGet,
    brandPost,
    brandPut,
    brandPatch,
    brandDelete,
}