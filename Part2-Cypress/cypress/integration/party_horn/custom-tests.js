describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('slider changes when volume input changes', () => {
      cy.get('#volume-slider').invoke('val', 67).trigger('input');
      cy.get('#volume-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
      });
      cy.get('#volume-slider').invoke('val', 34).trigger('input');
      cy.get('#volume-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });
      cy.get('#volume-slider').invoke('val', 1).trigger('input');
      cy.get('#volume-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
      });
      cy.get('#volume-slider').invoke('val', 0).trigger('input');
      cy.get('#volume-image').then($el => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
      });
  });

  it('change to party horn img and sound', () => {
      cy.get('#radio-party-horn').click();
      cy.get('#sound-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      });
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
      });
  });

  it('change to air horn img and sound', () => {
      cy.get('#radio-air-horn').click();
      cy.get('#sound-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
      });
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3');
      });
  });

  it('change to car img and sound', () => {
      cy.get('#radio-car-horn').click();
      cy.get('#sound-image').then($el => {
        expect($el).to.have.attr('src', './assets/media/images/car.svg');
      });
      cy.get('#horn-sound').then($el => {
        expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
      });
  });

  it('check if error correctly thrown', () => {
      cy.get('#volume-number').invoke('val', 999).trigger('input');
      cy.get('#volume-number').then(($input) => {
          expect($input[0].validationMessage).to.eq('Value must be less than or equal to 100.')
      })
  })
});
