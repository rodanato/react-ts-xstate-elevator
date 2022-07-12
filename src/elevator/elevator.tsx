import React, { useEffect } from 'react';
import { useMachine } from "@xstate/react";

import elevatorMachine from './elevator.machine';
import ExternalView from './external-view/external-view';
import InternalView from './internal-view/internal-view';


export default function Elevator() {
  const [state, send] = useMachine(elevatorMachine);

  return(
    <>
      <section>
        <ul>
          <li>
            State: {state.value as string}
          </li>
          <li>
            activeFloor: {state.context.activeFloor}
          </li>
          <li>
            Floors on queue: {state.context.floorsOnQueue.join(',')}
          </li>
        </ul>
      </section>

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