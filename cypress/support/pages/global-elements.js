export class GlobalElements{
  clickProductLinkByText(text){
    cy.get('#tbodyid').find('.hrefch').contains(text).click();
    return this;
  }
  clickAddToCartButton(){
    cy.get('.btn-success').click();
    return this;
  }
  clickOnCategoryLink(text){
    cy.get('.list-group').find(".list-group-item").contains(text).click();
    return this;
  }
  addProductToCart(category, product){
    this.clickOnCategoryLink(category);
    this.clickProductLinkByText(product);
    this.clickAddToCartButton();
    cy.visit('');
    return this;
  }
  clickNavBarCart(){
    cy.get('#cartur').click();
    return this;
  }
}
