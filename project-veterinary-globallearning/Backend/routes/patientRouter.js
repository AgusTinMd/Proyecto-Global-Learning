const express = require('express');
const patientController = require('../controllers/patientController')


const routes = (Patient) => {
	const patientRouter = express.Router();
	const  {getPatients, postPatient, getPatientById, putPatient, deletePatientById} = patientController(Patient); 


	patientRouter.route('/patient')
  .get(getPatients)
  .post(postPatient);

	patientRouter.route('/patient/:patientId')
		.get(getPatientById)
		.put(putPatient)
		.delete(deletePatientById)
	
		return patientRouter;
	}
module.exports = routes; 