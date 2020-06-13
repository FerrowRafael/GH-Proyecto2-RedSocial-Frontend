import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
          <NavLink className="footer" to="/pin-builder" exact>
            <Badge class="footer">
              <PlusCircleOutlined style={{ position: "fixed", zIndex:2,fontSize: '32px', marginTop:"40px",marginLeft:"1680px" }} />
            </Badge>
          </NavLink>
    )
}
export default Footer;