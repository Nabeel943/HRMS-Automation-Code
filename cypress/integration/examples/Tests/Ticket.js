import TicketDetail from "../Pages/TicketDetail"
import SignInDetail from "/home/dev/cypressTest/cypress/integration/examples/Pages/SignInDetail.js"
const signinpage= new SignInDetail()
const ticketpage=new TicketDetail()
describe('Dashboard Test Suit', function ()
 {
     beforeEach(()=>{
       cy.visit("https://hr-staging.devsinc.com/login")
          signinpage.fillEmail().type("jawad.firdous@devsinc.com");
          signinpage.fillPassword().type("C0mplexpass");
          signinpage.SignInButton().click()
          ticketpage.TicketSideBar().click()
     })
    //  it('Testing Clicking element',function(){

    //   for (var x = 1; x < 20; x++){

    //   ticketpage.TicketListTitleXpath(x).click()

    //   ticketpage.TicketSideBar().click()
    //   }
    //  })
  
    //  it('Ticket Centre header text',function(){

    //   expect(ticketpage.TicketTitleHeader().should('be.visible').should('contain.text','Ticket Centre'))
    // })

    //  it('create new ticket button is visible ',function(){

    //   expect (ticketpage.NewTicketButton().should('be.visible'))

    // })
    // it('create new ticket button is working',function(){

    //  expect(ticketpage.NewTicketButton().should('be.visible').click())
    //  expect(cy.xpath('//button[contains(text(),"Send Ticket")]').scrollIntoView().should('be.visible'))

    // })
    it('To (assignee) field is mandatory ',function(){

    ticketpage.NewTicketButton().click()
    ticketpage.NewTicketTitle().type("Hello1422")
    ticketpage.NewTicketDescription().type("Wuhuuecu")
    ticketpage.CategoryDropDown().click().select('react-select-8--option-2')
    //ticketpage.Category1().click()
  
    // ticketpage.NewTicketPriorityDropDown().type('High')
    // ticketpage.NewTicketSentTicket().click()
    // expect(ticketpage.ErrorForAssigneeField().should('be.visible').should('eq','Assignee is required'))


    // })
    // it('CC is optional ',function(){

    // })
    // it('more button below cc field is present and working',function(){

    // })
    // it('more-->select department-->input field appear',function(){

    // })
    // it('more-->select department-->input field is searchable',function(){

    // })
    // it('more-->select department-->drop down',function(){

    // })
    // it('more-->select department',function(){

    // })
    // it('more-->select title-->input field appear',function(){

    // })
    // it('more-->select title-->input field is searchable',function(){

    // })
    // it('more-->select title-->drop down',function(){

    // })
    // it('Testing',function(){

    // })
    // it('Testing',function(){

    // })
    // it('Testing',function(){

    // })
    // it('Testing',function(){

    // })
    // beforeEach(()=>{
  

    // })

    })})