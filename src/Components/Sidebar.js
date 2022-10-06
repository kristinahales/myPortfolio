import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link } from "react-router-dom";
import './CSS/Sidebar.css';


export default props => {
  return (
    <Menu>
        <Link onClick={<Menu isOpen={ false } />} to="/" className="menu-item">Home</Link>
        <Link onClick={<Menu isOpen={ false } />}to="/Experience" className="menu-item">Experience</Link>
        <Link onClick={<Menu isOpen={ false } />}to="/Skills" className="menu-item">Skills</Link>
        <Link onClick={<Menu isOpen={ false } />}to="/Contact" className="menu-item">Contact</Link>
    </Menu>
  );
};

