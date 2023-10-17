
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
    const { __v, ...brand  } = this.toObject();
    return brand;
}

module.exports = model( 'Brand', BrandSchema );
