export function signin(email, password) {
  cy.get(".panel.wrapper > .panel").find(".authorization-link").click();
  cy.get('[data-ui-id="page-title-wrapper"]').should(
    "have.text",
    "Customer Login"
  );
  cy.get("#email").type(email).should("have.value", email);
  cy.get("#pass").type("Azerty123").should("have.value", password);
  cy.wait(1000);
  cy.get("#send2").click();
  cy.wait(1000);
}

export function verifyUserConnected(firstName, firstName) {
  cy.get(".page-header")
    .find(".logged-in")
    .should("have.text", "Welcome, " + firstName + " " + firstName + "!");
  cy.wait(2000);
}
