describe('Book App - Search Section', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
    cy.contains('button', 'Home').click()
  })
 

  it('TC001 - Search dengan keyword valid', () => {
    cy.get('button:has(svg)').first().click()
    cy.get('input[type="text"]').type('Dashboard{enter}')
    cy.contains('Dashboard').should('exist')
  })

  it('TC002 - Search dengan keyword tidak valid', () => {
    cy.get('button:has(svg)').first().click()
    cy.get('input[type="text"]').type('ABCXYZ{enter}')
    cy.contains('No results found').should('be.visible')
  })

  it('TC003 - Search kosong (tanpa input)', () => {
    cy.get('button:has(svg)').first().click()
    cy.get('input[type="text"]').type('{enter}')
    cy.contains('Please enter a keyword').should('be.visible')
  })
 })