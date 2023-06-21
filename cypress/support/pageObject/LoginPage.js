class LoginPage
{

userNameTexField()
{
    return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
}

passwordTexField()
{
    return  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
}
dashboardLable()
{
    return  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
}


passwordErrorMessage()
{
    return  cy.get('.oxd-alert-content > .oxd-text')
}
loginButton(){

    return  cy.get('.oxd-button')

}

}



export default LoginPage;