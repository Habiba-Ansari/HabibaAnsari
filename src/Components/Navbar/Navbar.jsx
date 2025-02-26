import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className='dark-nav'>
      <img src={logo} className='logo' alt="Logo" />
      <ul>
        <li><a href=""><Link to="hero" smooth={true} offset={-250} duration={500}>Home</Link></a></li>
        <li><a href=""><Link to="contact" smooth={true} offset={-250} duration={500}>Ping Me On</Link></a></li>
        <li><a href=""><Link to="missions" smooth={true} offset={-250} duration={500}>Missions</Link></a></li>
        <li><a href=""><Link to="about" smooth={true} offset={-250} duration={500}>About Me</Link></a></li>
        <li><a href=""><Link to="edu" smooth={true} offset={-250} duration={500}>Education</Link></a></li>
        <li><a href=""><Link to="hobbies" smooth={true} offset={-250} duration={500}>Hobbies</Link></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

