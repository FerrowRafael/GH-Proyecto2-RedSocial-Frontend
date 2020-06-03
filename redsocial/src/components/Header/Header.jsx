import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
// import { connect } from "react-redux";
import { logout } from '../../redux/actions/users';
// import Search  from '../SearchBar/SearchBar'
import { Input, Badge } from 'antd';
import { BellFilled, MessageFilled, CrownFilled, ZoomInOutlined } from '@ant-design/icons';

class Header extends Component {

    render(){
        console.log(this.props.user)
        return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <NavLink to="/home" exact class="navbar-item">
                <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" width="28" height="28"/>
                </NavLink>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <NavLink to="/home" exact class="navbar-item">
                        Inicio
                    </NavLink>

                    <NavLink to="/home" exact class="navbar-item">
                        Siguiendo
                    </NavLink>
                </div>
                <div class="navbar-center">
                    <div class="navbar-item">
                        <div class="control">
                            <Input prefix={<ZoomInOutlined />} $blue class="input" type="text" placeholder="Buscar"/>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div className="navbar-item">
                                <NavLink to="/carrito" exact>
                                    <Badge >
                                        <BellFilled style={{ fontSize: '32px' }} />
                                    </Badge>
                                </NavLink>
                                <NavLink to="/profile" exact>
                                    <Badge >
                                        <MessageFilled style={{ fontSize: '32px' }} />
                                    </Badge>
                                </NavLink>
                                <NavLink to="/profile" exact>
                                    <Badge>
                                        <CrownFilled style={{ fontSize: '32px' }} />
                                    </Badge>
                                </NavLink>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            Perfil
                            </a>
                        
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Profile
                            </a>
                            <a class="button is-primary">
                                <NavLink type="link" onClick={logout} to="/home">Logout</NavLink>
                            </a>
                        </div>
                    </div>
                    {/* <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div> */}
                </div>
                </div>
            </div>
        </nav>
        )
    }
}
export default Header;
    // const mapStateToProps = (state) => ({ user: state.user})
    // export default connect(mapStateToProps)(Header);