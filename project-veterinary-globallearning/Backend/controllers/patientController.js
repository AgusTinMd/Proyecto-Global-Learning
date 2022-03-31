const  patientController = (Patient) => {
  const getPatients = async (req,res) => {
    const allPatients = await Patient.find();
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Credentials','true');
    res.status(200).json(allPatients);
  };

  const postPatient = async (req, res) => {
    const patient = new Patient(req.body);
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Credentials','true');  
    await patient.save();
    res.status(200).json(patient);
  };

  const getPatientById = async (req, res) => {
    try{
      const {params} = req;
      const patientFind = await Patient.findById(params.patientId);
      res.json(patientFind)
    } 
    catch {
      res.json({'message': 'Patient not found'});
    }
  };

  const putPatient = async (req, res) => {
    try {
      const {body} = req;
      const patientUpdate = await Patient.updateOne({
        _id: req.params.patientId,
      },{
       $set:  {
            ownerName: body.ownerName,
            dni: body.dni,
            phone: body.phone,
            address: body.address,
            email: body.email,
            petName: body.petName,
            petType: body.petType,
            race: body.race,
            age: body.age,
            gender: body.gender,
            description: body.description,
            diagnostic: body.diagnostic,
            treatment: body.treatment
          },
      });
      res.json(patientUpdate);
    } 
    catch {
      res.json({'message': 'Patient not found'});
    }
  };

  const deletePatientById = async (req, res) => {
    try{
      const patientId = req.params.patientId;
      await Patient.findByIdAndDelete(patientId)
      res.json('Patient Deleted');
    }
    catch{
      res.json({'message': 'Patient not Found'});
    }
  };




  return {getPatients, postPatient, getPatientById, putPatient, deletePatientById}
}

module.exports = patientController;