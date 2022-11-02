import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
  ButtonGroupComponent,
  ButtonGroupItem,
} from './button-group.component';
describe('ButtonGroupComponent', () => {
  let spectator: Spectator<ButtonGroupComponent>;
  const createComponent = createComponentFactory(ButtonGroupComponent);

  beforeEach(() => {
    spectator = createComponent();
  });
  it('Can Create the Component', () => {
    expect(spectator.query('[data-testid="button-group-component"]')).toExist();
  });

  describe('Initial State = no buttons added', () => {
    it('does not display any buttons', () => {
      expect(spectator.queryAll('button').length).toBe(0);
    });
  });
  describe('Show a single button', () => {
    let output: unknown;
    beforeEach(() => {
      spectator = createComponent({
        props: {
          buttons: [
            {
              label: 'Birds',
              value: '1',
            },
          ],
        },
      });
      spectator.output('selected').subscribe((value) => (output = value));
    });
    it('shows one button', () => {
      expect(spectator.queryAll('button').length).toBe(1);
    });
    it('displays the label', () => {
      const button = spectator.query<HTMLButtonElement>('button');
      expect(button?.textContent).toBe(' Birds ');
    });
    it('clicking the button emits the item', () => {
      const button = spectator.query<HTMLButtonElement>('button');
      expect(output).toBeUndefined();
      button?.click();
      expect(output).toEqual({ label: 'Birds', value: '1' });
    });
  });
});
