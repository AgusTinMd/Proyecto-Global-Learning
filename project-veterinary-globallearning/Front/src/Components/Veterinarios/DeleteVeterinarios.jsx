import React, { useState } from "react";
import { Modal, Button} from 'antd';
import axios from "axios";
import config from '../../api';

const DeleteVeterinarios = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  
    const [ deleteData, setDeleteData] = useState({ 
    
      userName: (props.vetInfo.userName),
      password: (props.vetInfo.password),
      dni: (props.vetInfo.dni),
      licenseNumber: (props.vetInfo.licenseNumber),
      phone: (props.vetInfo.phone), 
      mail:(props.vetInfo.mail)
    })
    
   
    
      
      const handleSubmit = async (event) => {
    
        event.preventDefault()

        try{
          
          const resp = await axios.delete(`http://localhost:8080/veterinaryApi/users/${props.vetInfo._id}`, config(props.token));
         closeModal();

        } catch (err){
          console.log(err)
        }
      }
       
  
    

  return (
    <div className="App"> 
    <>
      <Button type="primary" onClick={openModal}>
        Eliminar Veterinario
      </Button>
      
      <Modal title="Eliminacion de veterinarios" 
      visible={modal}
      onOk={openModal} 
      onCancel={closeModal}
      footer = {null}
      > 
     
      <div> 
				<h1>Desea eliminar el veterinario?</h1>
			<Button type = "primary" onSubmit={handleSubmit} onClick={handleSubmit}> Confirmar </Button>
      <Button onClick={closeModal} style={{marginLeft: '15px'}}>Cerrar</Button>
        </div> 
      </Modal>
    </>
    </div>
  )
}



export default DeleteVeterinarios; 