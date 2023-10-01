import * as cypress from "cypress";

describe("Listen to me e2e", () => {
  it("classic user path", () => {
    // logged-in user homepage 
    cy.visit("/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("currentAccessToken", "token");
      },
    });
    cy.get("h2").contains("Top titres");
    cy.get("[aria-label='swiper-tracks']");
    cy.get("h2").contains("Top albums");
    cy.get("[aria-label='swiper-albums']");
    cy.get("h2").contains("Top playlists");
    cy.get("[aria-label='swiper-playlists']");
    cy.get("h2").contains("Top podcasts");
    // click on a podcast
    cy.get("[aria-label='swiper-podcasts']").within(() => {
      cy.get("[data-swiper-slide-index='0']").click();
    });

    // redirect to podcast page
    cy.url().should("include", "podcast");
    cy.get("h2").contains("Liste des podcasts");
    cy.get("iframe");
    // switch to dark mode
    cy.get("[aria-label='dark mode']").click();
    cy.get("[aria-label='light mode']");
    cy.get("a").contains("Listen to me").click();

    // redirect to homepage
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("h2").contains("Top titres");
  });
});
