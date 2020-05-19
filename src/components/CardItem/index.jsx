import React, { Link, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";

// import { convertCurrentTime } from "utils/helpers";

import { Time, Avatar } from "..";

import "./CardItem.scss";

const CardItem = ({ user, date, event }) => {
  return (
    // <Link to={`/archer/${user._id}`}>
      <div className="card">
        <div className="card__avatar">
          <Avatar user={user} />
        </div>
        <div className="card__info">
          <div className="card__fullname">{user.fullname}</div>
          {event && (
            <div className="card__bubble">
              {event && (
                <p className="card__text">
                  {reactStringReplace(event, /:(.+?):/g, (i) => (
                    <span key={i} size={16}>
                      {event}
                    </span>
                  ))}
                </p>
              )}
            </div>
          )}

          {date && (
            <span className="card__date">
              <Time date={date} />
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
