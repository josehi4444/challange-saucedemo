export default class LoginPage {
    get usernameInput() {
        return cy.get('[data-test=username]');
    }

    get passwordInput() {
        return cy.get('[data-test=password]');
    }

    get loginButton() {
        return cy.get('[data-test=login-button]');
    }

    get errorMessage() {
        return cy.get('.error-message-container');
    }

    get acceptedUsernames() {
        return cy.get('[data-test=login-credentials]');
    }

    get acceptedPassword() {
        return cy.get('[data-test=login-password]');
    }

    enterUsername = (username) => {
        this.usernameInput.type(username);
    }

    enterPassword = (password) => {
        this.passwordInput.type(password);
    }

    clickLogin = () => {
        this.loginButton.click();
    }

    verifyErrorMessage = (expectedMessage) => {
        this.errorMessage.should('contain.text', expectedMessage);
    }

    verifyAcceptedUsernames = () => {
        this.acceptedUsernames.should('contain.text', 'Accepted usernames are:');
        this.acceptedUsernames.should('contain.text', 'standard_user');
        this.acceptedUsernames.should('contain.text', 'locked_out_user');
        this.acceptedUsernames.should('contain.text', 'problem_user');
        this.acceptedUsernames.should('contain.text', 'performance_glitch_user');
        this.acceptedUsernames.should('contain.text', 'error_user');
        this.acceptedUsernames.should('contain.text', 'visual_user');
    }

    verifyAcceptedPassword = () => {
        this.acceptedPassword.should('contain.text', 'Password for all users:');
        this.acceptedPassword.should('contain.text', 'secret_sauce');
    }
}