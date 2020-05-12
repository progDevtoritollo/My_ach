import React from "react";
import { Empty } from "antd";

import './SidebarHome.scss';
import { Card } from "../";

const user={
  _id:"7DD987F846400079F4B03C058365A4869047B4A0",
  fullname: "Jennifer Connelly",
  avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQStZ0WyaS4u8PdeiG3euNpt12ZuHDMlyHAcQU3Zr64kte9oxIW&usqp=CAU",
}
let date="Sun Apr 21 2019 21:30:07";
let event= "Добавилa серию";

const SidebarHome = () => {
  return (
  <div className="sidebar">
    <div className="sidebar__name">Recently activity</div>
    <div className="sidebar__cards">
      <Card
        event={event}
        date={date}
        user={user}
      />
      <Card
        event={event}
        date={date}
        user={user}
      />
      <Card
        event={event}
        date={date}
        user={user}
      />
    </div>
  </div>
  );
};

export default SidebarHome;
