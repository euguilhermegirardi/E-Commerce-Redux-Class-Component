import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.png';

const Header = props => (
    <nav className="container">
      <ul>
        <li>
          <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
        </li>

        <li>
          <NavLink className="link" to="/products">My Cart ({ props.cartItemNumber })</NavLink>
        </li>
      </ul>
    </nav>
);

export default Header;
