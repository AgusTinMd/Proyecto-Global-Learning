const Joi = require('joi');

const userRequeriments = Joi.object({
    userName: Joi.string().required(),
    dni:Joi.string().pattern(new RegExp('^[0-9]{8,8}$')).required(), 
    mail: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[A-Za-z\u00f1\u00d10-9]{8,}$')).required(), //\u00f1 = ñ  \u00d1 = Ñ so the pattern allow this letters
    phone: Joi.string().pattern(new RegExp('^[0-9]{10,10}$')).required(),
    licenseNumber: Joi.string().pattern(new RegExp('^[0-9]{5,5}$')).required()
})

module.exports = {userRequeriments};