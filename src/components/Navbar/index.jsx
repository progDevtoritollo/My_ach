import React from "react";
import {NavLink} from "react-router-dom";
import plus from "assets/img_my/button_plus.svg";
import logo from "assets/img_my/Aj.svg";

import './Navbar.scss';

const Navbar = () => {
  return (
      <div className = "navbar">
        <img className="navbar__logo" src={logo} alt="logo"></img>
        <img className="navbar__plus" src={plus} alt="Plus"></img>
        <NavLink className="link" to="/dashbord"><i class="fas fa-user"></i></NavLink>
        <NavLink className="link" to="/table"><i class="fas fa-user-friends"></i></NavLink>
        <NavLink className="link" to="/training"><i class="fas fa-yin-yang"></i></NavLink>
        <NavLink className="link" to="/competitions"><i class="fas fa-trophy"></i></NavLink>
        <NavLink className="link" to="/duel"><i className="limk" class="fas fa-crosshairs"></i></NavLink>
    </div>
  );
};

export default Navbar;
