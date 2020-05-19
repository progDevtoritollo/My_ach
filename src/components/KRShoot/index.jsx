import React, { useState } from "react";
import PropTypes from "prop-types";
import Bullet from "assets/img/bullet.png";

// import FullTarget from "assets/img_my/FullTarget.png";
import { KRHitTable } from "components";
import Shoot from "assets/img/Shoot.js";

import "./KRShoot.scss";

const KRShoot = ({ user, date, event }) => {
  console.log(123);
  const [bullets, setBullet] = useState([]);

  const handleClick = (e) => {
    // console.log(state.x, state.y);
    // console.dir(e);
    console.log("e.clientX", e.clientX);
    console.log("e.clientY", e.clientY);
    console.log("e.movementX", e.movementX);
    console.log("e.movementY", e.movementY);
    console.log("e.pageX", e.pageX);
    console.log("e.pageY", e.pageY);
    setBullet([
      ...bullets,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
  };
  console.log(bullets);
  return (
    <div className="midle__kr" style={{ position: "absolute" }}>
      <Shoot handleClick={handleClick} />
      {bullets.map((value) => {
        return (
          <img
            style={{ position: "absolute", left: value.x, top: value.y }}
            src={Bullet}
            width={40}
            alt="bullet"
          />
        );
      })}
      <div className="midle__kr__table">
        <KRHitTable />
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
