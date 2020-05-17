import React from "react";
import PropTypes from "prop-types";

import "./Duel.scss";
import FullTarget from "assets/img_my/FullTarget.png";
import { DuelHitTable } from 'components';

const Duel = () => {
  return(
    <div className="midle__kr">
      <img 
        className="midle__kr-img"
        src={FullTarget}
        alt="target"
      />
      <div className="midle__kr__table">
        <DuelHitTable/>
      </div>
    </div>
  );
};


export default Duel;
