export function checkoutForm(streetName, city, regionId, postalCode, phoneNumber) {
  cy.get('[name="street[0]"]').type(streetName);
  cy.get('[name="city"]').type(city);
  cy.get('[name="region_id"]').select(regionId);
  cy.get('[name="postcode"]').type(postalCode);
  cy.get('[name="telephone"]').type(phoneNumber);
  cy.get('[name="ko_unique_1"]').click();
  cy.wait(1000);
  cy.get(".button.action").click();
}


export function finishCommand() {
  cy.get(".action.primary.checkout").click();
    cy.wait(4000);
    cy.get("[data-ui-id=page-title-wrapper]").should(
      "contain.text",
      "Thank you for your purchase!"
    );
}

export function selectProduct() {
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
}

export function addToCart() {
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

}