import { useState } from "react";
// import Pacientes from "./Pacientes";
import { Form, Button, Modal, Input, message } from "antd";
import axios from "axios";
import config from './../../api';

const FormData = require('form-data');

const PacienteModal = (props) => {

  const [modal, setModal] = useState(false);


  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };


  const [postData, setPostData] = useState({
      ownerName: '',
      dni: '',
      phone: '',
      address: '',
      email: '', 
      petName:'',
      petType: '',
      race: '',
      age: '',
      gender: '',
      description: ''
    });


    const handleChange = (event) => {
      setPostData ({...postData, [event.target.name]: event.target.value});
    }

    const error = (mensaje) => {
      message.error(mensaje);
      };

    const handleSubmit = async (event) => {
      try{
      console.log("Entramos al submit")
      event.preventDefault()
 
      const resp = await axios.post('http://localhost:8080/veterinaryApi/patient', postData, config(props.token));
      
      // refreshPage();
      closeModal();
    }catch(err){
      error("Ha ingresado datos invalidos, por favor controle sus datos.");
    }

    }

    const refreshPage = () => {
      window.location.reload(false);
    }

   

  return (
      <div className="App"> 
      <>
        <Button type="primary" onClick={openModal}>
          Agregar nuevos pacientes
        </Button>
        <Modal title="Registro de pacientes" 
        visible={modal}
        onOk={openModal} 
        onCancel={closeModal}
        footer = {null}  
        > 
          <div> 
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} type="flex" justify="center" align="middle"
          style={{marginLeft: '50px'}} >
                <Form.Item label="Ownername" >
                  <Input name="ownerName" placeholder="Nombre del dueño" value={postData.ownerName} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="DNI">
                  <Input name="dni" placeholder="DNI" value={postData.dni} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Phone">
                  <Input name="phone" placeholder="Phone" value={postData.phone} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Address">
                  <Input name="address" placeholder="Address" value={postData.address} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Email">
                  <Input name="email" placeholder="Email" value={postData.email} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Pet name">
                  <Input name="petName" placeholder="Pet Name" value={postData.petName} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Pet type">
                  <Input name="petType" placeholder="petType" value={postData.petType} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Race">
                  <Input name="race" placeholder="Race" value={postData.race} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Age">
                  <Input  type = "number" name="age" placeholder="Age" value={postData.age} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Gender">
                  <Input name="gender" placeholder="Gender" value={postData.gender} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Description">
                  <Input name="description" placeholder="Description" value={postData.description} onChange={handleChange}/>
                </Form.Item>
                
                <Button type = "primary" onClick={handleSubmit} onSubmit={handleSubmit} style={{marginRight: '50px'}}> Agregar nuevo paciente </Button>            
            </Form>
          </div>
        </Modal>
      </>
      </div>
    )

}

export default PacienteModal