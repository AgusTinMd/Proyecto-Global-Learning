const  patientController = (Patient) => {
  const getPatients = async (req,res) => {
    const {query} = req;
    const allPatients = await Patient.find(query);
    res.json(allPatients);
  };

  const postPatient = async (req, res) => {
    const patient = new Patient(req.body);
    await patient.save();

    res.json(patient);
  };

  const getPatientById = async (req, res) => {
    try{
      const {params} = req;
      const patientFind = await Patient.findById(params.patientId);
      res.json(patientFind)
    } catch {
      res.json({'message': 'Patient not found'});
    }
  };

  const putPatient = async (req, res) => {
    try {
      const {body} = req;
      const patientUpdate = await Patient.updateOne({
        _id: req.params.bookId,
      },{
       $set:  {
            ownerName: body.ownerName,
            dni: body.dni,
            phone: body.phone,
            address: body.address,
            email: body.email,
            petName: body.petName,
            typePet: body.typePet,
            race: body.race,
            age: body.age,
            gender: body.gender,
            description: body.description,
            diagnostic: body.diagnostic,
            treatment: body.treatment
          },
      });
    res.json(patientUpdate);
  } catch {
    res.json({'message': 'Patient not found'});
          }
  };

  const deletePatientById = async (req, res) => {
    try{
      const patientId = req.params.patientId;
      await Patient.findByIdAndDelete(patientId)
      res.json('Patient Deleted');
    }catch{
      res.json({'message': 'Patient not Found'});
    }
  };

  const getSearchPatient = async(req, res) => {
    const {query} = req;
    const key = Object.key(query).join('');

    if(key === 'ownerName') {
      const patientFind = await Patient.find({'ownerName': query.ownerName})
      res.json(respSearch(patientFind))
    }
    else if(key === 'dni') {
      const patientFind = await Patient.find({'dni': query.dni})
      res.json(respSearch(patientFind))
    } else if (key === 'phone') {
      const patientFind = await Patient.find({'phone': query.phone})
      res.json(respSearch(patientFind))
    }else if (key === 'email') {
      const patientFind = await Patient.find({'email': query.email})
      res.json(respSearch(patientFind))
    }else if (key === 'petName') {
      const patientFind = await Patient.find({'petName': query.petName})
      res.json(respSearch(patientFind))
    }else if (key === 'typePet') {
      const patientFind = await Patient.find({'phone': query.typePet})
      res.json(respSearch(patientFind))
    }else if (key === 'race') {
      const patientFind = await Patient.find({'phone': query.race})
      res.json(respSearch(patientFind))
    }else if (key === 'age') {
      const patientFind = await Patient.find({'phone': query.age})
      res.json(respSearch(patientFind))
    }else if (key === 'gender') {
      const patientFind = await Patient.find({'phone': query.gender})
      res.json(respSearch(patientFind))
    }else if (key === 'description') {
      const patientFind = await Patient.find({'phone': query.description})
      res.json(respSearch(patientFind))
    }



  }

  const respSearch = (paramFind) => {

    if(paramFind.length !== 0){
      return(paramFind);
    }else{
      return({'message':'Patient not found'});
    }

  }


  return {getPatients, postPatient, getPatientById, putPatient, deletePatientById, getSearchPatient}
}

module.exports = patientController;