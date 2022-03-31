import React from "react";
import PostUsers from "./PostVeterinarios";
import {Table} from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import EditVeterinarios from "./EditVeterinarios";
import DeleteVeterinarios from "./DeleteVeterinarios";
import useAuth from "../../hooks/useAuth";
import config from '../../api';

const Veterinarios = () => {
  const {auth} = useAuth();
  const [user, setUser] = useState([])

	const getAllUsers = async() => { 
		const resp = await axios.get(`http://localhost:8080/veterinaryApi/users`, config(auth.token) );
		const newUser = resp.data.map((user)=> {
			return {...user, 'key': user._id}
		})
		setUser(newUser)
	}

	useEffect(()=> {
		getAllUsers();
	}, [user]);

 
  
  const columns = [
    

    {
      title: 'Nombre de usuario',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni',
    },
    {
      title: 'Licencia',
      dataIndex: 'licenseNumber',
      key: 'license',
    },
    {
      title: 'Telefono',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'mail',
      key: 'mail',
    },
    {
      title: '',
      key: 'action',
       render: (record) => {
        return(
          <>
            <EditVeterinarios vetInfo={record} token={auth.token}/>
            <br />
            <DeleteVeterinarios vetInfo={record} token={auth.token}/>         
          </>
        )
      } 
    },
  
  ];

 
  
 
  return(
  <div>
    <PostUsers token={auth.token}/>
    <div className="veterinarios">
      <h1></h1>
    <Table dataSource={user} columns={columns}/>
   

    </div>
  </div>
     

    
  )

}

export default Veterinarios;