import nav from './tools-feature.selectors';
import prefs from './count-by.selectors';
import counter from './counter.selectors';
describe('The Counter Should Not Go Below Zero', () => {
  beforeEach(() => {
    cy.visit('/tools');
  });
  /* Your Mission:
    - write this spec to put the counter in the same state as is in the defect we discovered
    - but make the test say it should be "zero".
    - Make it pass.
*/
  describe('the defect as it is', () => {
    it('lets me go below zero if the preferences are changed', () => {
      nav.getPrefsLink().click();
      prefs.getCountByThree().click();
      nav.getCounterLink().click();
      counter.getIncrement().click();
      nav.getPrefsLink().click();
      prefs.getCountByFive().click();
      nav.getCounterLink().click();
      counter.getDecrement().click();
      counter.getCurrent().should('have.text', '-2');
    });
  });

  describe('what we want it to do', () => {
    it('does not let me go below zero if the preferences are changed', () => {
      nav.getPrefsLink().click();
      prefs.getCountByThree().click();
      nav.getCounterLink().click();
      counter.getIncrement().click();
      nav.getPrefsLink().click();
      prefs.getCountByFive().click();
      nav.getCounterLink().click();
      counter.getDecrement().click();
      counter.getCurrent().should('have.text', '0');
    });
  });
});
