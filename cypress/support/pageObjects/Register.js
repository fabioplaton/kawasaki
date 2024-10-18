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
        cy.xpath('//button[@class="blackBtn" and contains(text(), "REGISTRAR-SE")]').click()
    }
    
}

export default Register