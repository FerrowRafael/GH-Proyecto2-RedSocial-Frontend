import React, { Component } from 'react'
import { Form, Input, Button, notification } from 'antd';
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
        this.emailInput.current.focus();
    }
    closeModal = () => this.setState({ showModal: false });

    onFinish = user => {
        console.log(user)
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
                <Form
                    className="registerForm"
                    {...layout}
                    onFinish={this.onFinish}
                    onFinishFailed={console.error} >
                    <Form.Item
                        label="Nombre de Usuario"
                        name="nickname"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'El email es requerido' }]}
                    >
                        <Input ref={this.emailInput} />
                    </Form.Item>
                    {/* <button onClick={() => this.setState({ showModal: true })}>Mostrar modal</button>
                    {this.state.showModal && <Modal closeModal={() => this.setState({ showModal: false })} />}
                    <button onClick={props.closeModal}>X</button> */}

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'La contraseña es requerida' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Darse de alta
              </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}
export default Register;