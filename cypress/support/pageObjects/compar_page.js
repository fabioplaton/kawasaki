const elements = {
    buttons: {
        ferramenteDeCompra: '#purchaseTools',
        compararVeiculos: "h3[class='headFive']",
        compararNinjaZX4R: '[data-productid="5510"]',
        compararZ500: '[data-productid="5549"]',
        compareBtn: '.blackBtn.compareButton',
    },
    message: {
        checkVisaoGeralComparacao: '.headFour.ml-3'
    }
}

export default{

    clickFerramentasdeCompra(){
        cy.get(elements.buttons.ferramenteDeCompra).click()
    },

    clickCompararVeiculos(){
        cy.contains(elements.buttons.compararVeiculos, 'COMPARAR VEÍCULOS').click()
    },

    clickADDComparacaoNijaZX4R(){
        cy.get(elements.buttons.compararNinjaZX4R).eq(1).click()
        },

    clickAddComparacaoZ500(){
        cy.get(elements.buttons.compararZ500).eq(1).click()
    },

    clickCompareButton(){
        cy.get(elements.buttons.compareBtn).eq(0).click()
    },

    verificarPaginadeComparacao(){
        cy.contains(elements.message.checkVisaoGeralComparacao, 'VISÃO GERAL DA COMPARAÇÃO').should('contains.text', 'VISÃO GERAL DA COMPARAÇÃO')
    },

}

