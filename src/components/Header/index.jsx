import React from "react";

// import Avatar from "components";
import './Header.scss';
import Avatar from "../Avatar";

const user={
  _id:"7DD987F846400079F4B03C058365A4869047B4A0",
  fullname: "Jennifer Connelly",
  avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQStZ0WyaS4u8PdeiG3euNpt12ZuHDMlyHAcQU3Zr64kte9oxIW&usqp=CAU",
};

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
        <div className="header__right__profile--avatar">
          <Avatar user={user}/>
        </div>
        <div className="header__right__profile--fullname"> {user.fullname} </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
