import React from 'react';
import './Footer.scss';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Input, Badge } from 'antd';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="Footer">
        <div className="wrap">
          <div className="row top">
            <div className="col-8">
              <h3>Datos Contacto</h3>
                <ul>
                    <li>Correo: shybuytshirts@gmail.com</li>
                    <li>Tlfn: 612345678</li>
                    <li>C/ Falsa 123</li>
                </ul>
             </div>
            <div className="col-8">
                <h3>Navegación</h3>
            <ul>
                <li>Home</li>
                <li>Busquedas</li>
                <li>Carrito</li>
                <NavLink to="/pin-builder" exact>
                  <Badge >
                    <PlusCircleOutlined style={{ fontSize: '32px' }} />
                  </Badge>
                </NavLink>
            </ul>
            </div>
          </div>
         </div>
        </footer>
    )
}

export default Footer;


