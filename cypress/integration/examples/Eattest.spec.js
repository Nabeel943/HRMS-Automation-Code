describe('My first test cypress', () => {

    it('Negative Login values', () => {

        cy.visit("https://hr.devsinc.com/dashboard")

        cy.get(":nth-child(3) > .landing-page-form-field").type("nabeel.akram@devsinc.com")

        cy.get(":nth-child(4) > .landing-page-form-field").type("Seamoon12345")

        cy.get(".landing-page-button").click()

        cy.get(".landing-page-error-div").contains("Invalid login credentials. Please try again.")

    })
    it('Positive Login values', () => {

        cy.visit("https://hr.devsinc.com/dashboard")

        cy.get(":nth-child(3) > .landing-page-form-field").type("nabeel.akram@devsinc.com")

        cy.get(":nth-child(4) > .landing-page-form-field").type("Seamoon098")

        cy.get(".landing-page-button").click()

        cy.get(".landing-page-error-div").contains("Invalid login credentials. Please try again.")

    })
})
