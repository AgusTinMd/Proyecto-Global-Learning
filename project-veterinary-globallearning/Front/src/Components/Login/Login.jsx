import { Form, Input, Button, Checkbox, Row, Card, Col } from 'antd';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export default function Login(){
  
  let navigate = useNavigate();
  const { setAuth } = useAuth();
  
  const onFinish = async (values) => {
    try{
      const response = await axios.post(`http://localhost:8080/veterinaryApi/users/login`, values);
      const data = response?.data;
      setAuth({userName: values.userName, token: data.token});
      navigate('/home', {replace: true});
    }
    catch (err){
      
    }
  
      console.log('Success:');
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


    return (
      <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
      <Col>
        <Card>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Usuario"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su nombre de usuario',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese su contraseña',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Recuerde su contraseña</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
          </Form.Item>
        </Form>
        </Card>
      </Col>
        </Row>
      );
};