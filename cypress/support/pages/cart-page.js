export class CartPage{
  isItemInCart(text){
    cy.get('#tbodyid').should('contain.text', text);
    return this;
  }
  canYouAffordIt(fund){
    cy.get('#totalp').invoke('text').then(parseFloat).should('be.lt', fund);
    return this;
  }
  clickPlaceOrderButton(){
    cy.get('.btn-success').click();
    return this;
  }
  fillNameField(input){
    cy.get('#name').type(input);
    return this;
  }
  fillCountryField(input){
    cy.get('#country').type(input);
    return this;
  }
  fillCityField(input){
    cy.get('#city').type(input);
    return this;
  }
  fillCreditCardField(input){
    cy.get('#card').type(input);
    return this;
  }
  fillMonthField(input){
    cy.get('#month').type(input);
    return this;
  }
  fillYearField(input){
    cy.get('#year').type(input);
    return this;
  }
  clickPurchaseButton(){
    cy.get('[onclick="purchaseOrder()"]').click();
    return this;
  }
  receiptModalHasText(text){
    if(text = 'today'){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth()).padStart(2, '0'); // Date in modal is off by one month
      var yyyy = today.getFullYear();

      text = dd + '/' + mm + '/' + yyyy;
    }
    cy.get('.sweet-alert').should('contain.text', text);
    return this;
  }


}
