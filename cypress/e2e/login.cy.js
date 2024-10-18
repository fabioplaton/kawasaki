import LoginPage from "../support/pageObjects/LoginPage"

let config 
const loginpage = new LoginPage()  

beforeEach (() => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/')
})

before(() => {
    cy.fixture('config').then((data) => {
        config = data
    })
})

it('TC 001 - Login com sucesso', () => {
    loginpage.ClickMinhaKawasaki()
    loginpage.EnterMail(config.email)
    loginpage.EnterPassword(config.password)
    loginpage.ClickButtonLogin()
    loginpage.ValidarUser()
})