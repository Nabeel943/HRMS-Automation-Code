/// <reference types="Cypress" />

import SignInDetail from "/home/dev/cypressTest/cypress/integration/examples/Pages/SignInDetail.js"
const examples = require('../../../fixtures/InvalidEmail');

beforeEach(()=> {
  cy.visit('https://hr-staging.devsinc.com/login')
})

describe('Sign In Testing', function () {

    const signinpage    = new SignInDetail()
    //const dashboard     = new DashboardDetail()

  it ('Visibilty of all Elements On SignIn Page', function()
  {
    
  })

    it("Invalid Email Testing", function ()
     {
        cy.InvalidEmail('InvalidEmail.json', 'abc123')

        })

    it ("Invalid Password testing",function()
    {

      cy.InvalidPassword('InvalidPassowrd.json')
    })

        it( 'Login valid Cardenalities', function()
        {
          signinpage.fillEmail().type("jawad.firdous@devsinc.com");
          signinpage.fillPassword().type("C0mplexpass");
          signinpage.SignInButton().click();
          cy.url().should('eq', 'https://hr-staging.devsinc.com/dashboard')
          cy.get(".heading > h5").should('contain','Dashboard')
    })

    // it('Password Chanage Through Forgot Password',function()
    
    // {
    //   signinpage.ForgotPassword().click();
    //   cy.url().should('eq',"https://hr-staging.devsinc.com/forgot_password");
    //   cy.get(".landing-page-button").should('contain.text',"Send Reset Password Email");
    //   cy.get(".landing-page-form-field").type("jawad.firdous@devsinc.com");
    //   cy.get(".landing-page-button").click();
    //   cy.get(".landing-page-text > :nth-child(1)")
    //   .should("contain","An email has been sent to ")
    //   cy.visit("https://api-staging.devsinc.com/letter_opener")
    //   cy.get(".refresh").click();
    //   cy.get(".active > :nth-child(1) > a").click();
    //   cy.get("#mail").click()
    //   // Right Below line here its not working
    //   cy.get('a[href*="password"]').click()
    //   // cy.get("").click()
    //   // cy.get("input").type("Nabeel12345")
    //   // cy.get("input").type("Nabeel12345")
    //   // cy.get("//button[contains(text(),'Proceed')]").click();
    //   // cy.url().should('eq',"https://hr-staging.devsinc.com/login")
    //   // cy.get(".landing-page-button").click();

    // })
})









































//    it('cy.request() with query parameters', () => {
//        // will execute request
//        // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
//        cy.request({
//          url: 'https://jsonplaceholder.cypress.io/comments',
//          qs: {
//            postId: 1,
//            id: 3,
//          },
//        })
//        .its('body')
//        .should('be.an', 'array')
//        .and('have.length', 1)
//        .its('0') // yields first element of the array
//        .should('contain', {
//          postId: 1,
//          id: 3,
//        })
//      })
//
//
//
//    it('Match the required url', function () {
//
//
//        cy.get(":nth-child(3) > .landing-page-form-field").type("nabeel.akram+@devsinc.com")
//
//        cy.get(":nth-child(4) > .landing-page-form-field").type("Nabeel12")
//
//        cy.get(".landing-page-button").click;
//
//        cy.server();
//                  cy.route({
//                  method: 'POST',
//                  url: 'https://hr-staging.devsinc.com/login',
//
//               }).as('putComment')
//
//                cy.get('@putComment').should((req) => {
//
//                  expect(req.method).to.equal('POST')
//                  //expect(req.url).to.match(/\/posts$/)
//                  // it is good practice to add message to the assertion
//                  expect(req, 'has duration in ms').to.have.property('duration').and.be.a('number')
//                })
//
//
//     //   cy.get('@putComment').should('have.property', 'status', 200)
//
//    })
//
//    it("Testing the Back-End" , function()  {
//
//    cy.request("https://api-staging.devsinc.com/api/v1/admin/dnar/minting_requests")
//    .its("Headers")
//    .its("content-type")
//    .should('uid','jawad.firdouse@devsinc.com')
//    })
//
//    it('Testing Back-end', function () {
//
//    const makeRequest = () => {
//      const xhr = new XMLHttpRequest();
//      xhr.open("POST", "https://api-staging.devsinc.com/api/v1/dnar_transactions")
//      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
//      const data = {
//        title: 'example post',
//        body: 'this is a post sent to the server',
//        userId: 1
//      }
//      xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4) {
//          document.getElementById('output').innerText = xhr.response
//        }
//      }
//      xhr.send(JSON.stringify(data))
//    }
//    document.getElementById('load').addEventListener('click', makeRequest)
//        })

//    it('Negative Value of SignIn Page and network negative value response', function () {
//
//
//        cy.request(
//            {method: 'POST'},
//
//            {url: 'https://hr-staging.devsinc.com/login'},
//
//            {email: 'nabeel.akram@devsinc.com'},
//
//            {password: 'iqhiqihduhoq'})
//
//            .then((response) => {
//
//                expect(response.body).to.have.property('email', 'nabeel.akram@devsinc.com')
//
//                expect(response.body).to.have.property('password', 'iqhiqihduhoq')
//
//
//            })
//
//
//        signinpage.visit();
//
//        signinpage.fillEmail(example.email)
//
//        signinpage.fillPassword(example.password)
//
//        cy.server();
//
//        cy.route({
//
//            url: 'https://hr-staging.devsinc.com/login',
//
//            method: 'POST',
//
//            response: '401 (Unauthorized)'
//
//        }).as('SignInResponse')
//
//
//        signinpage.SignInButton()
//
//        cy.wait('@SignInResponse', {timeout: "15000"})
//
//        signinpage.InvalidEmail_password_Error().then(($btn) => {
//
//            expect($btn.text()).to.eq('Invalid login credentials. Please try again.')
//
//        })
//
//    })




