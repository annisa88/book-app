
describe('Book App - Profile Page', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
    cy.contains('button', 'Profile').click()
  })

it('TC050 - Navigasi ke halaman Profile', () => {
    cy.contains('button', 'Profile').click()
    cy.get('header h1').should('contain.text', 'Profile')
  })

  it('TC051 - Menampilkan total buku di Profile', () => {
    cy.contains('button', 'Profile').click()
    cy.contains('Books').should('exist')
  })

  it('TC052 - Menampilkan current streak di Profile', () => {
    cy.contains('button', 'Profile').click()
    cy.contains('Streak').should('exist')
  })

  it('TC053 - Menampilkan avg rating di Profile', () => {
    cy.contains('button', 'Profile').click()
    cy.contains('★').should('exist')
  })

  it('TC054 - User dapat kembali ke halaman Profile setelah berpindah tab', () => {
    cy.contains('button', 'Home').click()
    cy.contains('button', 'Profile').click()
    cy.get('header h1').should('contain.text', 'Profile')
  })
})