import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Navigate to the find house page', () => {
  cy.visit('https://find-house-web.netlify.app/#/')
})

Then('visible the page', () => {
  cy.get('.header-title').should('have.text', '優質好房看過來')
})