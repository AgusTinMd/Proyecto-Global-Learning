import {React, useState, useEffect} from "react";
import {Table, Button, Input, Modal} from 'antd'
import axios from 'axios'
import PacienteModal from "./PacienteModal"
import EditPacientModal from './EditPacientModal'
import DeletePacientModal from './DeletePacientModal'




const Pacientes = () => {

  const columns = [
    {
      title: 'Owner Name',
      dataIndex: 'ownerName',
      key: 'ownerName',
    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni', 
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Pet name',
      dataIndex: 'petName',
      key: 'petName',
    },
    {
      title: 'Race',
      dataIndex: 'race',
      key: 'race',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => {
        return(
          <>
            <EditPacientModal datostoedit={record}/>
            <br/>
            <DeletePacientModal datostodelete={record}/>      
          </>
        )
      }
    },
  
  ];

  const showRecord = (record) => {
    console.log(record)
  }
  

  //Table patients

  const [patients, setPatients] = useState([])


  const getAllPacients = async() => {

    const resp = await axios.get('http://localhost:8080/veterinaryApi/patient', {mode:'cors', credentials: 'include'})

    console.log(resp)

    setPatients(resp.data);
    console.log('Esto es despues de hacer la peticion')
    console.log(patients)
  }

  useEffect(()=>{
    getAllPacients()
  },[])


  return(
   <> 
      <PacienteModal/>
      <h1></h1>
      <Table dataSource={patients} columns={columns}/>  
   </>
  )

}

export default Pacientes