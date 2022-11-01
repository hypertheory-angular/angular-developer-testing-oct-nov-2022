describe('The Golf Counter', () => {
  describe('Initial State', () => {
    beforeEach(() => {
      cy.visit('/tools/golf-counter');
    });
    it('Should display the initial count', () => {
      cy.get('[data-testid="current"]').should('contain.text', '0');
    });

    it('Should have the increment button enabled', () => {
      cy.get('[data-testid="increment-button"]').should('be.enabled');
    });

    it('Should have the decrement button disabled', () => {
      cy.get('[data-testid="decrement-button"]').should('be.disabled');
    });
  });
});
