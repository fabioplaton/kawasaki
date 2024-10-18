class CompaPage{

    ClickFerramentasdeCompra(){
        cy.get('#purchaseTools').click()
    }

    ClickCompararVeiculos(){
        cy.xpath('//h3[@class="headFive" and contains(text(), "COMPARAR VEÍCULOS")]').click()
    }

    ClickADDComparacaoNijaZX4R(){
        cy.get('[data-subcategoryid="1"] > :nth-child(2) > :nth-child(2) > .row > .col-6 > .apparelContainer > .addCompare > .addCompareText').click()
    }

    ClickAddComparacaoZ500(){
        cy.get('[data-msrp="38510"] > .apparelContainer > .addCompare > .addCompareText').click()
    }

    ClickCompareButton(){
        cy.get('.col-3 > .compareButton').click()
    }

    VerificarPaginadeComparacao(){
        cy.xpath('//*[@class="headFour ml-3 pt-3 pb-3" and contains(text(), "VISÃO GERAL DA COMPARAÇÃO")]').should('contains.text', 'VISÃO GERAL DA COMPARAÇÃO')
    }

}

export default CompaPage