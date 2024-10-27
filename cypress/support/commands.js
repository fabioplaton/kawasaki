import login_page from './pageObjects/login_page'

const config = require('../fixtures/config.json')  

// -- This is a parent command --
Cypress.Commands.add('login', () => {
    login_page.clickMinhaKawasaki()
    login_page.enterMail(config.email)
    login_page.enterPassword(config.password)
    login_page.clickButtonLogin()
    login_page.validarUser(config.email)
})
