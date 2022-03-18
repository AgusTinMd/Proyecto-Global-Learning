const express = require('express');
const patientController = require('../controllers/patientController')


const routes = (Patient) => {
	const patientRouter = express.Router();
	const  {getPatients, postPatient, getPatientById, putPatient, deletePatientById, getSearchPatient} = patientController(Patient); 


	patientRouter.route('/patient')
  .get(getPatients)
  .post(postPatient);

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