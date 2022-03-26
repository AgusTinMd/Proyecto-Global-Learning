import React, { useState } from "react";
import { Modal, Button, Form, Input } from 'antd';
import 'antd/dist/antd.css'; 
import axios from "axios";

const PostUsers = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  
    const [postData, setPostData] = useState({ 
      userName: '',
      password: '',
      dni: '',
      licenseNumber: '',
      phone: '', 
      mail:''
    })
    
    const handleChange = (event) => {
      setPostData ({...postData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
      
      console.log("Entramos al submit")
      event.preventDefault()
 
      const resp = await axios.post('http://localhost:8080/veterinaryApi/users', postData)
      
      refreshPage();

    }

    const refreshPage = () => {
      window.location.reload(false);
    }
  

  return (
    <div className="App"> 
    <>
      <Button type="primary" onClick={openModal}>
        Agregar nuevos usuarios
      </Button>
      <Modal title="Registro de usuarios" 
      visible={modal}
      onOk={openModal} 
      onCancel={closeModal}
      footer = {null}
      > 
     
        <div> 
          <Form>
        <Form.Item label="Usuario">
        <Input type= "text" name="userName"  value={postData.userName} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Password">
        <Input type= "text" name="password"  value={postData.password} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="DNI">
        <Input type= "text" name="dni"  value={postData.dni} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="License">
        <Input type= "text" name="licenseNumber"  value={postData.licenseNumber} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Phone">
        <Input type= "text" name="phone"  value={postData.phone} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Mail">
        <Input type= "text" name="mail"  value={postData.mail} onChange={handleChange}/>
      </Form.Item>
      <Button type = "primary" onSubmit={handleSubmit} onClick={handleSubmit}> Agregar nuevo usuario </Button>
     
    </Form>
        </div>
      </Modal>
    </>
    </div>
  )
}



export default PostUsers; 