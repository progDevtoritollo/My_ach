import React from "react";
import { Route, Switch } from "react-router-dom";

import { KRShoot, Table, Duel, Charts } from "components";
import "./Midle.scss";

const Midle = () => (
  <div className="midle">
    <Switch>
    <Route path="/archer" render={() => <Charts />} />
      <Route path="/training" render={() => <KRShoot />} />
      <Route path="/table" render={() => <Table />} />
      <Route path="/duel" render={() => <Duel/>} />
    </Switch>
  </div>
);

export default Midle;
