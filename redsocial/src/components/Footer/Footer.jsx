import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
      <NavLink to="/pin-builder" exact>
        <Badge >
          <PlusCircleOutlined style={{ position: "fixed", zIndex:1,fontSize: '32px', marginTop:"40px",marginLeft:"1680px", wordWrap: 'break-word' }} />
        </Badge>
      </NavLink>
    )
}
export default Footer;