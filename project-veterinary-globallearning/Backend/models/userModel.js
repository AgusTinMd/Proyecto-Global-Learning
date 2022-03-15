const mongoose = require('mongoose')
const {Schema} = mongoose;

const userModel = new Schema(
  {
    username: {type: String},
    password: {type: String},
    dni: {type: Number},
    license: {type: String},
    phone: {type: String},
    mail: {type: String}
  }
)

module.exports = mongoose.model('User',userModel);