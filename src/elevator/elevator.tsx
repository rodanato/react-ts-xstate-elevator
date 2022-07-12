import React, { useEffect } from 'react';
import { useMachine } from "@xstate/react";

import elevatorMachine from './elevator.machine';
import ExternalView from './external-view/external-view';
import InternalView from './internal-view/internal-view';


export default function Elevator() {
  const [state, send] = useMachine(elevatorMachine);

  return(
    <>
      State: {state.value}
<br />
      activeFloor: {state.context.activeFloor}
<br />
      {/* doorOpen: {state.context.doorOpen} */}
<br />
      
      <ExternalView
        state={state.value}
        data={state.context} 
        send={send}
      />
      <InternalView
        state={state.value}
        data={state.context} 
        send={send}
      />  
    </>
  );
}