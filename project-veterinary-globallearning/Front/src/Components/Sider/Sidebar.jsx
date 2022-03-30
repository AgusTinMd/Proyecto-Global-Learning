import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {FaHandHoldingMedical, FaDog, FaUserPlus, FaHome} from 'react-icons/fa'

import {Routes, Route, Link, Outlet} from 'react-router-dom'

import useAuth from '../../hooks/useAuth';

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {

  const { auth } = useAuth();

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
              <Link to='/home'>Inicio</Link>
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
              <Breadcrumb.Item>{auth.userName}</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2022 Created by Los 4 Fantasticos</Footer>
        </Layout>
      </Layout>
    )
}

export default Sidebar