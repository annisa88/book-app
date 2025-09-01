describe('Book App - Notification Section', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
    cy.contains('button', 'Home').click()
  })

it('TC004 - Menampilkan icon notifikasi', () => {
  cy.get('button svg.lucide-bell')
    .should('exist')
    .and('be.visible')
})

it('TC005 - Klik icon notifikasi', () => {
  cy.get('button svg.lucide-bell').click()
    .should('exist')
    .and('be.visible')
  })
})