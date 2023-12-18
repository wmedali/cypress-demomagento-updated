// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("signup", (firstName, lastName, email, password) => {
  cy.get("#firstname").type(firstName).should("have.value", firstName);
  cy.get("#lastname").type(lastName).should("have.value", lastName);
  cy.get("#email_address").type(email).should("have.value", email);
  cy.get("#password").type(password).should("have.value", password);
  cy.get("#password-confirmation")
    .type(password)
    .should("have.value", password);
  cy.get(".action.submit.primary").click();
});
