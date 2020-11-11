import SignInDetail from "../Pages/SignInDetail"
import DashboardDetail from "../Pages/DashboardDetail"
describe('Dashboard Test Suit', function ()
 {
    const signinpage= new SignInDetail();
    const dashboardpage= new DashboardDetail();
      beforeEach(()=>{

        cy.visit("https://hr-staging.devsinc.com/login")
          signinpage.fillEmail().type("jawad.firdous@devsinc.com");
          signinpage.fillPassword().type("C0mplexpass");
          signinpage.SignInButton().click(),{pageLoadTimeout:100000};
    })
   it ("Dashboard New Arrival Widget", function() 
   {
       dashboardpage.NewArrivalWidget().should('be.visible')
      // cy.get(".new-arrival-main-div").matchScreenshot('barChart')
       
   })

   it ("View New Arrival profile check",function() 
   {
          dashboardpage.NewArrivalProfileClick().click()
          cy.url().should('contain','https://hr-staging.devsinc.com/people/')

   })

   it ("Out of office widget",function()
   
   {
       dashboardpage.OutofOfficeWidget().should('be.visible')
   })
  //  it ("People On Leaves (back date)",function()
   
  //  {
            // Need to Discuss this TestCase
  //  })
   it ("Out of Office Profiles checkout.",function()
   
   {
     dashboardpage.OutofOffice().click()
     cy.url()
   })
  //  it ("View user profile from Out of office widget and New arrival widget.",function()
   
  //  {
  //      dashboardpage.OutofOffice().click();
  //      cy.url().should('contain','https://hr-staging.devsinc.com/people/')

  //  })
  // //  it ("View user profile from Out of office widget and New arrival widget without profileview permission.",function()
   
  // //  {

  // //  })
   it ("Tooltip text on right side widgets",function()
   
   {
     
      dashboardpage.Pendingleavetext().should('contain','You have')
  //     //Its Not working because insdie div we have text and in that we have span and then text

  //   //   dashboardpage.AssignedTicketText().should('contain','You have active Assigned Tickets')
  //   //   dashboardpage.ExpenseText().should('contain','You have 19 Pending Expense Approvals')
  //   //   dashboardpage.DnarText().should('contain','You have 5 Pending Dnar Transaction Approvals')

   })
   it ("View and open pending LeaveApprovals",function()
   
   {
        dashboardpage.PendingLeaveWidget().click()
        cy.url().should('eq','https://hr-staging.devsinc.com/leaves')
   })
   it ("Active Assigned Tickets   ",function()
   
   {
       dashboardpage.AssignedTicketWidget().click()
       cy.url().should('eq','https://hr-staging.devsinc.com/tickets')
   })
   it ("Pending Expense Approvals",function()
   
   {
       dashboardpage.ExpenseImage().click()
       cy.url().should('eq','https://hr-staging.devsinc.com/expenses')

   })
   it ("Upcoming Public Holiday",function()
   
   {

    dashboardpage.UpcomingPublicHolidayWidget().should('be.visible')

   })
   it ("profile icon is visible",function()
   
   {
       dashboardpage.ProfileIcon().should('be.visible')
   })
  //  it ("profile icon button is working",function()
   
  //  {
  //    dashboardpage.MyprofileonProfleicon().should('be.visible')
  //  })

   //Its not working at the moment because element is mixed up on Detail
    //and its not showing. 

   it ("Open user's profile on clicking profile header",function()
   
   {
       dashboardpage.NewArrivalProfileClick().click()
        cy.url().should('contain','https://hr-staging.devsinc.com/people/')

   })


 })