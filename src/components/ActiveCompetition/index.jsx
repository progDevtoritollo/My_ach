import React from "react";
import { Table as BaseTab, Typography } from "antd";

import "./ActiveCompetition.scss";

const columns = [
  {
    title: "Number",
    dataIndex: "num",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "желтый",
    dataIndex: "yellow",
  },
  {
    title: "красный",
    dataIndex: "red",
  },
  {
    title: "синее",
    dataIndex: "blue",
  },
  {
    title: "черное",
    dataIndex: "black",
  },
  {
    title: "белое",
    dataIndex: "white",
  },
  {
    title: "мимо",
    dataIndex: "miss",
  },
  {
    title: "статистика",
    dataIndex: "midlestatus",
  },
];

const data = [
  {
    key: "1",
    num: "1",
    name: "Jennifer Connelly",
    yellow: "27%",
    red: "12%",
    blue:"12%",
    black: "21%",
    white: "18%",
    miss: "10%",
    midlestatus: 245,
  },
  {
    key: "2",
    num: "2",
    name: "Дзюба Ярослав",
    yellow: "25%",
    red: "4%",
    blue:"6%",
    black: "14%",
    white: "26%",
    miss: "25%",
    midlestatus: 175,
  },
  {
    key: "3",
    num: "3",
    name: "Семочко Бронислав",
    yellow: "26%",
    red: "14%",
    blue:"11%",
    black: "20%",
    white: "22%",
    miss: "7%",
    midlestatus: 210,
  },
  {
    key: "4",
    num: "4",
    name: "Семочко Бронислав",
    yellow: "6%",
    red: "25%",
    blue:"26%",
    black: "25%",
    white: "4%",
    miss: "14%",
    midlestatus: 229,
  },
  {
    key: "5",
    num: "5",
    name: "Гаврилов Артём",
    yellow: "12%",
    red: "10%",
    blue:"27%",
    black: "21%",
    white: "18%",
    miss: "12%",
    midlestatus: 196,
  },
  {
    key: "6",
    num: "6",
    name: "Ефимова Рада",
    yellow: "22%",
    red: "20%",
    blue:"11%",
    black: "26%",
    white: "7%",
    miss: "14%",
    midlestatus: 251,
  },
  {
    key: "7",
    num: "7",
    name: "Исаева Злата",
    yellow: "20%",
    red: "26%",
    blue:"14%",
    black: "11%",
    white: "22%",
    miss: "7%",
    midlestatus: 287,
  },
  {
    key: "8",
    num: "8",
    name: "Моисеенко Дарья",
    yellow: "25%",
    red: "4%",
    blue:"6%",
    black: "14%",
    white: "26%",
    miss: "25%",
    midlestatus: 272,
  },
  {
    key: "9",
    num: "9",
    name: "Игнатьев Юрий",
    yellow: "6%",
    red: "25%",
    blue:"26%",
    black: "4%",
    white: "14%",
    miss: "25%",
    midlestatus: 261,
  },
  {
    key: "10",
    num: "10",
    name: "Щербак Юна",
    yellow: "22%",
    red: "22%",
    blue:"7%",
    black: "26%",
    white: "14%",
    miss: "11%",
    midlestatus: 234,
  },
];

const ActiveCompetition = (props) => {
  return (
    <div className="midle__competition__active">
      {/* <div>{props.data.name}</div> */}
      <>
        <BaseTab
          columns={columns}
          dataSource={data}
          pagination={true}
          bordered
        />
      </>
      ); };
    </div>
  );
};

export default ActiveCompetition;
