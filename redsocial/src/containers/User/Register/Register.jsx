import React, { Component, Fragment } from 'react'
import { Form, Input, Button, notification, Col, Card } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './Register.scss';
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
                this.props.history.push('/login')//this.router.navigate(['/ ]) en angular
            })
            .catch(console.error)
    };
    render() {
        return (
            <main>
                <Fragment>
                <Col className="registerContainer">
                    <Card>
                        <div>
                            <div >
                                <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" alt="" margin="10px" width="40" />
                                <h2>Bienvenido a Pinterest</h2>
                                <h3>Encuentra nuevas ideas para probar</h3>
                            </div>
                            <div className="formRegister">
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
                                            <button width="100px" htmlType="submit" className="register-form-button">
                                            <strong>Continuar</strong>
                                            </button>
                                        </Col>
                                        <div>O</div>
                                        <Col>
                                            <button width="100px" htmlType="submit" className="facebook-form-button">
                                            <strong>Continuar con Facebook</strong>
                                            </button>
                                        </Col>
                                        <Col>
                                            <button margin="0px"width="100px" htmlType="submit" className="google-form-button">
                                            <strong >Continuar con Google</strong>
                                            </button>
                                        </Col>
                                        <Col>
                                            <p>Al continuar, aceptas los <b>Términos del servicio</b>, la <br/><b>Política de privacidad</b> y el <b>uso de cookies</b> de <br/> Pinterest.</p>
                                        </Col>
                                        <hr style={{borderBottom:"1px solid #DEDEDE", margin: "10px auto", width: "110px"}}/>
                                        <Col>
                                            <NavLink font-size="12px" color="black"to="/login" exact>¿Ya eres miembro? Inicia sesión</NavLink>
                                        </Col>
                                        
                                    </Form.Item>
                            </Form>
                            </div>
                        </div>    
                    </Card>
                </Col>
            </Fragment>
        </main>
        );
    }

}
export default Register;