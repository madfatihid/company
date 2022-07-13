/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [hide, setHide] = useState(true);
  const toggle = () => setHide(!hide);
  return (
    <div className="navbar">
      <div className="navbar-container row spacing">
        <div>
          <h1>Company</h1>
          <a href="#" className="toggle" onClick={toggle}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <div class={hide ? 'hide' : ''}>
          <div className="dropdown">
            <a href="#">ABOUT</a>
            <div className="dropdown-content">
              <a href="#">HISTORY</a>
              <a href="#">VISION MISION</a>
            </div>
          </div>
          <a href="#">OUR WORK</a>
          <a href="#">OUR TEAM</a>
          <a href="#">CONTACT</a>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
