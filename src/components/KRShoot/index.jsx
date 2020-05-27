import React, { useState } from "react";
import { Table, Typography } from "antd";

import Bullet from "assets/img_my/bullet.png";
import { KRHitTable } from "components";
import { Shoot } from "containers";

import "./KRShoot.scss";

const columns = [
  {
    title: "Серия",
    dataIndex: "number",
  },
  {
    title: "Выстрелы",
    children: [
      {
        title: "Первый",
        dataIndex: "firstShot",
        key: "firstShot",
        width: 100,
      },
      {
        title: "Второй",
        dataIndex: "secondShot",
        key: "secondShot",
        width: 100,
      },
      {
        title: "Третий",
        dataIndex: "thirdShot",
        key: "thirdShot",
        width: 100,
      },
    ],
  },
];



const KRShoot = () => {
  const [bullet, setBullet] = useState([]);

  const [series, setSeries] = useState([]);
  const [currentSeries, setCurrentSeries]= useState({
    key: 1,
    number: 1,
    firstShot: null,
    secondShot: null,
    thirdShot: null,
  });

  const handleClick = (e) => {

    const item ={
      x: e.clientX - 110,
      y: e.clientY - 110,
      id: e.target.getAttribute("id"),
    };

    setBullet([
      ...bullet,
      item,
    ]);

    if (currentSeries.firstShot === null) {
      setCurrentSeries({
        ...currentSeries,
        firstShot: item.id,
    });
    } else if (currentSeries.secondShot === null) {
      setCurrentSeries({
        ...currentSeries,
        secondShot: item.id,
      });
    } else if (currentSeries.thirdShot === null) {
      setCurrentSeries({
        ...currentSeries,
        thirdShot: item.id,
      });
    } else {
      setSeries([...series, currentSeries]);
      setCurrentSeries({
        key: currentSeries.key + 1,
        number: currentSeries.number + 1,
        firstShot: null,
        secondShot: null,
        thirdShot: null,
      });
    }
  };
  const getTable = () => [...series, currentSeries];

  return (
    <div className="midle__kr" style={{ position: "absolute" }}>
      <Shoot handleClick={handleClick} />
      {bullet.map((value) => {
        return (
          <img
            style={{ position: "absolute", left: value.x, top: value.y }}
            src={Bullet}
            width={40}
            alt="bullet"
          />
        );
      })}
      <div className="midle__kr__table">
        <Table
          columns={columns}
          dataSource={
            getTable()
          }
          pagination={false}
          bordered
        />
      </div>
    </div>
  );
};

export default KRShoot;
