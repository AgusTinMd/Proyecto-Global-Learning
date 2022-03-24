import React, { useState } from "react";
import { Modal, Button, Form, Input } from 'antd';
import 'antd/dist/antd.css'; 
import axios from "axios";

const NewUsers = () => {
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
    
    const handleSubmit = async (event) => {
      const loginFormData = new FormData();
      loginFormData.append("userName", postData.userName)
      loginFormData.append("password", postData.password)
      loginFormData.append("dni", postData.dni)
      loginFormData.append("licenseNumber", postData.licenseNumber)
      loginFormData.append("phone", postData.phone)
      loginFormData.append("mail", postData.mail)
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:8080/veterinaryApi/users",
          data: loginFormData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }
    }
   

    const handleChange = (event) => {
      setPostData ({...postData, [event.target.name]: event.target.value});
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
        <input type= "text" name="userName"  value={postData.userName} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Password">
        <input type= "text" name="password"  value={postData.password} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="DNI">
        <input type= "text" name="dni"  value={postData.dni} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="License">
        <input type= "text" name="licenseNumber"  value={postData.licenseNumber} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Phone">
        <input type= "text" name="phone"  value={postData.phone} onChange={handleChange}/>
      </Form.Item>
      <Form.Item label="Mail">
        <input type= "text" name="mail"  value={postData.mail} onChange={handleChange}/>
      </Form.Item>
      {<Button type = "primary" onClick={handleSubmit}> Agregar nuevo usuario </Button>}
     
    </Form>
        </div>
      </Modal>
    </>
    </div>
  )
}



export default NewUsers; 