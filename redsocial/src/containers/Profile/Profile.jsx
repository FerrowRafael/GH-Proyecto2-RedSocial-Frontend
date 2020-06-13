import React, {Component} from 'react'
import './Profile.scss';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Row, Badge, Col } from 'antd';
import { PlusCircleOutlined, EditFilled, UploadOutlined } from '@ant-design/icons';

class Profile extends Component{

    render(){
        console.log(this.props.user?.nickname)
        console.log(this.props.user?.image_path)
    return (
        <div className="profileContainer">
            <div className="badges columns">
                <Col span={8}>
                    <NavLink to="/pin-builder" exact class="navbar-item">
                        <Badge>
                            <PlusCircleOutlined style={{ fontSize: '32px' }} />
                        </Badge>
                    </NavLink>
                    <NavLink to="/home" exact class="navbar-item">
                        <Badge>
                            <EditFilled style={{ fontSize: '32px' }} />
                        </Badge>
                    </NavLink>
                    <NavLink to="/home" exact class="navbar-item">
                        <Badge>
                            <UploadOutlined style={{ fontSize: '32px' }} />
                        </Badge>
                    </NavLink>
                </Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
            </div>
            <Row className="profileData">
                <div>
                    <h1>{this.props.user?.nickname}</h1>
                    <Row>
                        <p>XX Seguidores </p>
                        <p>&nbsp; . &nbsp;</p>
                        <p> Siguiendo a XX</p>  
                    </Row>
                </div>
                <div>
                    <img width="100px" src={this.props.user?.image_path} alt=""/>
                </div>
            </Row>
            <Row className="tableros">
                <p>Tableros</p>
                <p>Pines</p>
                <p>Seguidores</p>
                <p>Seguidos</p>
                <p>Categorias</p>
            </Row>
            <div className="numSeg">XX seguidores</div>
            <div className="seguidores">
                <Row style={{marginBottom: "15px"}} class="seguidor">
                    <Row>
                        <img width="65px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                        <p>Nickname lider</p>
                    </Row>
                    <button width="65px">Seguir</button>
                </Row>
                <Row style={{marginBottom: "15px"}} class="seguidor">
                    <Row>
                        <img width="65px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                        <p>Nickname lider</p>
                    </Row>
                    <button width="30px">Seguir</button>
                </Row>
                <Row style={{marginBottom: "15px"}} class="seguidor">
                    <Row>
                        <img width="65px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                        <p>Nickname lider</p>
                    </Row>
                    <button width="65px">Seguir</button>
                </Row>
                <Row style={{marginBottom: "15px"}} class="seguidor">
                    <Row>
                        <img width="65px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                        <p>Nickname lider</p>
                    </Row>
                    <button width="30px">Seguir</button>
                </Row>
            </div>
            
        </div>
    )
    }
}

const mapStateToProps = (state) => ({ user: state.user, cart: state.cart })
export default connect(mapStateToProps)(Profile);