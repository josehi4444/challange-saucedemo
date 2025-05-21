#challange-qa

This project contains automated tests for the saucedemo.com website using Cypress. The tests cover key user flows such as login, cart and cheackout

# Prerequisites

- Node.js installed (version 14 or higher recommended)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/josehi4444/challange-saucedemo.git
   ```
3. Install the dependencies:
   ```
   npm install
   ```
## Running Tests

To run the tests, you have two options:

1. Run all tests headlessly:
   ```
   npm run test:all:dev
   ```
2. Open Cypress Test Runner and run tests interactively:
   ```
   npm run cypress:open
   ```
## Generating Test Report

This project uses Allure for generating detailed test reports. To generate and view the report:

# OPTION 1: Generate the report only (does NOT open it)
  **Recommended for CI/CD pipelines or when uploading the report
    as an artifact (non-interactive environments)**

### Command:
 ```
  npm run allure:generate
 ```
### You can then open the report manually with:
 ```
 npm run allure:open
 ```
## or by opening the generated file: allure-report/index.html

#  OPTION 2: Generate and open the report locally
**Use this option only for local testing (NOT CI).
  This will generate the report AND start a local web server
  to open it in your browser.**
 
## Command:
 ```
 npm run allure:generate-and-open
 ``` 
# ⚠️ WARNING: This command will hang in CI workflows,
# because the server keeps running until manually closed.

The generated report will include:
- Test execution results
- Summary of pass/fail statuses
- Identified issues (if there is any)

## Project Structure

- `cypress/src/e2e/ui/`: Contains the test spec files organized by site sections
- `cypress/src/pages/`: Implements the Page Object Model for encapsulating selectors and actions
- `cypress/support/commands.js`: Defines custom Cypress commands for reusable functionality
- `cypress.config.js`: Configures Cypress settings and environment-specific configurations
- `config/*.json`: Contains environment-specific configuration files

## Continuous Integration

This project can be easily integrated with a CI/CD pipeline to run tests automatically on each code change. The `test:all:dev`or `test:all:stage` command can be used in the CI configuration to execute tests headlessly.

## Further Improvements

- Add screenshots or videos on test failure for better debugging
- Expand test coverage to include more scenarios and edge cases
- Integrate with a bug tracking system to automatically create issues 
