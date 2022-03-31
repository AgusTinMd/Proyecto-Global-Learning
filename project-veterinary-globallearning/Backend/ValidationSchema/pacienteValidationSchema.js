const Joi = require('joi');

const patientRequeriments = Joi.object({
    ownerName: Joi.string().required(),
    dni:Joi.string().pattern(new RegExp('^[0-9]{8,8}$')).required(), 
    phone: Joi.string().pattern(new RegExp('^[0-9]{10,10}$')).required(),
    address: Joi.string().required(),
    email: Joi.string().email().required(),
    petName:Joi.string().required(),
    petType:Joi.string().required(),
    race:Joi.string().required(),
    gender:Joi.string().required(),
    description:Joi.string().required(),
    age:Joi.number().required()

})
module.exports = {patientRequeriments};

