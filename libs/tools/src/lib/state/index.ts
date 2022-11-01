import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCounter from './reducers/counter.reducer';
export const FEATURE_NAME = 'tools';

export interface ToolsState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<ToolsState> = {
  counter: fromCounter.reducer,
};

const selectFeature = createFeatureSelector<ToolsState>(FEATURE_NAME);
