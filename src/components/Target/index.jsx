import React, { useState } from "react";
import Bullet from "assets/img/bullet.png";

import "./Target.scss";

const Target = () => {
  // const [state, setState] = useState([{ x: 0, y: 0 }]);

  const [bullets, setBullet] = useState([]);

  let handleClick = (e) => {
    // console.log(state.x, state.y);
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
    <div className="div" onClick={handleClick} style={{ position: "relative" }}>
      <p>
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
        {/* Положение мыши: ({state.x}, {state.y}) */}
      </p>
    </div>
  );
};

export default Target;
