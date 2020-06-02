import React, {Component} from 'react'
import { connect } from "react-redux";
import { Row, Col, Button, Card } from 'antd';
import './Inicio.scss'

class Inicio extends Component{

    
    render(){
        console.log(this.props.users?.nickname)
    
    return (
        <Col className="InicioContainer">
            <Card>
                <div>
                    <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" alt="" width="40" />
                    <h2>Bienvenido a Pinterest</h2>
                    <p> Encuentra nuevas ideas para probar </p>
                </div>
                <div className="buttonInicio">
                    <Button className="login" red-6 type="primary" htmlType="submit">
                        <strong>Iniciar Sesión</strong>
                    </Button>
                    <Button className="registro"type="primary" htmlType="submit">
                    <strong>Registrarse</strong>
                    </Button>
                </div>
                
            </Card>
        </Col>
    )
}
}

export default Inicio;