import React, {Component} from 'react'
import { connect } from "react-redux";
import { Row, Badge } from 'antd';
import { PlusCircleOutlined, EditFilled, UploadOutlined } from '@ant-design/icons';

class Profile extends Component{

    render(){
        console.log(this.props.users?.nickname)
    
    return (
        <div className="profile">
            <div>
                <Row>
                    <Badge>
                        <PlusCircleOutlined style={{ fontSize: '32px' }} />
                    </Badge>
                    <Badge>
                        <EditFilled style={{ fontSize: '32px' }} />
                    </Badge>
                    <Badge>
                        <UploadOutlined style={{ fontSize: '32px' }} />
                    </Badge>
                </Row>
            </div>
            <Row>
                <div>
                    <p>{this.props.user?.nickname}</p>
                    <Row>
                        <p>XX Seguidores</p>
                        <p>Siguiendo a XX</p>  
                    </Row>
                </div>
                <div>
                    <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt=""/>
                </div>
            </Row>
            <Row>
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