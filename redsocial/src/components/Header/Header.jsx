import React, { Component } from 'react';
import './Header.scss';
import Search  from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';
// import { connect } from "react-redux";
import { logout } from '../../redux/actions/users';
// import Search  from '../SearchBar/SearchBar'
import { Badge } from 'antd';
import { BellFilled, MessageFilled, CrownFilled } from '@ant-design/icons';

class Header extends Component {

    render(){
        console.log(this.props.user)
        return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            {/* <div class="navbar-brand">
                <NavLink to="/home" exact class="navbar-item">
                <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" width="28" height="28"/>
                </NavLink>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div> */}

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <NavLink to="/home" exact class="navbar-item">
                        <img src="https://i.pinimg.com/originals/0d/ea/4a/0dea4ad3030467e2f65cde00935ba62b.png" width="22" height="22"/>
                    </NavLink>
                    <NavLink to="/home" exact class="navbar-item">
                        Inicio
                    </NavLink>

                    <NavLink to="/home" exact class="navbar-item">
                        Siguiendo
                    </NavLink>
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
                        
                        <div class="dropdown is-right is-active">
                            <div class="dropdown-trigger">
                                {/* <button class="button" aria-haspopup="false" aria-controls="dropdown-menu6"> */}
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="false"></i>
                                </span>
                                {/* </button> */}
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                                <div class="dropdown-content" style={{ textAlign:"center" }}>
                                    <div class="dropdown-item">
                                        <a>
                                            <NavLink type="link" to="/profile">Perfil</NavLink>
                                        </a>
                                    </div>
                                    <hr class="dropdown-divider"/>
                                    <a>
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