/// <reference types="Cypress" />
import LoginPage from '../../../support/pageObject/LoginPage'

describe('Login Negative Test Suite', function() 
{
  before(function () {
    // runs once before all tests in the block
    cy.fixture('loginDetails').then(function (data) {
      this.data = data
      
    })
  })

  it('Wrong Password Enter Fail Test Scenarios ',function (){
    const loginPage = new LoginPage()
    cy.visit(Cypress.env('url'))
    loginPage.userNameTexField().type(this.data.userName)
    loginPage.passwordTexField().type(this.data.wrongPassword)
    loginPage.loginButton().click()
    loginPage.passwordErrorMessage().should('have.text',this.data.errorVerifyText)

  })
})