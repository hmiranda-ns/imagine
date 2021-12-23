describe("Store demo", () => {
  it('User adds Nexus 6 to cart', () => {
    cy.visit('/');
    cy.get('#tbodyid').find('.hrefch').contains('Nexus 6').click();
    cy.get('.btn-success').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
  });

  it('User adds MacBook Pro to cart', () => {
    cy.visit('/');
    cy.get('.list-group').find(".list-group-item").contains('Laptops').click();
    cy.get('#tbodyid').find('.hrefch').contains('MacBook Pro').click();
    cy.get('.btn-success').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
  });

  it('Products added to cart if you have $2000', () => {
    cy.visit('/');
    cy.get('onclick="showcart()"').click();
    cy.get('#tbodyid').should('have.text', 'Nexus 6');
    cy.get('#tbodyid').should('have.text', 'MacBook Pro');
    cy.expect('#totalp').value.stringToInt.lessThan < 2000
  });

})  