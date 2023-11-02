const Role = require('../models/role');
const Person = require('../models/person');
const Brand = require('../models/brand');
const Model = require('../models/model');
const Service = require('../models/service');

const isValidRole = async(role = '') => {
    const rolExists = await Role.findOne({ role });
    if ( !rolExists ) {
        throw new Error(`The role ${ role } is not registered in the databases`);
    }
}

const emailExists = async( email = '' ) => {
   
    const emailExists = await Person.findOne({ email });
    if ( emailExists ) {
        throw new Error(`The email: ${ email }, is already registered`);
    }
}

const personExists = async( id ) => {
    const personExists = await Person.findById(id);
    if ( !personExists ) {
        throw new Error(`Id does not exist: ${ id }`);
    }
}

const brandExists = async( id ) => {
    const brandExists = await Brand.findById(id);
    if ( !brandExists ) {
        throw new Error(`Id Brand does not exist: ${ id }`);
    }
}
const modelExists = async( id ) => {
    const modelExists = await Model.findById(id);
    if ( !modelExists ) {
        throw new Error(`Id Model does not exist: ${ id }`);
    }
}

const serviceExists = async( description ) => {
    const model = await  Service.findOne({description});
    if ( model ) {
        throw new Error(`The description: ${ description }, is already registered`);
    }
}


module.exports = {
    isValidRole,
    emailExists,
    personExists,
    brandExists,
    modelExists,
    serviceExists,

}

