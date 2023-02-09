/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
// NavBar.jsx
import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav className='navbar'>
    <ul>
      <li>
        <a href='#'>Accueil</a>
      </li>
      <li>
        <a href='#'>À propos</a>
      </li>
      <li>
        <a href='#'>Contact</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
