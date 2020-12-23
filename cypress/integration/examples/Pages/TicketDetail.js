class TicketDetail {

    //Header Elements

TicketSideBar(){
    return cy.xpath('//body/div[@id="root"]/div[1]/div[2]/nav[1]/div[1]/div[5]/div[1]/div[1]')
}

TicketHeaderColour(){
    return cy.get('jss620 card-header blue-card-header')
}

TicketTitleHeader(){
    return cy.xpath('//span[contains(text(),"Ticket Centre")]')
}

TicketHeaderSubtitle(){
    return cy.get('ticket-subtitle')
}

NewTicketButton(){
    return cy.get('.create-new-ticket > :nth-child(2)')}

NewTicketPlusButton(){
    return cy.get('fa fa-plus icon')
}
NewTicketText(){
    return cy.get("//span[contains(text(),'New Ticket')]")
}
    //Inbox Elements
TicketSearch(){
    return cy.get('search')
}
TicketFilterByButton(){
    return cy.get('css-1r4vtzz')
}
TicketFilterByText(){
    return cy.get('css-1v99tuv')
}
TicketFilterByDownArrow(){
    return cy.get("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]/span[1]/div[1]/button[1]/span[2]/*[1]")
}

TciketFilterByCrossSign(){
    return cy.get('fa fa-times')
}

TicketFilterByAllFilters(){
    return cy.get('css-11unzgr')
}
TicketFilteByFirstElement()
{
    return cy.get('react-select-5-option-0')
}
TicketFilteBySecondElement()
{
    return cy.get('react-select-5-option-1')
}
   
TicketFilteByThirdElement()
{
    return cy.get('react-select-5-option-2')
}
   
TicketFilteByFourthElement()
{
    return cy.get('react-select-5-option-3')
}
// I will copy other Xpath if this will work. 
TicketFilterByFirstCheckBox(){
    return cy.get("//body/div[@id='root']/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]/span[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]")
}

TicketAllList(){
    return cy.get('list assigned-ticket-list')
}
TicketListXpathLeftall(x){
return cy.get('/html/body/div[1]/div/div[2]/div/div/div/div/div/div/div[2]/div/div/div[3]/div/ul/span[x]/div[1]/div[1]')
}

TicketListXpathRightall(x){
    return cy.get('/html/body/div[1]/div/div[2]/div/div/div/div/div/div/div[2]/div/div/div[3]/div/ul/span[x]/div[1]/div[2]')
}
TicketListCreatorImageXpath(x){
    return cy.get('/html/body/div[1]/div/div[2]/div/div/div/div/div/div/div[2]/div/div/div[3]/div/ul/span[x]/div[1]/div[1]/div[1]/div/img')
}
TicketListCategoryXpath(x){
    return cy.get('/html/body/div[1]/div/div[2]/div/div/div/div/div/div/div[2]/div/div/div[3]/div/ul/span[x]/div[1]/div[1]/div[2]/div[1]/span/span')
}
TicketListTitleXpath(x){

  
  return  cy.xpath('//body/div[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/ul[1]/span['+ x + ']/div[1]/div[1]/div[2]/div[2]/div[1]/b[1]')
   }

TicketListcreatorXapth(x){
    return cy.xpath("/html/body/div[1]/div/div[2]/div/div/div/div/div/div/div[2]/div/div/div[3]/div/ul/span[4]/div[1]/div[1]/div[2]/div[3]/span[1]/span[2]")
}

   
    //Sent Elements
    //All Tickets Elements
    //NewTicketPopUp
    NewTicketTitle(){
    return cy.xpath('//body/div[18]/div[2]/div[2]/form[1]/div[1]/div[3]/div[1]/div[1]/div[1]/input[1]')
    }

    NewTicketDescription(){
 return cy.get('.jss234 > .jss229')
    }
    NewTicketCategory(){
        return cy.xpath('//body/div[18]/div[2]/div[2]/form[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]')
    }

    NewTicketPriority(){
    return cy.xpath('//div[contains(text(),Priority")]')
    }
    NewTicketCategoryDornwon(){
        return cy.xpath('.categories-div > .Select > .Select-control > .Select-arrow-zone')
    }

    NewTicketPriorityDropDown(){
    return cy.xpath('//body/div[18]/div[2]/div[2]/form[1]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/span[1]')
    }

    NewTicketDropFiles(){
        return cy.xpath('//body/div[18]/div[2]/div[2]/form[1]/div[1]/div[6]/span[1]/div[1]')
    }

    NewTicketSentTicket(){
        return cy.xpath('//button[contains(text(),"Send Ticket")]')
    }

    NewTicketCancelTicket(){
        return cy.xpath('//button[contains(text(),"Cancel")]')
    }

    NewTicketPopUpCrossbutton(){
        return cy.xpath('//body/div[18]/div[2]/div[1]/h2[1]/*[1]')
    }


    CategoryFirstElement(){
        return cy.xpath('//body/div[18]/div[2]/div[2]/form[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]')
    }

    PriorityFirstElement(){
        return cy.xpath('//body/div[18]/div[2]/div[2]/form[1]/div[1]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]')
    }

    ErrorForAssigneeField(){
        return cy.xpath('//div[contains(text(),"Assignee is required")]')
    }


    CategoryDropDown(){
        return cy.xpath('/html/body/div[18]/div[2]/div[2]/form/div/div[5]/div[1]/div/div[1]/span[1]/div[1]')
    }

    // Category1(){
    //     return cy.get('react-select-8--option-2')
    // }



}
export default TicketDetail