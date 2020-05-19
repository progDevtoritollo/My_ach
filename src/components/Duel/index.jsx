import React from "react";
import PropTypes from "prop-types";

import "./Duel.scss";
import Bullet from "assets/img/Shoot.js";
import { DuelHitTable } from "components";

const Duel = () => {
  return (
    <div className="midle__kr">
      <Bullet />
      {/* <img className="midle__kr-img" src={Bullet} alt="target" /> */}
      <div className="midle__kr__table">
        <DuelHitTable />
      </div>
    </div>
  );
};

export default Duel;
