class LoginPage {

    launchUrl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginData({username, password}){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', username)

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', password)

        cy.get('.oxd-button').click()
    }

    verifyDashboard(){
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard').should('exist')
    }

    verifyInvalidCredentials(){
        cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials').should('exist')
    }

    verifyErrorMessage(){
        cy.get('.oxd-input-group > .oxd-text').contains('Required').should('exist')
    }
}

export default new LoginPage()