import React, { useRef, useEffect, Fragment } from 'react'
import { Form, Input, Button, Checkbox, Col, notification, Card } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
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
        history.push('/home') 
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
        <Fragment>
            <main>
                <Col className="loginContainer">
                    <Card>
                        <div>
                            <div >
                                <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" alt="" margin="10px" width="40" />
                                <h2>Bienvenido a Pinterest</h2>
                            </div>
                            <div className="formLogin">
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
                                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Correo" />
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
                                            <button width="100px" htmlType="submit" className="login-form-button">
                                            <strong>Login</strong>
                                            </button>
                                        </Col>
                                        <p>O</p>
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
                                            <NavLink font-size="12px" color="black"to="/register" exact>¿Aún no estás en Pinterest? Regístrate</NavLink>
                                        </Col>
                                        
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>    
                    </Card>
                </Col>
            </main>
        </Fragment>
    );
}
export default Login;