const mongoose = require('mongoose')
const {Schema} = mongoose;

const patientModel = new Schema(
  {
    ownerName: {type: String},
    dni: {type: Number},
    phone: {type: String},
    address: {type: String},
    email: {type: String},
    petName: {type: String},
    petType: {type: String},
    race: {type: String},
    age: {type: Number},
    gender: {type: String},
    description: {type: String},
    diagnostic: {type: String},
    treatment: {type: String}
  }
)

module.exports = mongoose.model('Patient',patientModel)


