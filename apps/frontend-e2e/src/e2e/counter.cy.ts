import po from './counter.selectors';
describe('The Golf Counter', () => {
  beforeEach(() => {
    cy.visit('/tools/golf-counter');
  });
  describe('Initial State', () => {
    it('Should display the initial count', () => {
      po.getCurrent().should('contain.text', '0');
    });

    it('Should have the increment button enabled', () => {
      po.getIncrement().should('be.enabled');
    });

    it('Should have the decrement button disabled', () => {
      po.getDecrement().should('be.disabled');
    });
  });

  describe('Incrementing', () => {
    it('the current count increments', () => {
      po.getIncrement().click();
      po.getCurrent().should('contain.text', '1');
      po.getIncrement().click();
      po.getCurrent().should('contain.text', '2');
    });

    it('the decrement button is enabled', () => {
      po.getIncrement().click();
      po.getDecrement().should('be.enabled');
    });
  });
});
