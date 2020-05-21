import React from "react";
import {LineChart} from 'components';

import "./Charts.scss";

const Charts = () => {
  
  return (
    <div className="midle__chart" >
      <div className="midle__chart--Line">
        <LineChart/>
      </div>
      <div className="midle__chart__lower">
        <div className="midle__chart__lower__firstblock">
          <div className="midle__chart__lower__firstblock--timeline"></div>
          <div className="noname"></div>
        </div>
        <div className="midle__chart__lower--pie">

        </div>
        <div className="midle__chart__lower--TrainingTime">

        </div>
      </div>
    </div>
  );
};

export default Charts;
