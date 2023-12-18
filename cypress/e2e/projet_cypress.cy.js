/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");
const firstname = faker.person.fullName();
const lastname = faker.person.lastName();
const email = faker.internet.email();
const password = "Azerty123*";

describe("Site Magento", function () {
  beforeEach(function () {
    cy.visit("https://magento.softwaretestingboard.com/");
  });
  it(" Create an Account", function () {
    cy.get(".panel.header :nth-child(3)").click();
    cy.wait(2000);

    cy.signup(firstname, lastname, email, password);

    cy.url().should("include", "/customer/account/");
    cy.get(".base").should("be.visible");
    cy.wait(2000);
    cy.get(".box-content > p").should(
      "have.text",
      "\n" + firstname + " " + lastname + "\n" + email + "\n"
    );
  });
  it("Sign in", () => {
    cy.get(".panel.wrapper > .panel").find(".authorization-link").click();
    cy.get('[data-ui-id="page-title-wrapper"]').should(
      "have.text",
      "Customer Login"
    );
    cy.get("#email").type(email).should("have.value", email);
    cy.get("#pass").type("Azerty123").should("have.value", "Azerty123");
    cy.wait(1000);
    cy.get("#send2").click();
    cy.wait(1000);
    cy.get(".page-header")
      .find(".logged-in")
      .should("have.text", "Welcome, " + firstname + " " + lastname + "!");
    cy.wait(2000);

    // Selection de produit
    cy.get('[data-role="content"]')
      .find("#ui-id-8")
      .should("have.text", "Sale")
      .click();
    cy.get(".page-title-wrapper")
      .find('[data-ui-id="page-title-wrapper"]')
      .should("have.text", "Sale");
    cy.get(".categories-menu")
      .find(".title")
      .eq(2)
      .should("have.text", "Gear Deals");
    cy.get(".categories-menu").find(".item :nth-child(1)").eq(11).click();
    cy.get(".products.list").find(".item.product").eq(2).click();

    // Ajout au panier
    cy.wait(1000);
    cy.get("#product-addtocart-button").click();
    cy.wait(1000);
    cy.get(".message-success").should(
      "contain.text",
      "You added Driven Backpack to your shopping cart"
    );
    cy.wait(1000);
    cy.get('[data-block="minicart"]').click();
    cy.wait(1000);
    cy.get("#top-cart-btn-checkout").click();
    cy.wait(6000);

    // Coordonnées du client
    cy.get('[name="street[0]"]').type("5th avenue");
    cy.get('[name="city"]').type("New York");
    cy.get('[name="region_id"]').select("43");
    cy.get('[name="postcode"]').type("10001");
    cy.get('[name="telephone"]').type("0016786876");
    cy.get('[name="ko_unique_1"]').click();
    cy.wait(1000);
    cy.get(".button.action").click();

    // Finalisation de la commande
    cy.get(".action.primary.checkout").click();
    cy.wait(4000);
    cy.get("[data-ui-id=page-title-wrapper]").should(
      "contain.text",
      "Thank you for your purchase!"
    );
  });
});
