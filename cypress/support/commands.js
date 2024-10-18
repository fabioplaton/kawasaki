// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import LoginPage from "../support/pageObjects/LoginPage"

let config 
const loginpage = new LoginPage()  

before(() => {
    cy.fixture('config').then((data) => {
        config = data
    })
})

// -- This is a parent command --
Cypress.Commands.add('login', () => {
    loginpage.ClickMinhaKawasaki()
    loginpage.EnterMail(config.email)
    loginpage.EnterPassword(config.password)
    loginpage.ClickButtonLogin()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />