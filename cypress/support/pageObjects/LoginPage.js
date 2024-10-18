class LoginPage{
    ClickMinhaKawasaki(){
        cy.get('[aria-label="My Kawasaki"]').click()
    }

    EnterMail(email){
        cy.get('#Email').type(email)
    }

    EnterPassword(password){
        cy.get('#Password').type(password)
    }

    ClickButtonLogin(){
        cy.xpath('//button[@class="blackBtn" and contains(text(), "LOGIN")]').click()
    }

    ValidarUser(){
        cy.get('#dropdownMenuLink').should('contains.text', 'platonfabio@hotmail.com')
    }
}
export default LoginPage