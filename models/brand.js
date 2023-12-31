
const { Schema, model } = require('mongoose');

const BrandSchema = Schema({
    description: {
        type: String,
        required: [true, 'El description is required']
    },
    state: {
        type: Boolean,
        default: true
    },
});



BrandSchema.methods.toJSON = function() {
    const { __v,_id, ...brand  } = this.toObject();
    brand.uid = _id;
    return brand;
}

module.exports = model( 'Brand', BrandSchema );
