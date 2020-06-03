import React from "react";

import "./ActiveCompetition.scss";

const ActiveCompetition = (props) => {
  return (
    <div className="midle__competition__active">
      <div>{props.data.name}</div>
    </div>
  );
};

export default ActiveCompetition;
