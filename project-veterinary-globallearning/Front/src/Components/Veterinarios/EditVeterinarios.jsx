import React, { useState } from "react";
import { Modal, Button, Form, Input } from 'antd';
import 'antd/dist/antd.css'; 
import axios from "axios";

const EditVeterinarios = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  
    const [ putData, setPutData] = useState({ 
    
      userName: (props.datostoedit.userName),
      password: (props.datostoedit.password),
      dni: (props.datostoedit.dni),
      licenseNumber: (props.datostoedit.licenseNumber),
      phone: (props.datostoedit.phone), 
      mail:(props.datostoedit.mail)
    })
    
    const handleChange = (event) => {
      setPutData ({...putData, [event.target.name]: event.target.value});
    }

    
      
      const handleSubmit = async (event) => {
      
        console.log("Entramos al submit")
        event.preventDefault()
  
        console.log(putData)
   
        try{
          const resp = await axios.put(`http://localhost:8080/veterinaryApi/users/${props.datostoedit._id}`, putData)
  
          console.log(resp.data)
          
          refreshPage();
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
        Editar usuarios
      </Button>
      <Modal title="Edicion de usuarios" 
      visible={modal}
      onOk={openModal} 
      onCancel={closeModal}
      footer = {null}
      > 
     
        <div> 
          <Form>
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
      <Button type = "primary" onSubmit={handleSubmit} onClick={handleSubmit}> Confirmar edicion </Button>
     
    </Form>
        </div>
      </Modal>
    </>
    </div>
  )
}



export default EditVeterinarios; 