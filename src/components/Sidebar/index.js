import React from "react";
import { Empty } from "antd";

import "./Sidebar.scss";
import { CardItem } from "../";

const user = {
  _id: "7DD987F846400079F4B03C058365A4869047B4A0",
  fullname: "Jennifer Connelly",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0Q2UWfXtTeWHJmOGJw5pS8gSeZIIVP1ydFmbtbfyjJdk-FbJk&usqp=CAU",
};
let date = "Sun Apr 21 2019 21:30:07";
let event = "Добавилa серию";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__name">Recently activity</div>
      <div className="header__left__seaching">searching...</div>
      <div className="sidebar__cards">
        <CardItem event={event} date={date} user={user} />
        <CardItem event={event} date={date} user={user} />
        <CardItem event={event} date={date} user={user} />
      </div>
    </div>
  );
};

export default Sidebar;
