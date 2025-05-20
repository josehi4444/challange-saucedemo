import CartPage from '../pages/cart';

describe('SauceDemo Inventory Tests', () => {
  const cartPage = new CartPage();
  const products = Cypress.env('products');
  const credentials = Cypress.env('credentials').validCredentials;
  
  beforeEach(() => {
    cy.login(credentials.username, credentials.password);
  });

  it('should add Sauce Labs Backpack to cart', () => {
    cartPage.addItemToCart('Sauce Labs Backpack');
    cartPage.shoppingCartLink.click();
    cartPage.firstItemQuantity.should('have.text', '1')
    cartPage.firstItemName.should('have.text', products.backpack.name);
    cartPage.firstItemPrice.should('have.text', products.backpack.price);
  });

  it('should add Sauce Labs Backpack to cart and then remove it', () => {
    cartPage.addItemToCart(products.backpack.name);
    cartPage.shoppingCartLink.click();
    cartPage.firstItemQuantity.should('have.text', '1')
    cartPage.removeItemFromCart(products.backpack.name);
    cartPage.itemslist.should('not.exist')
  });

  it('should add multiple items to cart', () => {
    cartPage.addItemToCart(products.backpack.name);
    cartPage.addItemToCart(products.boltTShirt.name);
    cartPage.shoppingCartLink.click();
    cy.url().should('include', '/cart.html');
    cartPage.itemslist.its('length').should('eq', 2);
  });

});
