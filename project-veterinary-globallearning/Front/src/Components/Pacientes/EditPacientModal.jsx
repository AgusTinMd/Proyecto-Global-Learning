import { useState } from "react";
// import Pacientes from "./Pacientes";
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
      ownerName: (props.datostoedit.ownerName),
      dni: (props.datostoedit.dni),
      phone: (props.datostoedit.phone),
      addres: (props.datostoedit.addres),
      email: (props.datostoedit.email), 
      petName:(props.datostoedit.petName),
      typePet: (props.datostoedit.typePet),
      race: (props.datostoedit.race),
      age: (props.datostoedit.age),
      gender: (props.datostoedit.gender),
      description: (props.datostoedit.description)
    });


    const handleChange = (event) => {
      setPostData ({...postData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
      
      console.log("Entramos al submit")
      event.preventDefault()

      console.log('ceerrrar modall:::::', modal);
      console.log(postData)
      
      try{
        const resp = await axios.put(`http://localhost:8080/veterinaryApi/patient/${props.datostoedit._id}`, postData, config(props.token));
        console.log(resp.data)
        closeModal();
        //refreshPage();
      } catch (err){
        console.log('ERROR:::::',err)

      }

    }

    const refreshPage = () => {
      window.location.reload(false);
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
            <Form >
                <Form.Item label="owner Name">
                  <Input name="ownerName" placeholder="Owner Name" value={postData.ownerName} onChange={handleChange}/>
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
                
                <Button type = "primary" onClick={handleSubmit} onSubmit={handleSubmit} > Editar paciente </Button>            
            </Form>
          </div>
        </Modal>
      </>
      </div>
    )

}

export default EditPacienteModal