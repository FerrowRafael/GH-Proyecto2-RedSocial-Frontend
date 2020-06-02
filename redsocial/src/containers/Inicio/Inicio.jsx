import React, {Component} from 'react'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card } from 'antd';
import './Inicio.scss'

class Inicio extends Component{

    
    render(){
        console.log(this.props.users?.nickname)
    
    return (
        <main>
            <Col className="InicioContainer">
                <Card>
                    <div>
                        <div >
                            <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" alt="" margin="10px" width="40" />
                            <h2>Bienvenido a Pinterest</h2>
                            <p> Encuentra nuevas ideas para probar </p>
                        </div>
                        <div className="buttonInicio">
                            <NavLink to="/login" exact class="navbar-item">
                            <button className="login" red-6 htmlType="submit">
                                    <strong>Iniciar Sesión</strong>
                            </button></NavLink>
                            <NavLink to="/register" exact class="navbar-item"><button className="registro" htmlType="submit">
                                <strong>Registrarse</strong>
                            </button></NavLink>
                        </div>
                    </div>
                    
                </Card>
            </Col>
        </main>
    )
}
}

export default Inicio;