const mongoose = require('mongoose')
const {Schema} = mongoose;

const userModel = new Schema(
  {
    userName: {type: String},
    password: {type: String},
    dni: {type: Number},
    licenseNumber: {type: String},
    phone: {type: String},
    mail: {type: String}
  }
)

module.exports = mongoose.model('User',userModel);