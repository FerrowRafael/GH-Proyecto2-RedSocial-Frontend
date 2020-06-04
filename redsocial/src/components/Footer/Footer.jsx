import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer >
          <NavLink className="Footer"to="/pin-builder" exact>
            <Badge >
              <PlusCircleOutlined style={{ fontSize: '32px' }} />
            </Badge>
          </NavLink>
        </footer>
    )
}
export default Footer;


