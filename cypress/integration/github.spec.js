const viewports = [
  {
    width: 800,
    height: 600
  },
  {
    width: 1366,
    height: 768
  }
]

context('Github', () => {
  it('BackstopJS', () => {
    // https://on.cypress.io/window
    cy.visit('https://slack.com/')

    cy.checkRegression('BackstopJS', viewports)
  })
})
