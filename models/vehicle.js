
const { Schema, model } = require('mongoose');

const ModelSchema = Schema({
    idBrand: {
        type: Number,
        required: [true, 'idBrand is required']
    },
    idModel: {
        type: Number,
        required: [true, 'idModel is required']
    },
    idPerson: {
        type: Number,
        required: [true, 'idPerson is required']
    },
    km: {
        type: Number,
        required: [true, 'km is required']
    },
    state: {
        type: Boolean,
        default: true
    },
});



ModelSchema.methods.toJSON = function() {
    const { __v,_id, ...model  } = this.toObject();
    model.uid = _ud;
    return model;
}
module.exports = model( 'Vehicle', ModelSchema );
