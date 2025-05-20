import InventoryPage from './pages/inventory';

describe('SauceDemo Inventory Tests', () => {
    const inventoryPage = new InventoryPage();

    beforeEach(() => {
        cy.login();
     });

    it('should add Sauce Labs Backpack to cart', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        inventoryPage.shoppingCartLink.click();
        inventoryPage.firstCartItemQuantity.should('have.text', '1')	
     });
     
    it.only('should add Sauce Labs Backpack to cart and then remove it', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        inventoryPage.shoppingCartLink.click();
        inventoryPage.firstCartItemQuantity.should('have.text', '1')	
        inventoryPage.removeItemFromCart('Sauce Labs Backpack');
        inventoryPage.cartItemsLlist.should('not.exist')
    });
 
    it('should add multiple items to cart', () => {
        inventoryPage.addItemToCart('Sauce Labs Backpack');
        inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
        inventoryPage.shoppingCartLink.click();
        inventoryPage.inventoryItems.its('length').should('eq', 2);
    });
    
});


 