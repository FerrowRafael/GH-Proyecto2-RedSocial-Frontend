import React, { Component } from 'react';
import './Header.scss';
import Search  from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions/users';
import { Badge } from 'antd';
import { BellFilled, MessageFilled, CrownFilled } from '@ant-design/icons';

class Header extends Component {

    render(){
        console.log(this.props.user)
        return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <p class="navbar-item">
                        <NavLink to="/home" exact >
                            <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" width="22" height="22"/>
                        </NavLink>
                    </p>
                    <p class="navbar-item">
                        <NavLink to="/home" exact>
                            Inicio
                        </NavLink>
                    </p>
                    <p class="navbar-item">
                        <NavLink to="/home" exact class="navbar-item">
                            Siguiendo
                        </NavLink>
                    </p>
                </div>
                <div className="search">
                    <Search/>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div className="navbar-item badgeEnlace">
                            <Badge >
                                <BellFilled style={{ fontSize: '32px' }} />
                            </Badge>        
                            <Badge >
                                <MessageFilled style={{ fontSize: '32px' }} />
                            </Badge>                    
                            <NavLink to="/profile" exact>
                                <Badge>
                                    <CrownFilled style={{ fontSize: '32px' }} />
                                </Badge>
                            </NavLink>
                        </div>
                        
                        

                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                
                                </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        <NavLink type="link" to="/profile">Perfil</NavLink>
                                    </a>
                                    <a class="navbar-item">
                                        <NavLink type="link" onClick={logout} to="/">Salir</NavLink>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
}
export default Header;