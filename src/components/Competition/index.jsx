import React, {useState} from "react";
import { ActiveCompetition, CreateCompetition } from "components";

import "./Competition.scss";

const Competition = () => {

  const [activeCompetition, setActiveCompetition] = useState(null);

  fetch('/api/competition')
    .then(response => response.json())
    .then(response => setActiveCompetition(response));

  const handleCreate = (values) => {
    fetch('/api/competition', { method: 'POST', body: JSON.stringify(values) })
      .then(response => response.json())
      .then(response => setActiveCompetition(response));
  };

  return(
    <div className="midle__competition">
      {activeCompetition ? <ActiveCompetition data={activeCompetition}/> : <CreateCompetition onCreate={handleCreate}/> }
    </div>
  );
};


export default Competition;
