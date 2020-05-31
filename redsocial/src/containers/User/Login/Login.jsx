import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Col, notification } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';
import { useHistory, NavLink } from 'react-router-dom';
import { login } from '../../../redux/actions/users';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
    const emailInput = useRef(null);
    const history = useHistory();//props.history

    useEffect(() => {
        // emailInput.current.focus()
    }, [])

    const onFinish = user => {
      login(user)
      .then(()=>{
        notification.success({
            message: 'Usuario conectado éxito'
        });
        history.push('/home') //this.router.navigate(['/login]) en angular
      })
      .catch(error=>{
          console.error(error)
          notification.error({
            message: 'Credenciales inválidas',
            description:'Email y/o contraseñas no válidas'
        })
      })
    };

    return (
        <div className="loginContainer">
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'El email es requerido' }]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'La contraseña es requerida' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Contraseña"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Col>
                            <NavLink to="/home" exact>¿Olvidaste tu contraseña?</NavLink>
                        </Col>
                        <Col>
                            <Button width="100px" type="primary" htmlType="submit" className="login-form-button">
                            Login
                            </Button>
                        </Col>
                        <Col>
                            <NavLink to="/register" exact>¿Necesitas una cuenta? Regístrate ahora</NavLink>
                        </Col>
                        
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default Login;