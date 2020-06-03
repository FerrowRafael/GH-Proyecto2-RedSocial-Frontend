import React, {Component} from 'react'
import './Profile.scss';
import { connect } from "react-redux";
import { Row, Badge, Col } from 'antd';
import { PlusCircleOutlined, EditFilled, UploadOutlined } from '@ant-design/icons';

class Profile extends Component{

    render(){
        console.log(this.props.users?.nickname)
    
    return (
        <div className="profileContainer">
            <div className="badges columns">
                <Col span={12}>
                    <Badge>
                        <PlusCircleOutlined style={{ fontSize: '32px' }} />
                    </Badge>
                    <Badge>
                        <EditFilled style={{ fontSize: '32px' }} />
                    </Badge>
                    <Badge>
                        <UploadOutlined style={{ fontSize: '32px' }} />
                    </Badge>
                </Col>
                <Col span={12}></Col>
            </div>
            <Row className="profileData">
                <div>
                    <h1>{this.props.user?.nickname}</h1>
                    <Row>
                        <p>XX Seguidores</p>
                        <p>Siguiendo a XX</p>  
                    </Row>
                </div>
                <div>
                    <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                </div>
            </Row>
            <Row className="tableros">
                <p>Tableros</p>
                <p>Pines</p>
                <p>Seguidores</p>
                <p>Seguidos</p>
                <p>Temas (categorias)</p>
            </Row>
        </div>
    )
}
}

const mapStateToProps = (state) => ({ user: state.user, cart: state.cart })
export default connect(mapStateToProps)(Profile);