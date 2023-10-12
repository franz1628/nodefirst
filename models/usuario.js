const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  email : {
    type: String,
    required: [true, "The email is required"],
    unique : true
  },
  password : {
    type: String,
    required: [true, "The password is required"],
    unique : true
  },
  img : {
    type: String
  },
  role : {
    type: String,
    required: [true, "The email is required"],
    enum : ['ADMIN_ROLE','USER_ROLE']
  },
  state : {
    type: Boolean,
    default:true
  },
  google : {
    type: Boolean,
    default:true
  },
});

module.exports = model('Users', UsuarioSchema);
