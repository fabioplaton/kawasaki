import CompaPage from "../support/pageObjects/CompaPage"

let config
const compapage = new CompaPage()

beforeEach (() => {
    cy.visit('https://www.kawasakibrasil.com/pt-br/')
})

before(() => {
    cy.fixture('config').then((data) => {
        config = data
    })
})

it('TC 001 - comparando motos', () => {
    cy.login()
    compapage.ClickFerramentasdeCompra()
    cy.wait(1000)
    compapage.ClickCompararVeiculos()
    //selecionando a moto ninja ZX-4R
    compapage.ClickADDComparacaoNijaZX4R()
    //selecionando a moto Z500
    compapage.ClickAddComparacaoZ500() 
    compapage.ClickCompareButton()
    compapage.VerificarPaginadeComparacao()
})
