describe("CSFD UI test", () => {

  beforeEach(() => {
    cy.visit("https://www.csfd.cz")
  })

  it("Vyhledání filmu funguje", () => {

    cy.get('input[name="q"]').type("Matrix{enter}")

    cy.url().should("include", "hledat")

    cy.contains("Matrix").first().click()

    cy.get("h1").should("contain", "Matrix")

  })

  it("Registrace otevře správnou stránku", () => {

    cy.contains("Registrace").click()

    cy.url().should("include", "registrace")

  })

})