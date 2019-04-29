/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products')
  })

  it('Add item into cart', () => {
    cy.get('[data-cy=product]:first').click()
    cy.get('button')
      .contains('Add to cart')
      .click()
    cy.get('header')
      .contains('My Cart')
      .click()
    cy.get('[data-cy=cart-item-quantity]').contains('1')
  })

  it('Add two items into cart and remove one', () => {
    cy.get('[data-cy=product]:first').click()
    cy.get('button')
      .contains('Add to cart')
      .click()
    cy.get('button')
      .contains('Add to cart')
      .click()
    cy.get('button')
      .contains('Add to cart')
      .click()
    cy.get('header')
      .contains('My Cart')
      .click()
    cy.get('button')
      .contains('Remove')
      .click()
    cy.get('[data-cy=cart-item-quantity]').contains('2')
  })
})
