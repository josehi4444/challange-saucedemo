import LoginPage from './pages/login';
import InventoryPage from './pages/inventory';

describe('SauceDemo Login Tests', () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const baseUrl = Cypress.env('baseUrl');
    
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('should display error message for empty credentials', () => {
             loginPage.clickLogin();
            loginPage.verifyErrorMessage('Username is required');
     });

    it('should display error message for invalid username', () => {
        cy.fixture('loginData').then((data) => {
            loginPage.enterUsername(data.invalidCredentials.username);
            loginPage.enterPassword(data.invalidCredentials.password);
            loginPage.clickLogin();
            loginPage.verifyErrorMessage('Username and password do not match any user in this service');
        });
    });

    it('should display error message for locked out user', () => {
        cy.fixture('loginData').then((data) => {
            loginPage.enterUsername(data.lockedOutUser.username);
            loginPage.enterPassword(data.lockedOutUser.password);
            loginPage.clickLogin();
            loginPage.verifyErrorMessage('Sorry, this user has been locked out.');
        });
    });

    it('should login successfully with valid credentials', () => {
        cy.fixture('loginData').then((data) => {
            loginPage.enterUsername(data.validCredentials.username);
            loginPage.enterPassword(data.validCredentials.password);
            loginPage.clickLogin();
            cy.url().should('include', '/inventory.html');
        });
    });

    it('should display accepted usernames and password', () => {
        loginPage.verifyAcceptedUsernames();
        loginPage.verifyAcceptedPassword();
    });
});

   
 