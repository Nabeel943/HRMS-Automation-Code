import { should } from 'chai';
import SignInDetail from '../Pages/SignInDetail'



const examples = require('../../../fixtures/InvalidEmail');

describe('Sign in API Testing', function () {


    it("Hello Testing  ", function ()
    {

       cy.server
       ({
         method: 'GET',
         status: 200,
         failOnStatusCode: false
       })

       
           cy.request({
               url:'https://api-staging.devsinc.com/api/v1//permissions',
               method:"GET",
               failOnStatusCode:false,
               headers:{
               
                    "access-token" : 'vBrNFsL38ncC8nDcABuApg',
                   "client":'9bhwZiE03iZE7BfDxKbyiA',
                   "uid":'salman.ali@devsinc.com'
               }
            
           }) .should((response)=>
       {
         console.log(response.body);
         expect(response.body).within({
             allpermissions:{
                 permissions:{
                        tickets_create_ticket: "full"
                     }
                 
             }
         })

       })
    })


    it("Auth Sign in API Testing. ", function ()
     {

        cy.server
        ({
          method: 'POST',
          status: 200,
          failOnStatusCode: false
        })

        
            cy.request({
                url:'https://api-staging.devsinc.com/api/v1/auth/sign_in',
                method:"POST",
                body :{
                    email:'jawad.firdous@devsinc.com',
                    password:'C0mplexpass'
                }
            })
        .should((response) => 
        
        {
            console.log(response.body)
       
        
        })
        //This is for the testing purpose git
        
    })


















    // it('Server response body elements', () => {


    //     cy.request
    //     ({
    //         url: 'http://localhost:3000/api/v1/auth/sign_in',

    //         method: 'POST',

    //         failOnStatusCode: false,

    //         body:

    //             {
    //                 email: 'admin@devsinc.com',

    //                 password: 'pass123456789'

    //             }
    //     }).then(function (resp) {

    //         const response1 = resp.body.data

    //         expect(response1).to.have.property('email', "admin@devsinc.com")

    //         expect(resp.status).to.eq(200)

    //         expect(resp.redirectedToUrl).to.eq(undefined)

    //         expect(resp.method).to.eq(undefined)
    //     })

    // })

    // it('Server all negative values response for Email and Password', function () {

    //     cy.request({

    //         url: 'http://localhost:3000/api/v1/auth/sign_in',

    //         method: 'POST',

    //         failOnStatusCode: false,

    //         body: {email: 'admin@devsinc.com', password: 'pass12345678'}

    //     }).as('xhr')

    //     cy.get('@xhr').should((response) => {

    //         expect(response.status).to.eq(401)
    //     })

    // })


    // //UI testing
    // it('Server or UI response on Invlid login ', function () {

    //     signinpage.visit()

    //     signinpage.fillEmail(example.username)

    //     signinpage.fillPassword(example.password)

    //     signinpage.SignInButton().as('button')

    //     cy.get('@button').should('have.text', 'Sign In').and('have.class', 'landing-page-button')

    //         .and('have.css', 'background-color', 'rgb(0, 184, 176)')

    //     cy.get('@button').click()

    //     expect(signinpage.InvalidEmail_password_Error().should('be.visible')

    //         .and('have.text', 'Invalid login credentials. Please try again.'))

    // })

    // it('Email or password Negative values', function () {

    //     signinpage.visit()

    //     signinpage.fillEmail()

    //     signinpage.fillPassword()

    //     signinpage.SignInButton().click

    //     signinpage.InvalidEmail_password_Error().should('be.visible')

    // })


    // it('Email or password Positive values', function () {

    //     signinpage.visit()

    //     signinpage.fillEmail("admin@devsinc.com")

    //     signinpage.fillPassword("pass123456789")

    //     signinpage.SignInButton().click

    //     //Dashboard Page URL or Dashboard Load.

    // })

})
// cy.get('.heading > h5').should('have.text','Dashboard')
//           .and
//            cy.url().should('contain', '/dashboard');


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


        //Disable Button
        // cy.get("#button-covered-in-span").click().then(x => {
        //     // Only here if click succeeds (so test fails)
        //     done(new Error('Expected button NOT to be clickable, but click() succeeded'));
        //   })
        
        // })
         //  expect(res.body).should({})
    //  expect(res.body.should.have.property('data').that.includes.all.keys(['status', 'id', 'name', 'email',]))
    //     expect(res.body, 'response body').to.should.have.property({
    //         permissions:{
    //             permissions:{
    //                     admin_panel_pages_approve_dnar_requests: "none",
    //                     categories_create_category:"full"
    //                 }
                
    //         }
            
    //     })
           
        //  expect(response.status).to.eq(200)
        // expect(response).to.have.property('categories_create_category : "full"')
    //Server Side Script
  
    // it('Permission API Response',function(){

    //     cy.server
    //     ({
    //       method: 'GET',
    //       status: 200,
    //       failOnStatusCode: false
    //     })

    //     cy.request({
    //         url:'https://api-staging.devsinc.com/api/v1//permissions',
    //         method:'GET',
    //         body:{
    //             email:'salman.ali@devsinc.com',
    //             password:'Nabeel12345'
    //         }

    //     })
    //     .should((response)=>
    //     {
    //         console.log(response.body)

    //         // expect(response.property).to.value{
    //         //     ('Create ticket')}

    //     })



    // })
      //  expect(response).to.have.property('duration')
        //  expect(response).property('status').to.equal(200)
        //  expect(response).property('headers').to.have.property('server').and.be.eq('cloudflare')
   //   expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
   //   expect(response).to.include.keys('headers', 'duration')

   //      expect(response.should('contain'),{data:{id:"1",email:"jawad.firdouse@devsinc.com"}})



    //   expect(response.status).to.eq(200)
        //   expect(response).to.have.property('headers')
        //   expect(response).to.have.property('duration')
        //   expect(response).property('status').to.equal(200)
        //   expect(response).property('headers').to.have.property('server').and.be.eq('cloudflare')
    //   expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
    //   expect(response).to.include.keys('headers', 'duration')

    //      expect(response.should('contain'),{data:{id:"1",email:"jawad.firdouse@devsinc.com"}})