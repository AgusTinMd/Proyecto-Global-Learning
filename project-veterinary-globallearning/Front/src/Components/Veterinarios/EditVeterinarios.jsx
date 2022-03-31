import React, { useState } from "react";
import { Modal, Button, Form, Input } from 'antd';
import axios from "axios";
import config from './../../api';

const EditVeterinarios = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  
  const [ putData, setPutData] = useState({ 
  
    userName: (props.vetInfo.userName),
    password: (props.vetInfo.password),
    dni: (props.vetInfo.dni),
    licenseNumber: (props.vetInfo.licenseNumber),
    phone: (props.vetInfo.phone), 
    mail:(props.vetInfo.mail)
  })
  
  const handleChange = (event) => {
    setPutData ({...putData, [event.target.name]: event.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try{
      const resp = await axios.put(`http://localhost:8080/veterinaryApi/users/${props.vetInfo._id}`, putData, config(props.token)); 
      closeModal();
    } catch (err){
      console.log(err)
    }
  }
    
  

   

    

  return (
    <div className="App"> 
    <>
      <Button type="primary" onClick={openModal}>
        Editar veterinario
      </Button>
      <Modal title="Edicion de veterinarios" 
      visible={modal}
      onOk={openModal} 
      onCancel={closeModal}
      footer = {null}
      > 
     
        <div> 
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} type="flex" justify="center" align="middle"
          style={{marginLeft: '50px'}}>
            <Form.Item label="Usuario">
            <Input type= "text" name="userName"  value={putData.userName} onChange={handleChange}/>
            </Form.Item>
        
            <Form.Item label="DNI">
              <Input type= "text" name="dni"  value={putData.dni} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="Licencia">
              <Input type= "text" name="licenseNumber"  value={putData.licenseNumber} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="Telefono">
              <Input type= "text" name="phone"  value={putData.phone} onChange={handleChange}/>
            </Form.Item>
            <Form.Item label="Email">
              <Input type= "text" name="mail"  value={putData.mail} onChange={handleChange}/>
            </Form.Item>
            <Button type = "primary" onSubmit={handleSubmit} onClick={handleSubmit} style={{marginRight: '50px'}}> Confirmar edicion </Button>
          
          </Form>
        </div>
      </Modal>
    </>
    </div>
  )
}



export default EditVeterinarios; 