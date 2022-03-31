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
      
        console.log("Entramos al submit")
        event.preventDefault()
  
        console.log(putData)
   
        try{
          const resp = await axios.put(`http://localhost:8080/veterinaryApi/users/${props.vetInfo._id}`, putData, config(props.token));
  
          console.log(resp.data)
          
          closeModal();
        } catch (err){
          console.log(err)
        }
      }
       
  

   

    

  return (
    <div className="App"> 
    <>
      <Button type="primary" onClick={openModal}>
        Editar usuarios
      </Button>
      <Modal title="Edicion de usuarios" 
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
      <Form.Item label="License">
        <Input type= "text" name="licenseNumber"  value={putData.licenseNumber} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Phone">
        <Input type= "text" name="phone"  value={putData.phone} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Mail">
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