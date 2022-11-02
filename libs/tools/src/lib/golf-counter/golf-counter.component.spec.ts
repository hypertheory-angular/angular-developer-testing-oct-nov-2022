import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { GolfCounterComponent } from './golf-counter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromGolfCounterReducer from '../state/reducers/counter.reducer';
import * as rootState from '../state';
describe('GolfCounterComponent', () => {
  let spectator: Spectator<GolfCounterComponent>;
  let store: MockStore;
  const initialState = {
    counter: {
      count: fromGolfCounterReducer.reducer,
    },
  };

  const createComponent = createComponentFactory({
    component: GolfCounterComponent,
    providers: [
      provideMockStore({
        initialState,
        selectors: [
          {
            selector: rootState.selectCurrentCount,
            value: 444,
          },
        ],
      }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    store = spectator.inject(MockStore);
    spectator.detectChanges();
  });

  it('Initial State', () => {
    // spectator.detectChanges();
    // const component = spectator.query<HTMLSpanElement>(
    //   '[data-testid="current"]',
    // );
    // expect(component).toBeDefined();

    // console.log(component);
    // expect(component?.innerText).toBe('99');
    const component = spectator.query('[data-testid="counter-component"]');
    expect(component).toMatchSnapshot();
  });
});
