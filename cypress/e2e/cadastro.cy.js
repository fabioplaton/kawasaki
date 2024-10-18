import Register from "../support/pageObjects/Register"

const registro = new Register()

  let config 
  

  beforeEach (() => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/')
  })

  before(() => {
    cy.fixture('config').then((data) => {
      config = data
    })
  })  

  it('TC01 - cadastro válido', () => {
    registro.ClickMinhaKawasaki()
    registro.EnterEmail(config.email)
    registro.EnterPassword(config.password)
    registro.EnterConfirmePassword(config.password)
    registro.ClickAgreeTermsAndConditions()
    registro.ClickRegister()
    cy.get('.validation-summary-errors > span').should('have.text', 'Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.')
    cy.url().should('eq', 'https://www.kawasakibrasil.com/pt-br/MyKawasaki/Register?ReturnUrl=%2Fpt-br%2Fminha-kawasaki')
  })