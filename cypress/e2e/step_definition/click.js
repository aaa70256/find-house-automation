import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I search {string} region,I can see {string} target', (area, title) => {
  cy.get(`#${area}`).click()
  cy.get('.button').click()
  cy.get('li:nth-child(1) div:nth-child(2) a:nth-child(1)').should('contain.text', title)
})


When('Search for houses priced between {string} and {string},I can see {string} target', (p1, p2, title) => {
  cy.get(`input[value='priceOne']`).type(p1)
  cy.get(`input[value='priceTwo']`).type(p2)
  cy.get('.button').click()
  cy.get('li:nth-child(1) div:nth-child(2) a:nth-child(1)').should('contain.text', title)
})

When('{string} type search ,I can see {string}', (type, title) => {
  cy.get(`#${type}`).click()
  cy.get('.button').click()
  cy.get('li:nth-child(6) div:nth-child(2) a:nth-child(1)').should('contain.text', title)
})

When('house {string} to {string} search ,I can see {string}', (a1, a2, title) => {

  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > select:nth-child(2) > option')
    .each(($el, inde, $list) => {
      if ($el.text() == a1) {
        cy.wrap($el).click({ force: true })
      }
    })

  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > select:nth-child(3) > option')
    .each(($el, inde, $list) => {
      if ($el.text() == a2) {
        cy.wrap($el).click({ force: true })
      }
    })
  cy.get('.button').click()
  cy.get("li:nth-child(2) div:nth-child(2) a:nth-child(1)").should('have.text', title)
})