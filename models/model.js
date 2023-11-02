
const { Schema, model } = require('mongoose');

const ModelSchema = Schema({
    idBrand : {
        type: String,
        required : [true, 'The Model is required']
    },
    description: {
        type: String,
        required: [true, 'El description is required']
    },
    state: {
        type: Boolean,
        default: true
    },
});



ModelSchema.methods.toJSON = function() {
    const { __v,_id, ...model  } = this.toObject();
    model.uid = _id;
    return model;
}

module.exports = model( 'Model', ModelSchema );
