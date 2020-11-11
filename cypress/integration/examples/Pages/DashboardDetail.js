class DashboardDetail {




    ProfileIcon(){
        return cy.get(".sb-avatar > .user-avatar")
    }

    MyprofileonProfleicon(){
        return cy.get('[tabindex="0"]').children()
    }


    OutofOfficeWidget(){
        return cy.get(".leave-widget-main-div > #scrollbar-style");
    }

    OutofOffice()
{
    return cy.get("");
}



NewArrivalWidget(){
    return cy.get(".new-arrival-main-div")
}
NewArrivalProfileClick(){
   return cy.get(".new-arrival-report > .link-style > :nth-child(2)")

}




PendingLeaveWidget(){

    return cy.get(".pending-leaves > .pointer")
     
}

Pendingleavetext(){

    return cy.get(".pending-expenses > .pointer > :nth-child(2) > div");
}

PendingLeaveImage(){

    cy.get('.pending-leaves > .pointer > img');
}


AssignedTicketWidget(){
    return cy.get(".inbox-tickets > .pointer")
}

AssignedTicketText(){
    return cy.get(".inbox-tickets > .pointer > :nth-child(2) > div")
}

AssignedTicketImage(){
    return cy.get(".inbox-tickets > .pointer > img")
}

ExpenseWidget(){
    return cy.get(".pending-expenses > .pointer")
}

ExpenseText(){
    return cy.get(".pending-leaves > .pointer > :nth-child(2) > div")
}
ExpenseImage (){

    return cy.get(".pending-expenses > .pointer > img");
}

DnarText(){
   return cy.get('.pending-dnar-transactions > .pointer > :nth-child(2) > div')
}
UpcomingPublicHolidayWidget(){
    return cy.get(".holiday-widget-main-div")
}

UpcomingHoliday()
{
    return cy.get("holiday-record")
}

DnarWidget(){
    return cy.get(".pending-dnar-transactions > .pointer")
}

}
export default DashboardDetail