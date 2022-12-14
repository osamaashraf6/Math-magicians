import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container">
          <div className="nav__container__parnav">
            <ul className="nav__container__parnav__ul">
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/calculation">Calculator</NavLink></li>
              <li><NavLink to="/quote">Quote</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
