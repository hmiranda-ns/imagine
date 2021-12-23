import { GlobalElements } from "../support/pages/global-elements"
import { Assertions } from "../support/assertions"
import { CartPage } from "../support/pages/cart-page";

describe("Store demo", () => {
  beforeEach(()=> {
    cy.visit('');
  })

  const global = new GlobalElements;
  const assert = new Assertions;
  const cart = new CartPage;

  it('User adds Nexus 6 to cart', () => {
    global
      .clickProductLinkByText('Nexus 6')
      .clickAddToCartButton();
    assert
      .alertWindowHasText('Product added');
  });

  it('User adds MacBook Pro to cart', () => {
    global
      .clickOnCategoryLink('Laptops')
      .clickProductLinkByText('MacBook Pro')
      .clickAddToCartButton();
    assert
      .alertWindowHasText('Product added');
  });

  describe('Validate cart', () => {
    beforeEach(() => {
      global
        .addProductToCart('Phones', 'Nexus 6')
        .addProductToCart('Laptops', 'MacBook Pro')
        .clickNavBarCart();
    });

    it('Products added to cart if you have $2000', () => {
      cart
        .isItemInCart('Nexus 6')
        .isItemInCart('MacBook Pro')
        .canYouAffordIt(2000);
    });

    it('Complete order', () => {
      cart
        .clickPlaceOrderButton()
        .fillNameField('Jane Doe')
        .fillCountryField('Mexico')
        .fillCityField('Hermosillo')
        .fillCreditCardField('4733787767075060')
        .fillMonthField('02')
        .fillYearField('2022')
        .clickPurchaseButton();

      cart
        .receiptModalHasText('Thank you for your purchase!')
        .receiptModalHasText('Id: ')
        .receiptModalHasText('Amount: 1750 USD')
        .receiptModalHasText('Card Number: 4733787767075060')
        .receiptModalHasText('Name: Jane Doe')
        .receiptModalHasText('today');
    })
  })
})  
