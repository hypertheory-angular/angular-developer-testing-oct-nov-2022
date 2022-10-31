import { getGreeting } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('https://www.progressive.com'));

  it('should display welcome message', () => {
   cy.get('h1').should('contain.text', 'Hello! Welcome to Angular Developer Testing!');
   
  });
});
