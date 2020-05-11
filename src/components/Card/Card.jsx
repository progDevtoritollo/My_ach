import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";

import { convertCurrentTime } from "utils/helpers";

import { Time, Avatar } from "..";

import "./Card.scss";

const Card = ({ user, date, event }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__avatar">{/* <Avatar user={user} /> */}</div>
        <div className="card__info">
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
    </div>
  );
};

Card.defaultProps = {
  user: {},
};

Card.propTypes = {
  date: PropTypes.string,
  user: PropTypes.object,
  event: PropTypes.string,
};

export default Card;
