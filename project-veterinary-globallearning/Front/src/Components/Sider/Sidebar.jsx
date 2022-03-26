import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {FaHandHoldingMedical, FaDog, FaUserPlus, FaHome} from 'react-icons/fa'
import 'antd/dist/antd.css';

import {Routes, Route, Link} from 'react-router-dom'
import Pacientes from '../Pacientes/Pacientes';
import Veterinarios from '../Veterinarios/veterinarios'
import Home from '../Home/Home';

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = collapsed => {
      console.log(collapsed);
      setCollapsed(collapsed);
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ fontSize: '16px'}}>
            <Menu.Item key="1" icon={<FaHome  style={{ fontSize: '18px'}}/>} >
              <Link to='/'>Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FaHandHoldingMedical style={{ fontSize: '18px'}} />  } >
              <Link to='/veterinarios'>Veterinarios</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FaDog style={{ fontSize: '18px'}} />}>
            <Link to='/pacientes'>Paciente</Link>
            </Menu.Item>
            {/* <Menu.Item key="4" icon={<FaUserPlus  style={{ fontSize: '18px'}}/>}>
            <Link to='/newusers'>Nuevos Usuarios</Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/veterinarios" element={<Veterinarios/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
                {/* <Route path="/newusers" element={<NewUsers/>}/> */}
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2022 Created by Los 4 Fantasticos</Footer>
        </Layout>
      </Layout>
    )
}

export default Sidebar