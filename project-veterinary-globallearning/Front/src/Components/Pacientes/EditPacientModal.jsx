import { useState } from "react";
import { Form, Button, Modal, Input } from "antd";
import axios from "axios";
import config from './../../api';

const FormData = require('form-data');

const EditPacienteModal = (props) => {

  const [modal, setModal] = useState(false);


  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };


  const [postData, setPostData] = useState({
      ownerName: (props.patientInfo.ownerName),
      dni: (props.patientInfo.dni),
      phone: (props.patientInfo.phone),
      address: (props.patientInfo.address),
      email: (props.patientInfo.email), 
      petName:(props.patientInfo.petName),
      petType: (props.patientInfo.petType),
      race: (props.patientInfo.race),
      age: (props.patientInfo.age),
      gender: (props.patientInfo.gender),
      description: (props.patientInfo.description)
    });


    const handleChange = (event) => {
      setPostData ({...postData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
      
      
      event.preventDefault()

      console.log('ceerrrar modall:::::', modal);
      
      try{
        const resp = await axios.put(`http://localhost:8080/veterinaryApi/patient/${props.patientInfo._id}`, postData, config(props.token));
        closeModal();
      } catch (err){
        console.log('ERROR:::::',err)

      }

    }

     
    
  return (
      <div className="App"> 
      <>
        <Button type="primary" onClick={openModal}>
          Editar Paciente
        </Button>
        <Modal title="Edicion de pacientes" 
        visible={modal}
        //onOk={openModal} 
        onCancel={closeModal}
        footer = {null}  
        >
          <div> 
          <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} type="flex" justify="center" align="middle"
          style={{marginLeft: '50px'}} >
                <Form.Item label="Dueño" >
                  <Input name="ownerName" placeholder="Nombre del dueño" value={postData.ownerName} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="DNI">
                  <Input name="dni" placeholder="DNI" value={postData.dni} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Telefono">
                  <Input name="phone" placeholder="Phone" value={postData.phone} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Direccion">
                  <Input name="address" placeholder="Address" value={postData.address} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Email">
                  <Input name="email" placeholder="Email" value={postData.email} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Nombre">
                  <Input name="petName" placeholder="Pet Name" value={postData.petName} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Tipo">
                  <Input name="petType" placeholder="petType" value={postData.petType} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Raza">
                  <Input name="race" placeholder="Race" value={postData.race} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Edad">
                  <Input  type = "number" name="age" placeholder="Age" value={postData.age} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Genero">
                  <Input name="gender" placeholder="Gender" value={postData.gender} onChange={handleChange}/>
                </Form.Item>
                <Form.Item label="Descrip">
                  <Input name="description" placeholder="Description" value={postData.description} onChange={handleChange}/>
                </Form.Item>
                
                <Button type = "primary" onClick={handleSubmit} onSubmit={handleSubmit} style={{marginRight: '50px'}}> Confirmar edicion </Button>            
            </Form>
          </div>
        </Modal>
      </>
      </div>
    )

}

export default EditPacienteModal