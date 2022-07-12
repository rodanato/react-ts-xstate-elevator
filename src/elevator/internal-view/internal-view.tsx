import React from 'react';
import { ElevatorContext } from '../elevator.machine';

export default function InternalView({state, data, send}: {state: any, data: ElevatorContext, send: Function}) {
  console.log('>>> state', state);

  return (
    <section className="elevator__internal-view">
      <div className={`elevator__doors ${state.match('opening') && 'elevator__doors--open'}`}>
        <div className="elevator__door elevator__door--left"></div>
        <div className="elevator__door elevator__door--right"></div>
      </div>

      <div className='elevator__buttons'>
        <button onClick={() => send({ type: "CALL", floor: 1})}>1</button>
        <button onClick={() => send({ type: "CALL", floor: 2})}>2</button>
      </div>
    </section>
  );
}