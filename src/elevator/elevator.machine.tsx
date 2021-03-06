import { send, createMachine } from "xstate";
// import type { Context } from "react";
// import { createContext } from "react";

export interface ElevatorContext {
  doorOpen: boolean,
  floorsOnQueue: number[],
  activeFloor: number
  floorMovingTime: number
}

export type ElevatorState = 
  | { value: "idle"; context: ElevatorContext } 
  | { value: "moving"; context: ElevatorContext }
  | { value: "openingDoors"; context: ElevatorContext }
  | { value: "closingDoors"; context: ElevatorContext };

export type ElevatorEvent = 
  | { type: string }
  | { type: "CALL_ELEVATOR", floor: number }
  | { type: "MOVE_TO_FLOOR", floor: number }
  | { type: "STOP" }
  | { type: "OPEN_DOORS" }
  | { type: "BACK_TO_IDLE" };

const initialContext: ElevatorContext = {
  doorOpen: false,
  floorsOnQueue: [],
  activeFloor: 1,
  floorMovingTime: 3000,
};

const elevatorMachine = createMachine<
  ElevatorContext,
  ElevatorEvent,
  ElevatorState
>({
  id: "elevator",
  initial: "idle",
  context: initialContext,
  states: {
    idle: {
      on: {
        CALL: {
          target: 'moving',
          actions: ['addFloorToQueue']
        }
      }
    },
    opening: {
      after: {
        OPENING: 'closing'
      },
      entry: [
        'setNewActiveFloor'
      ],
      on: {
        CALL: {
          actions: ['addFloorToQueue']
        }
      }
    },
    closing: {
      after: [
        {
          delay: 'CLOSING',
          target: 'idle',
          cond: (ctx, event) => ctx.floorsOnQueue.length === 0 
        },
        {
          delay: 'CLOSING',
          target: 'moving',
          cond: (ctx, event) => ctx.floorsOnQueue.length > 0 
        },
      ],
      on: {
        CALL: {
          actions: ['addFloorToQueue']
        }
      }
    },
    moving: {
      entry: send(
        { type: 'TIMER' },
        {
          delay: (ctx: any, event) => ctx.floorsOnQueue.length > 0 ? ctx.floorMovingTime * Math.abs((ctx.activeFloor - ctx.floorsOnQueue[0])) : 1200,
        }
      ),
      on: {
        TIMER: { target: 'opening' },
        CALL: {
          actions: ['addFloorToQueue']
        }
      }
    },
  },
}, {
  actions: {
    setNewActiveFloor: (ctx, e) => {
      ctx.activeFloor = ctx.floorsOnQueue.shift() || 1;
    },
    addFloorToQueue: (ctx: any, e: any) => {
      ctx.floorsOnQueue = [...ctx.floorsOnQueue, e.floor];
    },
  },
  delays: {
    OPENING: 6000,
    CLOSING: 1200,
  }
});

export default elevatorMachine;

// export const ElevatorMachineContext: Context<any> = createContext<any>(null);
