import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { DarkModeContext } from '../utils/DarkModeContext';
import DarkModeToggle from "./DarkModeToggle";
const Header = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    
    <nav className="navbar navbar-expand-sm navbar-light p-3 sticky-top "  style={isDarkMode?{ background:"white",boxShadow:" 0px 12px 12px -15px rgba(0,0,0,0.2)"}:{background:"rgb(24,24,24)",boxShadow:" 0px 12px 12px -15px rgba(0,0,0,0.2)"}}>
      <div className="container px-5">
        <Link className="navbar-brand" to="/"><img src="https://1000logos.net/wp-content/uploads/2022/11/Shopee-Food-Logo.png" style={{height:"40px"}}/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="mynavbar">
          <ul className="navbar-nav gap-4">
            <li className="nav-item"  >
              <Link className={isDarkMode?" headLink_light":"headLink_dark"} style={{textDecoration:"none"}} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={isDarkMode?" headLink_light":"headLink_dark"} style={{textDecoration:"none"}} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={isDarkMode?" headLink_light":"headLink_dark"} style={{textDecoration:"none"}} to="/contact">Contact</Link>
            </li>
            <div>
              <DarkModeToggle/>
            </div>
          </ul>
          
        </div>
      </div>
    </nav>

  );
}
export default Header;