/// <reference types="cypress" />
import { checkoutForm, finishCommand, selectProduct, addToCart } from "../utils/checkout";
import { signin, verifyUserConnected } from "../utils/signin";


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

  it("achat de produit", () => {
    signin(email, password)
    verifyUserConnected(firstname, lastname)
    selectProduct()
    addToCart()
    checkoutForm("5th avenue", "New York", "43", "10001", "0016786876");
    finishCommand()
  });
});
