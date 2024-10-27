const elements = {
    buttons:{
        minhaKawasaki: '.d-none',
        termsAndConditions: '#AgreeToTermsAndConditions',
        register: '[type="submit"]',
    },
    field: {
        email: '#RegistrationEmail',
        password: '#RegistrationPassword',
        confirmPasswor: '#ConfirmRegistrationPassword'
    },
    message: {
        cadastro: '#dropdownMenuLink',
        emailError: '#RegistrationEmail-error',
        emailInvalido: '.field-validation-error',
        passwordError: '#RegistrationPassword-error',
        confirmacaoPasswordError: '#ConfirmRegistrationPassword-error',
        agreeTerms: '#AgreeToTermsAndConditions-error'
    }
}

export default{
    
    clickMinhaKawasaki(){
        cy.get(elements.buttons.minhaKawasaki).contains('MINHA KAWASAKI').click()
    },

    enterEmail(email){
        cy.get(elements.field.email).type(email)
    },

    enterPassword(password){
        cy.get(elements.field.password).type(password)
    },

    enterConfirmePassword(confirmPassword){
        cy.get(elements.field.confirmPasswor).type(confirmPassword)
    },

    clickAgreeTermsAndConditions(){
        cy.get(elements.buttons.termsAndConditions).check()
    },

    clickRegister(){
        cy.get(elements.buttons.register).contains('REGISTRAR-SE').click()
    },

    validaçãoCadastro(email){
        cy.get(elements.message.cadastro).should('contains.text', `${email}`)
    },

    validacaoEmailError(){
        cy.get(elements.message.emailError).should('be.visible').should('have.text', 'Um endereço de e-mail válido é necessário.')
    },

    validacaoEmailInvalido(){
        cy.get(elements.message.emailInvalido).should('be.visible').should('have.text', 'Endereço de email inválido, tente novamente.')
    },

    validacaoPasswordErro(message){
        cy.get(elements.message.passwordError).should('be.visible').should('contains.text', message)
    },

    validacaoConfirmacaoPassword(message){
        cy.get(elements.message.confirmacaoPasswordError).should('be.visible').should('have.text', message)
    },

    validacaoCheckIdade(){
        cy.get(elements.message.agreeTerms).should('be.visible').should('have.text', 'A verificação de idade é necessária.')
    }
    
}