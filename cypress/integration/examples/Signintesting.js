
describe('SignInWithoutPOM', function() {

    const LinkofSignIn=cy.get("http://localhost:3001/login")
    const DevsincLogo=cy.get("img");
    const TechnologyPartner=cy.get(".jss1");
    const ContinuewithGoogle=cy.get(".GoogleLogin");
    const OrUnderline= cy.get("hr");
    const EmaiField=cy.get(":nth-child(3) > .landing-page-form-field");
    const PasswordField=cy.get(":nth-child(4) > .landing-page-form-field");
    const SignInButton=cy.get(".landing-page-button");
    const ForgotPassword=cy.get(".landing-page-link");




    before(function() {
        cy.visit(LinkofSignIn)
    })

    it('Visibility', function () {

        LinkofSignIn.should('be.visible')

    })
})
