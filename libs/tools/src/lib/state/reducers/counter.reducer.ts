import { createReducer, on } from '@ngrx/store';
import { CounterPrefsEvents } from '../actions/counter-prefs.actions';
import { CounterEvents } from '../actions/counter.actions';
export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(CounterPrefsEvents.byset, (s, a) => ({ ...s, by: a.by })),
  on(CounterEvents.increment, (s) => ({ ...s, current: s.current + s.by })),
  on(CounterEvents.decrement, (s) => ({ ...s, current: s.current - s.by })),
);
