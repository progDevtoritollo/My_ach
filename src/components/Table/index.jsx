import React from "react";
import PropTypes from "prop-types";


import "./Table.scss";


import { Table as BaseTab, Typography } from 'antd';

const { Text } = Typography;


const columns = [
  {
    title: 'Number',
    dataIndex: 'num',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'желтый',
    dataIndex: 'yellow',
  },
  {
    title: 'красный',
    dataIndex: 'red',
  },
  {
    title: 'синее',
    dataIndex: 'blue',
  },
  {
    title: 'черное',
    dataIndex: 'black',
  },
  {
    title: 'белое',
    dataIndex: 'white',
  },
  {
    title: 'мимо',
    dataIndex: 'miss',
  },
  {
    title: 'средняя статистика',
    dataIndex: 'midlestatus',
  },


];

const data = [
  {
    key: '1',
    num: '1',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },
  {
    key: '2',
    num: '2',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },
  {
    key: '3',
    num: '3',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },
  {
    key: '4',
    num: '4',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },
  {
    key: '5',
    num: '5',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },
  {
    key: '6',
    num: '6',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },
  {
    key: '7',
    num: '7',
    name: 'Jennifer Connelly',
    yellow: '50%',
    red:10,
    blue: 15,
    black: 33,
    white: 8,
    miss:78,
    midlestatus:7,
  },

];




const Table = ({ user, date, event }) => {
  return (
    <>
    <BaseTab
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
      //       <BaseTab.Summary.Row>
      //         <BaseTab.Summary.Cell>Total</BaseTab.Summary.Cell>
      //         <BaseTab.Summary.Cell>
      //           <Text type="danger">{totalBorrow}</Text>
      //         </BaseTab.Summary.Cell>
      //         <BaseTab.Summary.Cell>
      //           <Text>{totalRepayment}</Text>
      //         </BaseTab.Summary.Cell>
      //       </BaseTab.Summary.Row>
      //       <BaseTab.Summary.Row>
      //         <BaseTab.Summary.Cell>Balance</BaseTab.Summary.Cell>
      //         <BaseTab.Summary.Cell colSpan={2}>
      //           <Text type="danger">{totalBorrow - totalRepayment}</Text>
      //         </BaseTab.Summary.Cell>
      //       </BaseTab.Summary.Row>
      //     </>
      //   );
      // }}
    />
  </>

  );
};

// Table.defaultProps = {
//   user: {},
// };

// Table.propTypes = {
//   date: PropTypes.string,
//   user: PropTypes.object,
//   event: PropTypes.string,
// };

export default Table;
