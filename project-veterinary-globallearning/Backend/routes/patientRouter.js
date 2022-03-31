const express = require('express');
const patientController = require('../controllers/patientController');
const Joi = require('joi');
const {patientRequeriments} = require('../validationSchema/pacienteValidationSchema')
const validator = require('express-joi-validation').createValidator();


const routes = (Patient) => {
	const patientRouter = express.Router();
	const  {getPatients, postPatient, getPatientById, putPatient, deletePatientById} = patientController(Patient); 


	patientRouter.route('/patient')
  .get(getPatients)
  .post(validator.body(patientRequeriments),postPatient);

	patientRouter.route('/patient/:patientId')
		.get(getPatientById)
		.put(validator.body(patientRequeriments),putPatient)
		.delete(deletePatientById)
	
		return patientRouter;
	}
module.exports = routes; 