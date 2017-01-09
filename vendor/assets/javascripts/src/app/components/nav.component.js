import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavComponent = () =>
  <nav>
    <ul>
      <li><IndexLink to="/" activeClassName="link__active">Children 1</IndexLink></li>
      <li><Link to="/children2" activeClassName="link__active">Children 2</Link></li>
    </ul>
  </nav>
export default NavComponent;
