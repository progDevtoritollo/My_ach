import React, { useState } from "react";
import { Table, Typography } from 'antd';


import Bullet from "assets/img_my/bullet.png";
import { KRHitTable } from "components";
import { Shoot } from "containers";

import "./KRShoot.scss";
const columns = [
  {
    title:'Серия',
    dataIndex:'namber'
  },
  {
    title:'Выстрелы',
    children:[
      {
        title:'Первый',
        dataIndex:'firstShot',
        key:'firstShot',
        width: 100,
      },
      {
        title:'Второй',
        dataIndex:'secondShot',
        key:'secondShot',
        width: 100,
      },
      {
        title:'Третий',
        dataIndex:'thirdShot',
        key:'thirdShot',
        width: 100,
      }
    ]
  },
  {
    title: '3-х выстр.',
    dataIndex: 'sun3shots',
  },
];

const data = [
  {
    key: '1',
    namber: '1',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 15,
  },
  {
    key: '2',
    namber: 2,
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '3',
    namber: '3',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '4',
    namber: '4',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '5',
    namber: '5',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '6',
    namber: '6',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '7',
    namber: '7',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '8',
    namber: '8',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '9',
    namber: '9',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
  {
    key: '10',
    namber: '10',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
  },
];



const KRShoot = () => {
  
  const [shots,setShots] = useState([data])
  const [bullets, setBullet] = useState([]);


  const handleClick = (e) => {
    setBullet([
      ...bullets,
      {
        x: e.clientX-110,
        y: e.clientY-110,
        id: e.target.getAttribute("id"),
      },
      // setShots([])
    ]);
  };
  console.log(bullets);
  return (
    <div className="midle__kr" style={{ position: "absolute" }}>
      <Shoot handleClick={handleClick} />
      {bullets.map((value) => {
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
        dataSource={data}
        pagination={false}
        bordered
      />
      </div>
    </div>
  );
};

export default KRShoot;