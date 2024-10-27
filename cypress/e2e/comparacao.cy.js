import compar_page from '../support/pageObjects/compar_page'

const config = require('../fixtures/config.json')

beforeEach (() => {
    cy.visit('/')
})

it('TC 001 - comparando motos', () => {
    cy.login()
    compar_page.clickFerramentasdeCompra()
    cy.wait(1000)
    compar_page.clickCompararVeiculos()
    //selecionando a moto ninja ZX-4R
    compar_page.clickADDComparacaoNijaZX4R()
    //selecionando a moto Z500
    compar_page.clickAddComparacaoZ500() 
    compar_page.clickCompareButton()
    compar_page.verificarPaginadeComparacao()
})
