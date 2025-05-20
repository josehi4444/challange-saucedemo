export default class InventoryPage {

  get shoppingCartLink() {
    return cy.get('.shopping_cart_link');
  }

  get itemslist() {
    return cy.get('.cart_item');
  }
  get firstItemName() {
    return cy.get('[data-test="inventory-item-name"]').eq(0)
  }
  get firstItemPrice() {
    return cy.get('[data-test="inventory-item-price"]').eq(0)
  }

  get firstItemQuantity() {
    return cy.get('[data-test="item-quantity"]').eq(0)
  }

  get removeButton() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }

  removeItemFromCart(itemName) {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
    cy.get(`[data-test="remove-${formattedName}"]`).click();
  }

  getItemPrice(itemIndex) {
    return cy.get(this.inventoryItems).eq(itemIndex).find(this.itemPrice);
  }

  addItemToCart(itemName) {
    const formattedName = itemName.toLowerCase().replace(/\s+/g, '-');
    cy.get(`[data-test="add-to-cart-${formattedName}"]`).click();
  }

  goToCart() {
    this.shoppingCartLink.click();
  }
}
