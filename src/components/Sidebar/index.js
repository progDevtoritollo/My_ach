import React from "react";
import { Empty } from "antd";

import "./Sidebar.scss";
import { CardItem } from "../";
const item1 = {
  user: {
    _id: "7DD987F846400079F4B03C058365A4869047B4A0",
    fullname: "Jennifer Connelly",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0Q2UWfXtTeWHJmOGJw5pS8gSeZIIVP1ydFmbtbfyjJdk-FbJk&usqp=CAU",
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item2 = {
  user: {
    _id: "cafabb205531fb4f71353d53ebe165f5",
    fullname: "Дзюба Ярослав",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item3 = {
  user: {
    _id: "efbc5be64b66a3e5338e85fcd43c3d07",
    fullname: "Семочко Бронислав",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item4 = {
  user: {
    _id: "a428ccd5ccd78c4ad5bdcd8c7f05f",
    fullname: "Гаврилов Артём",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item5 = {
  user: {
    _id: "e8fb9437ab55143c01ac586fdeb8b289",
    fullname: "Ефимова Рада",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item6 = {
  user: {
    _id: "032ed630887769a58e310eb34971df6e",
    fullname: "Исаева Злата ",
    avatar:
      null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item7 = {
  user: {
    _id: "0f26e1dc0d6e3966f7875a260525aa3b",
    fullname: "Носкова Шанетта ",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item8 = {
  user: {
    _id: "f74db5906f2dec093b88b",
    fullname: "Игнатьев Юрий",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item9 = {
  user: {
    _id: "2ae51f60e21f54ec4a791d7abc54bf85",
    fullname: "Гриневская Мирославa",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item10 = {
  user: {
    _id: "6503836fe80dfa529a4af72c1786",
    fullname: "Моисеенко Дарья",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};
const item11 = {
  user: {
    _id: "7a7cb7dd4c7f6d02d958363bfe65e90e",
    fullname: "Дьячков Эрик ",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const item12 = {
  user: {
    _id: "6ae963e434106b4cc1f07ee271389ee8",
    fullname: "Щербак Юна ",
    avatar: null,
  },
  date: "Sun Apr 21 2019 21:30:07",
  event: "Добавилa серию",
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__name">Recently activity</div>
      {/* <div className="header__left__seaching">searching...</div> */}
      <div className="sidebar__cards">
        <CardItem item={item1} />
        <CardItem item={item2} />
        <CardItem item={item3} />
        <CardItem item={item4} />
        <CardItem item={item5} />
        <CardItem item={item6} />
        <CardItem item={item7} />
        <CardItem item={item8} />
        <CardItem item={item9} />
        <CardItem item={item10} />
        <CardItem item={item11} />
        <CardItem item={item12} />
      </div>
    </div>
  );
};

export default Sidebar;
