import React, { Component } from 'react'
import { Form, Input, Button, notification, Col } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './Register.scss';
import { API_URL } from '../../../api-config';
import axios from 'axios';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class Register extends Component {
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        // this.state = {
        //     showModal: false
        // }
    }
    componentDidMount() {
        // this.emailInput.current.focus();
    }
    closeModal = () => this.setState({ showModal: false });

    onFinish = user => {
        axios.post('http://localhost:8000/api/v1/users/register', user)
            .then(() => {//como subscribe en angular
                notification.success({ message: 'Usuario creado con éxito' });
                this.props.history.push('/login')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };
    render() {
        return (
            <div className="registerContainer">
                <div>
                    <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" alt="" width="100" />
                    <h2>Bienvenido a Pinterest</h2>
                    <p>Encuentra nuevas ideas para probar</p>
                </div>
                
                <Form
                    className="registerForm"
                    {...layout}
                    onFinish={this.onFinish}
                    onFinishFailed={console.error} >
                    <Form.Item
                        name="nickname"
                        rules={[{ required: true, message: 'El nombre de usuario es requerido' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
                    </Form.Item>
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
                            <Button type="primary" htmlType="submit">
                                Registrarse
                            </Button>
                        </Col>
                        <Col>
                            <NavLink to="/login" exact>¿No eres tú? Inicia sesión con otra cuenta</NavLink>
                        </Col>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}
export default Register;