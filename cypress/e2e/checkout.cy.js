import CheckoutPage from './pages/checkout';
import InventoryPage from './pages/inventory';
import LoginPage from './pages/login';

describe('checkout process', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        loginPage.login('standard');
    });

    it('should complete checkout with backpack', () => {
        inventoryPage.addItemToCart('backpack');
        inventoryPage.goToCart();
        inventoryPage.cartItemsList.its('length').should('eq', 1);
        inventoryPage.verifyProductDetails('backpack');

        cy.log('Going to checkout page and filling in the form');
        checkoutPage.checkoutButton.click();
        checkoutPage.enterFirstName('John');
        checkoutPage.enterLastName('Doe');
        checkoutPage.enterPostalCode('12345');
        checkoutPage.clickContinue();

        cy.log('Verify the checkout summary page');
        cy.url().should('include', '/checkout-step-two.html');
        checkoutPage.checkoutSummaryContainer.should('be.visible');
        checkoutPage.finishButton.click();
        cy.url().should('include', '/checkout-complete.html');
        cy.contains('Thank you for your order!').should('be.visible');
        checkoutPage.backHomeButtons.click();
        cy.url().should('include', '/inventory.html');
    });
});
 