import React, { Component, Fragment } from 'react'
import axios from "axios";
// import { useParams, NavLink } from 'react-router-dom';
import { Form, Input, Button, notification, Col, Card, Row } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import './PinBuilder.scss'
import { connect } from "react-redux";
import { categoriesAll } from "../../redux/actions/categories"; 

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class PinBuilder extends Component {

    componentDidMount() {
        categoriesAll();
    }

    onFinish = post => {
        axios.post('http://localhost:8000/api/v1/posts', post,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem('authToken')
            }
        })
            .then(() => {//como subscribe en angular
                notification.success({ message: 'Post creado con éxito' });
                this.props.history.push('/home')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };

    
    render(){
        return(
                <Card className="tarjeta" justify style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '35px', width: '800px', height:"570px", marginLeft: "470px" }}>
                    <form className="form-horizontal" enctype="multipart/form-data">
                        <fieldset>
                        <div class="columns">
                            <div>
                                <div></div>
                                <Card  style={{ height: "450px", width:"320px", backgroundColor:"#EFEFEF"}}class="file column">
                                    <label class="file-label">
                                        <input class="file-input" type="file" name="filebutton-0" onchange="if (this.files.length > 0) document.getElementById('filename-filebutton-0').innerHTML = this.files[0].name;"/>
                                            <span class="file-cta">
                                                <span class="file-icon">
                                                    <i class="fa fa-upload"></i>
                                                </span>
                                                <span class="file-label" id="filename-filebutton-0">
                                                    Agrega aquí el archivo <br/>que deseas adjuntar
                                                </span>
                                            </span>
                                    </label>
                                
                                </Card>
                             
                            </div>
                            <div class="column">
                                <div style={{display: "flex", justifyContent:"flex-end"}}class="field">
                                    <Row>
                                        <div class="navbar-item has-dropdown is-hoverable">
                                            <a class="navbar-link">
                                                Seleccionar
                                            </a>
                                            <div class="navbar-dropdown">
                                                {(this.props.categories)?.map(category => <a class="navbar-item"> {category?.name}</a>)}
                                            </div>
                                        </div>
                                        <button width="100px" htmlType="submit" className="guardar-form-button">
                                        <strong>Guardar</strong>
                                        </button>
                                    </Row>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <input id="textinput-0" name="textinput-0" type="text" placeholder="Añade un título" class="input is-large"/>
                                    </div>
                                </div> 
                                <div>
                                    <p>{this.props.user.nickname}</p>
                                </div>

                                <div class="field">
                                    <div class="control">
                                        <input id="image_path" name="image_path" type="text" placeholder="Explica en que consiste tu pin" class="input"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        </fieldset>
                    </form>
                </Card>
                    
    
        )
    }
}


const mapStateToProps = (state) => ({ categories: state.categories, user: state.user })
export default connect(mapStateToProps)(PinBuilder);