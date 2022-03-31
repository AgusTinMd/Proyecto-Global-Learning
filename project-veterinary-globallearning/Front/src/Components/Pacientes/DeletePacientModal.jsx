import React, { useState } from "react";
import { Modal, Button} from 'antd';
import axios from "axios";
import config from './../../api';

const DeletePacientModal = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  
  const [ deleteData, setDeleteData] = useState({ 
  
    userName: (props.patientInfo.userName),
    password: (props.patientInfo.password),
    dni: (props.patientInfo.dni),
    licenseNumber: (props.patientInfo.licenseNumber),
    phone: (props.patientInfo.phone), 
    mail:(props.patientInfo.mail)
  })
    
   
    
      
  const handleSubmit = async (event) => {
  
    event.preventDefault()


    try{
      const resp = await axios.delete(`http://localhost:8080/veterinaryApi/patient/${props.patientInfo._id}`, config(props.token));
      closeModal();
    } 
    catch (err){
      console.log(err)
    }
  }
    


  return (
    <div className="App"> 
    <>
      <Button type="primary" onClick={openModal}>
        Eliminar Paciente
      </Button>
      <Modal title="Eliminacion de usuarios" 
      visible={modal}
      onOk={openModal} 
      onCancel={closeModal}
      footer = {null}
      > 
      
      <div> 
				<h1>Desea eliminar el paciente?</h1>
        <Button type = "primary" onSubmit={handleSubmit} onClick={handleSubmit}> Confirmar </Button>
        <Button onClick={closeModal} style={{marginLeft: '15px'}}>Cerrar</Button>
        </div> 
      </Modal>
    </>
    </div>
  )
}



export default DeletePacientModal; 