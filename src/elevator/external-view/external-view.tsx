import React, {useState} from 'react';
import { ElevatorContext } from '../elevator.machine';

export default function ExternalView({state, data, send}: {state: any, data: ElevatorContext, send: Function}) {
  const { floorsOnQueue, activeFloor } = data;
  // const [floor, setFloor] = useState(1);

  // const elevatorClasses = () => {
  //   if (state.match('moving')) {
  //     // const targetFloor = floorsOnQueue[0];
  //     setFloor(floorsOnQueue[0]);
  //   }

  //   return `elevator__box elevator__box--floor-${floor}`;
  // }

  console.log('>>> floorsOnQueue', floorsOnQueue);

  return(
    <section className="elevator__external-view">
      <div className={`elevator__box elevator__box--floor-${state.match('moving') ? floorsOnQueue[0] : activeFloor}`}></div>

      <div className="floor">
        2
        <div className="floor__buttons">
          <button onClick={() => send({ type: "CALL", floor: 2})}>up</button>
          <button onClick={() => send({ type: "CALL", floor: 2})}>down</button>
        </div>
      </div>
      <div className="floor">
        1
        <div className="floor__buttons">
          <button onClick={() => send({ type: "CALL", floor: 1})}>up</button>
          <button onClick={() => send({ type: "CALL", floor: 1})}>down</button>
        </div>
      </div>
    </section>
  );
}