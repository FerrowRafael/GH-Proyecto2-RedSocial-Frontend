import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
// import { connect } from "react-redux";
// import { logout } from '../../redux/actions/users';
// import Search  from '../SearchBar/SearchBar'

class Header extends Component {

    render(){
        console.log(this.props.user)
        return (
            
            <header className="header">
            
                <div className="leftHeader">
                    <NavLink to="/home"><h3>Pinterest</h3></NavLink>
                    <NavLink to="/home" exact>Home</NavLink>
                    {/* <NavLink to="/results" exact>Products</NavLink> */}
                </div>
                
                {/* <div className="search">
                    <Search/>
                </div> */}
                
                {this.props.user ?
                <div className="userZone">
                    <NavLink to="/" exact><small>Bienvenido,</small> {this.props.user.userName}</NavLink>   
                    {/* <NavLink type="link" onClick={logout} to="/home">Logout</NavLink> */}
                </div>
                :
                <div className="guestZone">
                    <NavLink to="/profile" exact>Perfil</NavLink>
                    <NavLink to="/register" exact>Registro</NavLink>
                    <NavLink to="/login" exact>Login</NavLink>
                </div>
            }
            
            </header>

            
        )
    }
}

export default Header;
    // const mapStateToProps = (state) => ({ user: state.user})
    // export default connect(mapStateToProps)(Header);