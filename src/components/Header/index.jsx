import React from "react";

import Avatar from "components"
import './Header.scss'

const Header = () => {
  return (
  <div className="header">
    <div className="header__left">
      <div className="header__left__name-page">
        Dashbord
      </div>
      <div className="header__left__seaching">
        searching...
      </div>
    </div>
    
    <div className= "header__right">
      <div className="header__right--bell">
        <i class="fas fa-bell"></i>
      </div>

      <div className="header__right__profile">
        <div className="header__right__profile--picture">
          {/* <Avatar user={user}/> */}
        </div>
        <div className="header__right__profile--user-name"> name </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
