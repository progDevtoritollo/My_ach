import React from "react";
import { Route, Switch } from "react-router-dom";

import { KRShoot, Table, Duel, Charts, Competition } from "components";
import "./Midle.scss";

const Midle = () => (
  <div className="midle">
    <Switch>
    <Route path="/archer" render={() => <Charts />} />
      <Route path="/table" render={() => <Table />} />
      <Route path="/training" render={() => <KRShoot />} />
      <Route path="/competitions" render={() => <Competition/>} />
      <Route path="/duel" render={() => <Duel/>} />
    </Switch>
  </div>
);

export default Midle;
