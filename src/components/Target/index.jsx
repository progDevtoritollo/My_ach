
import React from "react";

import "./Target.scss";

const Target = () => {
const [state, setState ] = React.useState([ { x: 0, y: 0 } ])

  let handleMouseMove=(event)=>{
    setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  let handleClick = (x ,y) => {
    console.log(state.x, state.y)
    return(
      <div style={{  background:'brown', height: '10px',
      width: '10px', position: 'relative', left: state.x, top: state.y }}/>
    )
  }

  return (
    <div className="div" onMouseMove={handleMouseMove} onClick={handleClick}>>
      <p>Положение мыши: ({state.x}, {state.y})</p>
    </div>
  );
}


export default Target;
