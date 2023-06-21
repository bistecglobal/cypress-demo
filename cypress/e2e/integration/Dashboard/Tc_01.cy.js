/// <reference types="Cypress" />
import LoginPage from '../../../support/pageObject/LoginPage'
import Dashboar from '../../../support/pageObject/DashboardPage'
import UserManagementPage from '../../../support/pageObject/UserManagementPage'



describe('Dashboar Test Suite', function() 
{
  
  before(function () {
    // runs once before all tests in the block
    cy.fixture('loginDetails').then(function (data) {
      this.data = data
      
    })
  })

  it('Success Test Scenarios',function () {
    
    const loginPage = new LoginPage()
    const dashboarpage = new Dashboar()
    const userManagementPage =new UserManagementPage()
    cy.visit( Cypress.env('url'))
    loginPage.userNameTexField().type(this.data.userName)
    loginPage.passwordTexField().type(this.data.password)
    loginPage.loginButton().click()
    loginPage.dashboardLable().should('have.text',this.data.verifyText)
    dashboarpage.adminLable().click({force:true})
    userManagementPage.addButton().click();
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click({force:true})
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click({force:true})
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("1qazXSW@")
    cy.get('.oxd-autocomplete-text-input > input').type("Alice Duval",)
  this.timeout(5000000)
    cy.get('.oxd-autocomplete-option').click({timeout:20000})
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("RajithaN")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("1qazXSW@")
    cy.get('.oxd-button--secondary').click()
  })
})
