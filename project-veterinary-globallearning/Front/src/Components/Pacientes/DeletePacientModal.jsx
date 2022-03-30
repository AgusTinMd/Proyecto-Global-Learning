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
    
      userName: (props.datostodelete.userName),
      password: (props.datostodelete.password),
      dni: (props.datostodelete.dni),
      licenseNumber: (props.datostodelete.licenseNumber),
      phone: (props.datostodelete.phone), 
      mail:(props.datostodelete.mail)
    })
    
   
    
      
      const handleSubmit = async (event) => {
      
        console.log("Entramos al submit")
        event.preventDefault()
  
        console.log(deleteData)
   
        try{
          const resp = await axios.delete(`http://localhost:8080/veterinaryApi/patient/${props.datostodelete._id}`, config(props.token));
  
          console.log(resp.data)
          
          //refreshPage();
        } catch (err){
          console.log(err)
        }
      }
       
  

    const refreshPage = () => {
      window.location.reload(false);
    }

    

  return (
    <div className="App"> 
    <>
      <Button type="primary" onClick={openModal}>
        Delete usuarios
      </Button>
      <Modal title="Eliminacion de usuarios" 
      visible={modal}
      onOk={openModal} 
      onCancel={closeModal}
      footer = {null}
      > 
      
      <div> 
				<h1>Desea eliminar el usuario?</h1>
			<Button type = "primary" onSubmit={handleSubmit} onClick={handleSubmit}> Confirmar </Button>
        </div> 
      </Modal>
    </>
    </div>
  )
}



export default DeletePacientModal; 