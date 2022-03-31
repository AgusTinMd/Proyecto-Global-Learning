import React, { useState } from "react";
import { Modal, Button, Form, Input, message } from 'antd';
import axios from "axios";
import config from './../../api';
import './veterinarios.css'


const PostUsers = (props) => {
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
const error = (mensaje) => {
message.error(mensaje);
};
const handleChange = (event) => {
setPostData ({...postData, [event.target.name]: event.target.value});
}

const handleSubmit = async (event) => {
try{
console.log("Entramos al submit")
event.preventDefault()

const resp = await axios.post('http://localhost:8080/veterinaryApi/users/newUser', postData, config(props.token));

closeModal();
} catch(err){

error("Ha ingresado datos invalidos, por favor controle sus datos.");
}

}



return (
<div className="App">
  <>
    <Button type="primary" onClick={openModal}>
      Agregar nuevos usuarios
    </Button>

    <Modal title="Registro de usuarios" visible={modal} onOk={openModal} onCancel={closeModal} footer={null}>
      <div>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} type="flex" justify="center" align="middle"
          style={{marginLeft: '50px'}}>
          <Form.Item label="Usuario" >
            <Input type="text" name="userName" value={postData.userName} onChange={handleChange}
              placeholder="Ingrese nombre de usuario" />
          </Form.Item>
          <Form.Item label="Password">
            <Input type="password" name="password" value={postData.password} onChange={handleChange}
              placeholder="Minimo 8 caracteres" />
          </Form.Item>
          <Form.Item label="DNI">
            <Input type="number" name="dni" value={postData.dni} onChange={handleChange} placeholder="Sin puntos" />
          </Form.Item>
          <Form.Item label="License">
            <Input type="number" name="licenseNumber" value={postData.licenseNumber} onChange={handleChange}
              placeholder="Sin el punto" />
          </Form.Item>
          <Form.Item label="Phone">
            <Input type="phone" name="phone" value={postData.phone} onChange={handleChange}
              placeholder="381-1234567*" />
          </Form.Item>
          <Form.Item label="Mail">
            <Input type="email" name="mail" value={postData.mail} onChange={handleChange}
              placeholder="email@gmail.com" />
          </Form.Item>

          <Button type="primary" onSubmit={handleSubmit} onClick={handleSubmit} style={{marginRight: '50px'}}> Agregar
            nuevo usuario </Button>
        </Form>

      </div>
    </Modal>
  </>
</div>
)
}



export default PostUsers;