import React from "react";
import { Route, Switch } from "react-router-dom";

import { KRShoot, Table } from "components";
import "./Midle.scss";

const Midle = () => (
  <div className="midle">
    <Switch>
      <Route path="/training" render={() => <KRShoot />} />
      <Route path="/table" render={() => <Table />} />
    </Switch>
  </div>
);

export default Midle;
