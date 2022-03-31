import {React, useState, useEffect} from "react";
import {Table} from 'antd'
import axios from 'axios'
import PacienteModal from "./PacienteModal"
import EditPacientModal from './EditPacientModal'
import DeletePacientModal from './DeletePacientModal'
import useAuth from "../../hooks/useAuth";
import config from '../../api';

const Pacientes = () => {
  const {auth} = useAuth();

  const [isModalVisible, setIsModalVisible] = useState(false);  
  const columns = [
    {
      title: 'Dueño',
      dataIndex: 'ownerName',
      key: 'ownerName',
    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni', 
    },
    {
      title: 'Telefono',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Nombre mascota',
      dataIndex: 'petName',
      key: 'petName',
    },
    {
      title: 'Raza',
      dataIndex: 'race',
      key: 'race',
    },
    {
      title: 'Genero',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '',
      key: 'action',
      render: (record) => {
        return(
          <>
            <EditPacientModal patientInfo={record} token={auth.token} isModalVisible={isModalVisible} setVision={setIsModalVisible} />
            <br/>
            <DeletePacientModal patientInfo={record} token={auth.token}/>      
          </>
        )
      }
    },
  
  ];

  

  //Table patients

  const [patients, setPatients] = useState([])


  const getAllPacients = async() => {

    const resp = await axios.get('http://localhost:8080/veterinaryApi/patient', config(auth.token));

    setPatients(resp.data);

  }

  useEffect(()=>{
    getAllPacients()
  },[patients])


  return(
   <> 
      <PacienteModal token={auth.token}/>
      <h1></h1>
      <Table dataSource={patients} columns={columns}/>  
   </>
  )

}

export default Pacientes