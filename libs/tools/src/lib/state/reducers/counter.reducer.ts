import { createReducer } from '@ngrx/store';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(initialState);
