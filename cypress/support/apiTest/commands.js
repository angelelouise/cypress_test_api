Cypress.Commands.add('LoadOxfordFixtures',()=>{
    cy.fixture("apiTest/OxfordFixtures").as("oxford")
})

Cypress.Commands.add('LoadSpotifyFixtures',()=>{
    cy.fixture("apiTest/SpotifyFixtures").as("spotify")
})