class Register{
    
    ClickMinhaKawasaki(){
        cy.get('[aria-label="My Kawasaki"]').click()
    }

    EnterEmail(email){
        cy.get('#RegistrationEmail').type(email)
    }

    EnterPassword(password){
        cy.get('#RegistrationPassword').type(password)
    }

    EnterConfirmePassword(confirmPassword){
        cy.get('#ConfirmRegistrationPassword').type(confirmPassword)
    }

    ClickAgreeTermsAndConditions(){
        cy.get('#AgreeToTermsAndConditions').click()
    }

    ClickRegister(){
        cy.contains('button', 'REGISTRAR-SE').click()
    }
    
}

export default Register