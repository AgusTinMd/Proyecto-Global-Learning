import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
import './Sider.css'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MySider = () => {

  const [collapsed, setCollapsed] = useState(false)

const onCollapse = collapsed => {
  console.log(collapsed);
  setCollapsed(collapsed);
};

return(
  <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Pacientes
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Doctores
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Nuevos usuarios
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
              Aqui va el form
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>AMD Design ©2021 Created by uwu</Footer>
        </Layout>
      </Layout>
)

}

export default MySider