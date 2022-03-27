import React from "react";
import PostUsers from "./PostVeterinarios";
import { Table} from "antd";
import { useState, useEffect } from "react";
import axios from "axios"
import EditVeterinarios from "./EditVeterinarios";
import DeleteVeterinarios from "./DeleteVeterinarios";

const Veterinarios = () => {
  const [user, setUser] = useState([])

	const getAllUsers = async() => { 
		const resp = await axios.get(`http://localhost:8080/veterinaryApi/users`, {mode:'cors', credentials:'include'})
		
		
		const newUser = resp.data.map((user)=> {
			return {...user, 'key': user._id}
		})
		setUser(newUser)
	}

	useEffect(()=> {
		getAllUsers()
	}, [])	

 
  
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
            <EditVeterinarios datostoedit={record}/>
            <br />
            <DeleteVeterinarios datostodelete={record}/>         
          </>
        )
      } 
    },
  
  ];

 
  
 
  return(
  <div> 
    <PostUsers/>
    <div className="veterinarios">
      <h1></h1>
    <Table dataSource={user} columns={columns}/>
   

    </div>
  </div>
     

    
  )

}

export default Veterinarios;