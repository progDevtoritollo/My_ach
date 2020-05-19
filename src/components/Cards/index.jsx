import React from "react";
import PropTypes from "prop-types";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { CardItem } from "../"; 
import "./Cards.scss";

const Cards = ({ items, userId, onSearch, inputValue,}) => {
  return (
    <div className="cards">
      <div className="cards__search">
      <Input.Search
        placeholder="Поиск среди пользователей"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map(item => (
        <CardItem
          key={item._id}
          userId={userId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Ничего не найдено"
      />
    )}
    </div>
  );
};

Cards.defaultProps = {
  user: {},
};

Cards.propTypes = {
  date: PropTypes.string,
  user: PropTypes.object,
  event: PropTypes.string,
};

export default Cards;
