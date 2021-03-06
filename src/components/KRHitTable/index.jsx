import React from "react";
import PropTypes from "prop-types";

import "./KRHitTable.scss";


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
    title: '3-х выстр.',
    dataIndex: 'sun3shots',
  },
  {
    title: '6-х выстр.',
    dataIndex: 'sun6shots',
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
    sun6shots: 33,
  },
  {
    key: '2',
    namber: 2,
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '3',
    namber: '3',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '4',
    namber: '4',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '5',
    namber: '5',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '6',
    namber: '6',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '7',
    namber: '7',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '8',
    namber: '8',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '9',
    namber: '9',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
  {
    key: '10',
    namber: '10',
    firstShot: 5,
    secondShot: 6,
    thirdShot:10,
    sun3shots: 10,
    sun6shots: 33,
  },
];



const KRHitTable = () => {
  return(
    <>
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      // summary={pageData => {
      //   let totalBorrow = 0;
      //   let totalRepayment = 0;

      //   pageData.forEach(({ borrow, repayment }) => {
      //     totalBorrow += borrow;
      //     totalRepayment += repayment;
      //   });

      //   return (
      //     <>
      //       <Table.Summary.Row>
      //         <Table.Summary.Cell>Total</Table.Summary.Cell>
      //         <Table.Summary.Cell>
      //           <Text type="danger">{totalBorrow}</Text>
      //         </Table.Summary.Cell>
      //         <Table.Summary.Cell>
      //           <Text>{totalRepayment}</Text>
      //         </Table.Summary.Cell>
      //       </Table.Summary.Row>
      //       <Table.Summary.Row>
      //         <Table.Summary.Cell>Balance</Table.Summary.Cell>
      //         <Table.Summary.Cell colSpan={2}>
      //           <Text type="danger">{totalBorrow - totalRepayment}</Text>
      //         </Table.Summary.Cell>
      //       </Table.Summary.Row>
      //     </>
      //   );
      // }}
    />
  </>

  );
};


export default KRHitTable;
