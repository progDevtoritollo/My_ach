import React from "react";
import PropTypes from "prop-types";

import "./DuelHitTable.scss";


import { Table, Typography } from 'antd';

const { Text } = Typography;


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
    title: 'очки',
    dataIndex: 'set',
  },
];

const data = [
  {
    key: '1',
    namber: '1',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    set: 25,
  },
  {
    key: '2',
    namber: 2,
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    set: 25,
  },
  {
    key: '3',
    namber: '3',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    set: 25,
  },
  {
    key: '4',
    namber: '4',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    set: 25,

  },
  {
    key: '5',
    namber: '5',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    set: 25,
  },
];

const DuelHitTable = () => {
  return(
    <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
    />
  </>

  );
};


export default DuelHitTable;
