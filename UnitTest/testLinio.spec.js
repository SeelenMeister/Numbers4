/// <reference types="Cypress" />


let $tres = 'Linio';
let $cinco = 'IT';
let $ambos = 'Lilianos';

describe('Test Linio', function(){
    it('Iniciamos y abrimos la web', function(){
        cy.visit('https://numberstest.badabin.net/', { timeout: 6000 });
    })
    it('No ingresamos ningun valor, deberia dar error', function(){
        cy.get('#start').click();
        cy.get('#error').should('contain', "YOU MUST ENTER A VALUE IN THE INPUT AND SHOULD NOT BE NEGATIVE")
    })
    it('Ingresamos valores negativos, deberia dar error', function(){
        cy.get('#input').type('-19');
        cy.get('#start').click();
        cy.get('#error').should('contain', "YOU MUST ENTER A VALUE IN THE INPUT AND SHOULD NOT BE NEGATIVE")
    })
    it('Ingresamos 10, deberia resultar en: IT', function(){
        cy.get('#input').clear();
        cy.get('#input').type('10');
        cy.get('#start').click();
        cy.get('#results').should('contain', "IT")
    })
    it('Ingresamos 33, deberia resultar en: Linio', function(){
        cy.get('#input').clear();
        cy.get('#input').type('33');
        cy.get('#start').click();
        cy.get('#results').should('contain', "Linio")
    })
    it('Ingresamos 50, deberia resultar en: IT', function(){
        cy.get('#input').clear();
        cy.get('#input').type('50');
        cy.get('#start').click();
        cy.get('#results').should('contain', "IT")
    })
    it('Ingresamos 90, deberia resultar en: Linianos', function(){
        cy.get('#input').clear();
        cy.get('#input').type('90');
        cy.get('#start').click();
        cy.get('#results').should('contain', "Linianos")
    })
    it('Ingresamos 60, deberia resultar en: Linianos', function(){
        cy.get('#input').clear();
        cy.get('#input').type('60');
        cy.get('#start').click();
        cy.get('#results').should('contain', "Linianos")
    })
    it('Ingresamos 12, deberia resultar en: Linio', function(){
        cy.get('#input').clear();
        cy.get('#input').type('12');
        cy.get('#start').click();
        cy.get('#results').should('contain', "Linio")
    })
});