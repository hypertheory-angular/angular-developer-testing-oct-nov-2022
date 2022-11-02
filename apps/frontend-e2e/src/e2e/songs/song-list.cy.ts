describe('The Song List', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9999/songs', {
      body: {
        data: [
          {
            id: '1',
            title: 'Dreams',
            artist: 'Fleetwood Mac',
            album: 'Rumors',
          },
          { id: '99', title: 'Song #1', artist: 'Fugazi' },
        ],
      },
    });
    cy.visit('/tools/songs');
  });

  it('should show the song list by default', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/tools/songs');
      // these examples, not really needed
      expect(loc.href).to.eq('http://localhost:4200/tools/songs');
      expect(loc.port).to.eq('4200');
      expect(loc.protocol).to.eq('http:');
    });
  });
});
