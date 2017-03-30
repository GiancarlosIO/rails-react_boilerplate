import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () =>
  <nav>
    <ul>
      <li><NavLink to="/" activeClassName="link__active">App</NavLink></li>
      <li><NavLink to="/children1" activeClassName="link__active">Children 1</NavLink></li>
      <li><NavLink to="/sdasdasdsad" activeClassName="link__active">Notfound 2</NavLink></li>
    </ul>
  </nav>
export default NavComponent;
