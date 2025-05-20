import CheckoutPage from  '../pages/checkout';
import CartPage from '../pages/cart';

describe('checkout process', () => {
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const data = Cypress.env('checkout');
  const credentials = Cypress.env('credentials').validCredentials;
  
  beforeEach(() => {
    cy.login(credentials.username, credentials.password);
  });

  it('should complete checkout with backpack', () => {
    cartPage.addItemToCart('Sauce Labs Backpack');
    cartPage.goToCart();
    cartPage.itemslist.its('length').should('eq', 1);

    cy.log('Going to checkout page and filling in the form');
    checkoutPage.checkoutButton.click();
    checkoutPage.fillCheckoutForm(data.customer.firstName, data.customer.lastName, data.customer.postalCode);
    checkoutPage.continueButton.click();

    cy.log('Verify the checkout summary page');
    cy.url().should('include', '/checkout-step-two.html');
    checkoutPage.checkoutSummaryContainer.should('be.visible');
    checkoutPage.finishButton.click();
    checkoutPage.thankYouMessage.should('be.visible');

    cy.log('Verify the thank you message and back to home button');
    cy.url().should('include', '/checkout-complete.html');
    checkoutPage.backHomeButtons.click();
    cy.url().should('include', '/inventory.html');
  });
});
