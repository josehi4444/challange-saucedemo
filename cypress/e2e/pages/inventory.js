export default class InventoryPage {


    get inventoryItems() {
        return cy.get('[data-test=inventory-item]');
    }

    get itemPrice() {
        return cy.get('[data-test=inventory-item-price]');
    }
 
    get shoppingCartLink() {
        return cy.get('.shopping_cart_link');
    }
    get cartItemsLlist() {
        return cy.get('.cart_item');
    }
    get firstCartItem() {
        return cy.get('[data-test="inventory-item-name"]').eq(0)
    }
    get firstCartItemQuantity() {
        return cy.get('[data-test="item-quantity"]').eq(0)
    }
    
    get removeButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }
    removeItemFromCart(itemName) {
        const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
        cy.get(`[data-test="remove-${formattedName}"]`).click();
    }


    visit() {
        cy.visit('https://www.saucedemo.com/inventory.html');
    }

    getItemPrice(itemIndex) {
        return cy.get(this.inventoryItems).eq(itemIndex).find(this.itemPrice);
    }

    addItemToCart(itemName) {
        const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
        cy.get(`[data-test="add-to-cart-${formattedName}"]`).click();
    }

    assertItemPrice(name, expectedPrice) {
        cy.get(this.inventoryItem).contains(name).find(this.itemPrice).should('have.text', expectedPrice);
    }

    goToCart() {
        this.shoppingCartLink.click();
    }
}
