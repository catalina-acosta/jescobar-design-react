import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  },  [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <h1 className='logo-small'>jeronimo escobar <span>design</span></h1>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className='navbar-elements'>
        <div className='links'>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
          <Link to="/projects"><h1 className='logo'>jeronimo escobar <span>design</span></h1></Link>
      </div>
    </div>
  )
}

export default Navbar
