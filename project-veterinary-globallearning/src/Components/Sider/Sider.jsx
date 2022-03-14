import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
import './Sider.css'
import {
  TeamOutlined,
  HomeOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {Routes, Route, Link} from 'react-router-dom'
import Pacientes from '../Pacientes/pacientes';
import Veterinarios from '../Veterinarios/veterinarios.jsx'
import Home from '../Home/home.jsx';
import NewUsers from '../NewUsers/NewUsers';


const { Header, Content, Footer, Sider } = Layout;


const MySider = () => {

  const [collapsed, setCollapsed] = useState(false)

const onCollapse = collapsed => {
  console.log(collapsed);
  setCollapsed(collapsed);
};

return(
<header>
  <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to='/'>Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined/>}>
            <Link to='/veterinarios'>Veterinarios</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
            <Link to='/pacientes'>Pacientes</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserAddOutlined/>}>
              <Link to='/newusers'>Nuevos Usuarios</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/veterinarios" element={<Veterinarios/>}/>
                <Route path="/pacientes" element={<Pacientes/>}/>
                <Route path="/newusers" element={<NewUsers/>}/>
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>AMD Design ©2021 Created by uwu</Footer>
        </Layout>
      </Layout>
</header>
)

}

export default MySider