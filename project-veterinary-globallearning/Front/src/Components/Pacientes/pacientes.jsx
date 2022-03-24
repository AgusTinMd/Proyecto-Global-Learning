import {React, useState, useEffect} from "react";
import {Table, Button} from 'antd'
import axios from 'axios'
import PacienteModal from "./PacienteModal"
import EditPacientModal from './EditPacientModal'


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
    render: (text, record, index) => < div className = "btn-wrap"
        style = {
          {
            width: "200px"
          }
        } > < Button onClick = {
          (e) => {
            <EditPacientModal dataRow={record}></EditPacientModal>
          }
        } > Edit </Button></div >
      },

];




const Pacientes = () => {

  const [patients, setPatients] = useState([])

  const getAllPacients = async() => {

    const resp = await axios.get('http://localhost:8080/veterinaryApi/patient', {mode:'cors', credentials: 'include'})

    console.log(resp)

    setPatients(resp.data);
  }

  useEffect(()=>{
    getAllPacients()
  },[])

  return(
   <>
      <PacienteModal/>
      <Table dataSource={patients} columns={columns}/>
   </>
  )

}

export default Pacientes