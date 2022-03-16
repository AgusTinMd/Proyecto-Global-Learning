const express = require('express');
const patientController = require('../controllers/patientControler')
/* const validator = require('express-joi-validation').createValidator();
const bookValidationer = require('../validations/bookValidationer') */

const routes = (Patient) => {
	const patientRouter = express.Router();
	const  {getPatients, postPatient, getPatientById, putPatient, deletePatientById, getSearchPatient} = patientController(Patient); 
/* 	const {bodySchema, querySchema} = bookValidationer(); */

	patientRouter.route('/patient')
  .get(getPatients)
  .post(/* validator.body(bodySchema), */  postPatient);

	patientRouter
		.route('/patient/:patientId')
		.get(getPatientById)
		.put(putPatient)
		.delete(deletePatientById)

	patientRouter
		.route('/patientSearch')
			.get(getSearchPatient)
	
		return patientRouter;
	}
module.exports = routes; 