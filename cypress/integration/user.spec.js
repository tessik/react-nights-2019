/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Login succesfull', () => {
    cy.get('header')
      .contains('Sign In')
      .click()
    cy.get('input[type=email]')
      .type('testmail@testmail123456.com', { delay: 100 })
      .should('have.value', 'testmail@testmail123456.com')
    cy.get('input[type=password]')
      .type('123asd', { delay: 100 })
      .should('have.value', '123asd')
    cy.get('button')
      .contains('Sign In')
      .click()
    cy.get('h1').contains('Welcome Jan')
  })

  it('Login failed', () => {
    cy.get('header')
      .contains('Sign In')
      .click()
    cy.get('input[type=email]')
      .type('random@email.com', { delay: 100 })
      .should('have.value', 'random@email.com')
    cy.get('input[type=password]')
      .type('123asd', { delay: 100 })
      .should('have.value', '123asd')
    cy.get('button')
      .contains('Sign In')
      .click()
    cy.get('form > div:first').contains('Email or password are incorrect')
  })

  it('Private route is accessible after login, not before', () => {
    cy.visit('http://localhost:3000/account')
    cy.get('form').contains('Sign Up')
    cy.get('header')
      .contains('Sign In')
      .click()
    cy.get('input[type=email]').type('testmail@testmail123456.com')
    cy.get('input[type=password]').type('123asd')
    cy.get('button')
      .contains('Sign In')
      .click()
    cy.get('h1').contains('Welcome Jan')
  })
})
