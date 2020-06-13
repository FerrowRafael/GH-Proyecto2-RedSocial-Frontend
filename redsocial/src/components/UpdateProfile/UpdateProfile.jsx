import React, { Component, Fragment } from 'react'
import './UpdateProfile.scss'
import axios from 'axios';
import { Form, Input, Button, Select, Col, Row, notification } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import FormItem from 'antd/lib/form/FormItem';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    onFinish = user => {
        console.log(user)
        user={
            name:"Pepe",
            surname:"Martinez"
        }
        console.log(user)
        axios.put(`http://localhost:8000/api/v1/users`, user, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('authToken')
            }
        })
            .then(() => {
                notification.success({ message: 'Usuario modificado con éxito' });
                this.props.history.push('/profile')
            })
            .catch(console.error)
    };
    
    render(){
        return(
            <Fragment>
                <Form style={{marginTop:"60px", width:"550px", marginLeft:"600px"}}
                    className="updateForm"
                    {...layout}
                    onFinish={this.onFinish}
                    onFinishFailed={console.error} >
                    <Form.Item {...tailLayout}>
                        <Row className="topEditProf">
                            <div>
                                <h2>Editar Perfil</h2>
                                <p>Los usuarios de Pinterest te conocerán a través de la <br/>siguiente información</p>    
                            </div>  
                            <Button htmlType="submit">
                                Hecho
                            </Button>
                        </Row>   
                    </Form.Item>
                    <Form.Item>  
                        <img width="70px" src={this.props.user?.image_path} alt=""/>    
                    </Form.Item>
                    <Row style={{display:"flex", justifyContent:"center"}}>
                        <Form.Item name="name">
                            Nombre
                            <Input className="site-form-item-icon inputNomAp" value="pepe" placeholder="Ej. Pepe" />
                        </Form.Item>
                        <Form.Item name="surname">
                            Apellidos
                            <Input width="100px" className="site-form-item-icon inputNomAp" placeholder="Ej. Martinez" />
                        </Form.Item>
                    </Row>
                    <Form.Item name="password">
                        Contraseña
                        <Input width="100px" className="site-form-item-icon inputPass" type="password" placeholder="Contraseña"
                        rules={[{ required: true, message: 'La contraseña es requerida' }]}/>
                    </Form.Item>
                    
                </Form>
            
            </Fragment>  
        )
        
    }
    
}
// export default UpdateProfile;
const mapStateToProps = (state) => ({
    user: state.users.user,
    postDetail: state.posts.postDetail,
})
export default connect(mapStateToProps)(UpdateProfile);