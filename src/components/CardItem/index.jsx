import React, { Link, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";

// import { convertCurrentTime } from "utils/helpers";

import { Time, Avatar } from "..";

import "./CardItem.scss";

const CardItem = ({ item }) => {
  return (
    // <Link to={`/archer/${user._id}`}>
      <div className="card">
        <div className="card__avatar">
          <Avatar user={item.user} />
        </div>
        <div className="card__info">
          <div className="card__fullname">{item.user.fullname}</div>
          {item.event && (
            <div className="card__bubble">
              {item.event && (
                <p className="card__text">
                  {reactStringReplace(item.event, /:(.+?):/g, (i) => (
                    <span key={i} size={16}>
                      {item.event}
                    </span>
                  ))}
                </p>
              )}
            </div>
          )}

          {item.date && (
            <span className="card__date">
              <Time date={item.date} />
            </span>
          )}
        </div>
      </div>
    // </Link>
  );
};

CardItem.defaultProps = {
  user: {},
};

CardItem.propTypes = {
  date: PropTypes.string,
  user: PropTypes.object,
  event: PropTypes.string,
};

export default CardItem;
