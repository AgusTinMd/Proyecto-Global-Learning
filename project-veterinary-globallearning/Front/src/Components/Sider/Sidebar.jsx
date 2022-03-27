import { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';
import {Routes, Route, Link} from 'react-router-dom'
import Pacientes from '../Pacientes/Pacientes';
import Veterinarios from '../Veterinarios/Veterinarios'
import Home from '../Home/Home';
import NewUsers from '../NewUsers/NewUsers';
import Login from '../Login/Login';

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = collapsed => {
      console.log(collapsed);
      setCollapsed(collapsed);
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className= 'Sider' collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to='/'>Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to='/veterinarios'>Veterinarios</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
            <Link to='/pacientes'>Paciente</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
            <Link to='/newusers'>Nuevos Usuarios</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/veterinarios" element={<Veterinarios/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
                <Route path="/newusers" element={<NewUsers/>}/>
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>UWU ©2018 Created by OWO</Footer>
        </Layout>
      </Layout>
    )
}

export default Sidebar