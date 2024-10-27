/// <reference types="cypress"/>
import Register_Page from "../support/pageObjects/Register_Page"
import { faker, Faker } from "@faker-js/faker"

const email = faker.internet.email()
const password = faker.internet.password()

beforeEach (() => {
  cy.visit('/')
  Register_Page.clickMinhaKawasaki()
})

it('TC01 - cadastro válido', () => {
  Register_Page.enterEmail(email)
  Register_Page.enterPassword(password)
  Register_Page.enterConfirmePassword(password)
  Register_Page.clickAgreeTermsAndConditions()
  Register_Page.clickRegister()
  Register_Page.validaçãoCadastro(email)
})

it('TC02 - cadastro sem email', () => {
  Register_Page.clickRegister()
  Register_Page.validacaoEmailError()
})

it('TC03 - cadastro email inválido', () => {
  Register_Page.enterEmail('Virginie33')
  Register_Page.enterPassword(password)
  Register_Page.enterConfirmePassword(password)
  Register_Page.clickAgreeTermsAndConditions()
  Register_Page.clickRegister()
  Register_Page.validacaoEmailInvalido()
})

it('TC04 - cadastro sem senha', () => {
  Register_Page.enterEmail(email)
  Register_Page.clickRegister()
  Register_Page.validacaoPasswordErro('O campo "Senha" é obrigatório.')
})

it('TC05 - cadastro senha inválida', () => {
  Register_Page.enterEmail(email)
  Register_Page.enterPassword('12345')
  Register_Page.clickRegister()
  Register_Page.validacaoPasswordErro('A senha deve ter pelo menos 8 caracteres')
})

it('TC06 - cadastro confirmação de senha em branco', () => {
  Register_Page.enterEmail(email)
  Register_Page.enterPassword(password)
  Register_Page.clickRegister()
  Register_Page.validacaoConfirmacaoPassword('A senha e a senha de confirmação não coincidem. Por favor, tente novamente.')
})

it('TC07 - cadastro confirmação de senha diferente da senha', () => {
  Register_Page.enterEmail(email)
  Register_Page.enterPassword(password)
  Register_Page.enterConfirmePassword('123456')
  Register_Page.clickRegister()
  Register_Page.validacaoConfirmacaoPassword('A senha e a senha de confirmação não coincidem. Por favor, tente novamente.')
})

it('TC08 - cadastro sem verificação de maior de 18 anos ', () => {
  Register_Page.enterEmail(email)
  Register_Page.enterPassword(password)
  Register_Page.enterConfirmePassword(password)
  Register_Page.clickRegister()
  Register_Page.validacaoCheckIdade()
})