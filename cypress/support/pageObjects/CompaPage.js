class CompaPage{

    ClickFerramentasdeCompra(){
        cy.get('#purchaseTools').click()
    }

    ClickCompararVeiculos(){
        cy.contains("h3[class='headFive']", 'COMPARAR VEÍCULOS').click()
    }

    ClickADDComparacaoNijaZX4R(){
        cy.get('[data-productid="5510"]').eq(1).click()
        }

    ClickAddComparacaoZ500(){
        cy.get('[data-productid="5549"]').eq(1).click()
    }

    ClickCompareButton(){
        cy.get('[class="blackBtn compareButton"]').eq(0).click()
    }

    VerificarPaginadeComparacao(){
        cy.xpath('//*[@class="headFour ml-3 pt-3 pb-3" and contains(text(), "VISÃO GERAL DA COMPARAÇÃO")]').should('contains.text', 'VISÃO GERAL DA COMPARAÇÃO')
    }

}

export default CompaPage