import React, {Component} from 'react'
import { connect } from "react-redux";
import { Row } from 'antd';

class Profile extends Component{

    
    render(){
        console.log(this.props.users?.nickname)
    
    return (
        <div>
            <div>
                <h2>Soy un Perfil</h2>
                <p>{this.props.user?.nickname}</p>
                <p>Seguidores</p>
                <p>Siguiendo</p>
                <p>IMAGEN PERFIL</p>
            </div>
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