import login_page from '../support/pageObjects/login_page'

const config = require('../fixtures/config.json')  

beforeEach (() => {
    cy.visit('/')
    login_page.clickMinhaKawasaki()
})

it('TC 001 - Login com sucesso', () => {
    login_page.enterMail(config.email)
    login_page.enterPassword(config.password)
    login_page.clickButtonLogin()
    login_page.validarUser(config.email)
})

it('TC 002 - Login email em branco', () => {
    login_page.clickButtonLogin()
    login_page.validacaoEmailError()
})

it('TC 003 - Login email inválido', () => {
    login_page.enterMail('Virginie33')
    login_page.enterPassword(config.password)
    login_page.clickButtonLogin()
    login_page.validacaoEmailInvalido()
})

it('TC 004 - Login sem password', () => {
    login_page.enterMail(config.email)
    login_page.clickButtonLogin()
    login_page.validacaoPasswordError()
})

it.only('TC 005 - Login password inválido', () => {
    login_page.enterMail(config.email)
    login_page.enterPassword('123456')
    login_page.clickButtonLogin()
    login_page.validacaoEmailOuSenhaIncorretos()
})