import { useState } from "react";
// import Pacientes from "./Pacientes";
import { Form, Button, Modal, Input } from "antd";
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
      addres: '',
      email: '', 
      petName:'',
      typePet: '',
      race: '',
      age: '',
      gender: '',
      description: ''
    });


    const handleChange = (event) => {
      setPostData ({...postData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
      
      console.log("Entramos al submit")
      event.preventDefault()
 
      const resp = await axios.post('http://localhost:8080/veterinaryApi/patient', postData, config(props.token));
      
      // refreshPage();
      closeModal();

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
            <Form >
                <Form.Item label="owner Name">
                  <Input name="ownerName" placeholder="Nombre del dueño" value={postData.ownerName} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="dni">
                  <Input name="dni" placeholder="DNI" value={postData.dni} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="phone">
                  <Input name="phone" placeholder="Phone" value={postData.phone} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="addres">
                  <Input name="addres" placeholder="Addres" value={postData.addres} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="email">
                  <Input name="email" placeholder="Email" value={postData.email} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="petname">
                  <Input name="petName" placeholder="Pet Name" value={postData.petName} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="typePet">
                  <Input name="typePet" placeholder="TypePet" value={postData.typePet} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="race">
                  <Input name="race" placeholder="Race" value={postData.race} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="age">
                  <Input name="age" placeholder="Age" value={postData.age} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="gender">
                  <Input name="gender" placeholder="Gender" value={postData.gender} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="description">
                  <Input name="description" placeholder="Description" value={postData.description} onChange={handleChange}/>
                </Form.Item>
                
                <Button type = "primary" onClick={handleSubmit} onSubmit={handleSubmit} > Agregar nuevo paciente </Button>            
            </Form>
          </div>
        </Modal>
      </>
      </div>
    )

}

export default PacienteModal