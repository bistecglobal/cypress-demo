/// <reference types="Cypress" />
import LoginPage from '../../../support/pageObject/LoginPage'

describe('Login Test Suite', function() 
{
  before(function () {
    // runs once before all tests in the block
    cy.fixture('loginDetails').then(function (data) {
      this.data = data
      
    })
  })

  it('Success Test Scenarios',function () {
    
    const loginPage = new LoginPage()
    cy.visit(Cypress.env('url'))
    loginPage.userNameTexField().type(this.data.userName)
    loginPage.passwordTexField().type(this.data.password)
    loginPage.loginButton().click()
    loginPage.dashboardLable().should('have.text',this.data.verifyText)
  })


 
})