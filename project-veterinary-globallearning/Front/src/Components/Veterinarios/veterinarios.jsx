import React from "react";
import PostUsers from "./PostVeterinarios";
import { Button, Table} from "antd";
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
      title: 'UserName',
      dataIndex: 'userName',
      key: 'userName',
    },
    /* {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    }, */
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni',
    },
    {
      title: 'License',
      dataIndex: 'licenseNumber',
      key: 'license',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Mail',
      dataIndex: 'mail',
      key: 'mail',
    },
    {
      title: 'Action',
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