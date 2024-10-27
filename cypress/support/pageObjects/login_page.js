import { el } from "@faker-js/faker"

const elements = {
    button: {
        minhaKawasaki: '.d-none',
        login: '[type="submit"]',
    },
    field: {
        email: '#Email',
        password: '#Password',
    },
    message: {
        validarUsuario: '#dropdownMenuLink',
        emailError: '#Email-error',
        emailInvalido: '.field-validation-error',
        passwordError: '#Password-error',
        emailOuSenhaIncorretos: '#validationSummary li',
        desculpeCamposInvalidos: '#validationSummary span'
    }
}


export default{
    clickMinhaKawasaki(){
        cy.get(elements.button.minhaKawasaki).contains('MINHA KAWASAKI').click()
    },

    enterMail(email){
        cy.get(elements.field.email).type(email)
    },

    enterPassword(password){
        cy.get(elements.field.password).type(password)
    },

    clickButtonLogin(){
        cy.get(elements.button.login).contains("LOGIN").click()
    },

    validarUser(message){
        cy.get(elements.message.validarUsuario).should('be.visible').should('contains.text', message)
    },

    validacaoEmailError(){
        cy.get(elements.message.emailError).should('be.visible').should('have.text', 'Um endereço de e-mail válido é necessário.')
    },

    validacaoEmailInvalido() { 
        cy.get(elements.message.emailInvalido).should('be.visible').should('have.text', 'Endereço de email inválido, tente novamente.')
    },

    validacaoPasswordError() {
        cy.get(elements.message.passwordError).should('be.visible').should('contains.text', 'O campo "Senha" é obrigatório.')
    },

    validacaoEmailOuSenhaIncorretos() {
        cy.get(elements.message.desculpeCamposInvalidos).should('be.visible').should('have.text', 'Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.')
        cy.get(elements.message.emailOuSenhaIncorretos).should('be.visible').should('have.text', 'O email ou a senha que você digitou estavam incorretos. Por favor, insira as informações corretas.')
    }
}