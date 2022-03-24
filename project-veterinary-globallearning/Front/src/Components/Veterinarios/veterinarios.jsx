import React from "react";
import NewUsers from "../NewUsers/NewUsers";
import { Table, Button, Space} from "antd";
import 'antd/dist/antd.css';
import { useState, useEffect } from "react";
import axios from "axios"

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

  const bottomOptions = [
    { label: 'bottomLeft', value: 'bottomLeft' },
    { label: 'bottomCenter', value: 'bottomCenter' },
    { label: 'bottomRight', value: 'bottomRight' },
    { label: 'none', value: 'none' },
  ];
  
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
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <button>Edite</button>
          <a>Delete</a>
        </Space>
      ),
    },
   
    
  ];
  
 
  return(
  <div> 
    <NewUsers/>
    
    <div className="veterinarios">
      <h1>Hola veterinarios</h1>
    <Table dataSource={user} columns={columns}/>
    
    </div>
  </div>
     

    
  )

}

export default Veterinarios;