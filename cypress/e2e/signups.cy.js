/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");
const firstname = faker.person.fullName();
const lastname = faker.person.lastName();
const email = faker.internet.email();
const password = "Azerty123*";

describe("test d'inscription d'utilisateur", () => {
  it("inscription avec prenom invalide", () => {
    cy.signup("t", "Ali", "mailmail@gmail.com", "Azerty123*");
    // Vérification sur le message d'erreur du prénom
  });
  it("inscription avec nom invalide", () => {
    cy.signup("Ali", "a", "mailmail@gmail.com", "Azerty123*");
    // Vérification sur le message d'erreur du nom
  });
  it("inscription avec email invalide", () => {
    cy.signup("Ali", "Ali", "mailmail@gmailcom", "Azerty123*");
    // Vérification sur le message d'erreur du email
  });
  it("inscription avec mot de passe faible", () => {
    cy.signup("Ali", "Ali", "mailmail@gmail.com", "Aze");
    // Vérification sur le message d'erreur du mot de passe
  });
  it("inscription avec mot de passe moyen", () => {
    cy.signup("Ali", "Ali", "mailmail@gmail.com", "Azerty1");
    // Vérification sur le message d'erreur du mot de passe
  });
  it("inscription réussi", () => {
    cy.signup(firstname, lastname, email, password);
    // Vérification qu'on est bien connecté
  });
});
