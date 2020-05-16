import React from "react";
import PropTypes from "prop-types";

import FullTarget from "assets/img_my/FullTarget.png";
import { KRHitTable } from 'components';

import "./KRShoot.scss";

const KRShoot = ({ user, date, event }) => {
  return (
    <div className="midle__kr">
      <img 
        className="midle__kr-img"
        src={FullTarget}
        alt="target"
      />
      <div className="midle__kr__table">
        <KRHitTable/>
      </div>
    </div>
  );
};

KRShoot.defaultProps = {
  user: {},
};

KRShoot.propTypes = {
  date: PropTypes.string,
  user: PropTypes.object,
  event: PropTypes.string,
};

export default KRShoot;
