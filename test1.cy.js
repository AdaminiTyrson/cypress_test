describe("CSFD regression smoke test", () => {

  it("Homepage CSFD je dostupná", () => {

    cy.request("https://www.csfd.cz")
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.contain("ČSFD")

      })

  })

  it("Stránka obsahuje vyhledávání", () => {

    cy.request("https://www.csfd.cz")
      .its("body")
      .should("contain", "Vyhledávání")

  })

  it("Vyhledání filmu Matrix vrátí výsledky", () => {

    cy.request("https://www.csfd.cz/hledat/?q=matrix")
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.toLowerCase()).to.contain("matrix")

      })

  })

  it("Stránka registrace existuje", () => {

    cy.request("https://www.csfd.cz/registrace/")
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.toLowerCase()).to.contain("registrace")

      })

  })

})
