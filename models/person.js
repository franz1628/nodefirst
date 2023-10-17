
const { Schema, model } = require('mongoose');

const PersonSchema = Schema({
    name: {
        type: String,
        required: [true, 'El name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});



PersonSchema.methods.toJSON = function() {
    const { __v, password, ...person  } = this.toObject();
    return person;
}

module.exports = model( 'Person', PersonSchema );
