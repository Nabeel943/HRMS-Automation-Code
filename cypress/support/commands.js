
//Data Driven Testing Function ( How to get data from fixture)
import { register } from 'cypress-match-screenshot';
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();
register();
import SignInDetail from "/home/dev/cypressTest/cypress/integration/examples/Pages/SignInDetail.js"
const signinobject= new SignInDetail();
const CompareSnapshotCommand= require('cypress-visual-regression/dist/command')
CompareSnapshotCommand();

Cypress.Commands.add("InvalidPassword",(FileName) =>
{

    cy.fixture(FileName).as ("Invalid Password")

    cy.get('@Invalid Password').each(function(location)
    {

         var FirstJsonElement=Object.values(location);

         FirstJsonElement.forEach((value)=>
         {
            cy.get(":nth-child(3) > .landing-page-form-field").type(FirstJsonElement[0])

            cy.get(":nth-child(4) > .landing-page-form-field").type(FirstJsonElement[1])
   
            cy.get(".landing-page-button").click();
   
            cy.get(".landing-page-error-div").then(($error) => {
   
            expect($error.text()).to.eq('Invalid login credentials. Please try again.')
         })
    })
})
})




Cypress.Commands.add("InvalidEmail", (FileName, NumberOfCreatingEnteringData) => {

//    cy.visit("https://hr-staging.devsinc.com/login")

    cy.fixture(FileName).as("Fixture file")

    cy.get('@Fixture file').each(function (location) {

        var firsts = Object.values(location);

        console.log(Object.values(firsts));

        firsts.forEach((value) =>{

        var second = Object.values(firsts);

        cy.get(":nth-child(3) > .landing-page-form-field").type(second[0])

         cy.get(":nth-child(4) > .landing-page-form-field").type(second[1])

         cy.get(".landing-page-button").click();

         cy.get(".landing-page-error-div").then(($error) => {

         expect($error.text()).to.eq('Invalid login credentials. Please try again.')
      

        //  cy.server(
        //     {
        //       method: 'POST',
        //       status: 401,
        //       failOnStatusCode: false
        // })

        //  cy.request(
        //     {
        //         url:"https://api-staging.devsinc.com/api/v1/auth/sign_in",

        //         method:"POST",

        //         body:{

        //             email:second[0],
        //             password:second[1]
        //         },

        //     }).should((response) => { 
        //         expect(response.status).to.eq(401)
        // })

        })

                
        })

        })
        })


//        firsts.forEach((value) => {
//
//        console.log(Object.values(firsts));
//
//          cy.get(":nth-child(3) > .landing-page-form-field").type(value[0])
//
//          cy.get(":nth-child(4) > .landing-page-form-field").type(value[1])
//
//          cy.get(".landing-page-button").click();
//
//          cy.get(".landing-page-error-div").then(($error) => {
//
//              expect($error.text()).to.eq('Invalid login credentials. Please try again.')
//
//              })
//              })
//              })
//              })