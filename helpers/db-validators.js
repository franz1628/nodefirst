const Role = require('../models/role');
const Person = require('../models/person');

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



module.exports = {
    isValidRole,
    emailExists,
    personExists
}

