import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/directors">Directors</NavLink></li>
      <li><NavLink to="/actors">Actors</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
