import nav from './tools-feature.selectors';
import prefs from './count-by.selectors';
import counter from './counter.selectors';

describe('Counting by in Counter Uses Preferences', () => {
  beforeEach(() => {
    cy.visit('/tools');
  });
  it('Changing the prefs changes the counter', () => {
    // first go to the preferences and set count by to 3
    nav.getPrefsLink().click();
    prefs.getCountByThree().click();

    // then go to the counter and click increment, and it should go up by three
    nav.getCounterLink().click();

    counter.getIncrement().click();

    counter.getCurrent().should('contain.text', '3');
  });
});
