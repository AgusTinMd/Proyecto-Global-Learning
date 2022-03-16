const express = require('express');
const patientController = require('../controllers/patientController')
/* const validator = require('express-joi-validation').createValidator();
const bookValidationer = require('../validations/bookValidationer') */

const routes = (Patient) => {
	const patientRouter = express.Router();
	const  {getPatient, postPatient, getPatientById, putPatient, deletePatientById} = patientController(Patient); 
/* 	const {bodySchema, querySchema} = bookValidationer(); */

	patientRouter.route('/patient')
  .get(getPatient)
  .post(/* validator.body(bodySchema), */  postPatient);

	patientRouter
		.route('/patient/:patientId')
		.get(getPatientById)
		.put(putPatient)
		.delete(deletePatientById)
	
		return patientRouter;
	}
module.exports = routes; 