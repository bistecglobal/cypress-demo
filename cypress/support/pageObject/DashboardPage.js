class DashboarPage
{

adminLable(){
    return cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
}

}


export default DashboarPage;
