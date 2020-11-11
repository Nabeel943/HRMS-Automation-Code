class SignInDetail {

    //Elements of Login

    visit() {
        cy.visit('https://hr-staging.devsinc.com/login');
    }

    fillEmail() {

      //  return cy.xpath('/html/body/div[1]/div/div[2]/div/div/div/div/div/div/div/div[2]/form/div[1]/span[1]/input')


      return cy.get(":nth-child(3) > .landing-page-form-field")
    }

    fillPassword() {

       return cy.get(":nth-child(4) > .landing-page-form-field")
        
    }

    SignInButton() {

        return cy.get(".landing-page-button");

    }

    ForgotPassword (){

          return cy.get(".landing-page-link")
    }

    InvalidEmail_password_Error()
    {

     return cy.get(".landing-page-error-div")
    }

    BlankEmail_password_Error()
    {

        return cy.get(":nth-child(3) > div")
    }

}
export  default  SignInDetail
