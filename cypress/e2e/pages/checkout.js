// checkoutPage.js
export default class CheckoutPage {
    get firstNameInput() {
        return cy.get('[data-test=firstName]');
    }

    get lastNameInput() {
        return cy.get('[data-test=lastName]');
    }

    get postalCodeInput() {
        return cy.get('[data-test=postalCode]');
    }

    get cancelButton() {
      return cy.get('[data-test=cancel]');
    }

    get continueButton() {
        return cy.get('[data-test=continue]');
    }
     get checkoutButton() {
        return cy.get('#checkout');
    }
    get checkoutSummaryContainer() {
        return cy.get('#checkout_summary_container');
    }
    get finishButton() {
        return cy.get('#finish');
    }
    get backHomeButtons() {
        return cy.get('#back-to-products');
    }
    
    enterFirstName(name) {
        cy.get(this.firstNameInput).type(name);
    }

    enterLastName(name) {
        cy.get(this.lastNameInput).type(name);
    }

    enterPostalCode(code) {
        cy.get(this.postalCodeInput).type(code);
    }

    clickCancel() {
        cy.get(this.cancelButton).click();
    }

    clickContinue() {
        cy.get(this.continueButton).click();
    }

    assertErrorMessage(message) {
        cy.get('.error-message-container').should('contain', message);
    }
  
}