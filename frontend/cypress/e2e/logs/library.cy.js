
describe('Book App - Library Page', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
     cy.contains('button', 'Library').click()
  })
it('TC020 - Navigasi ke halaman Library', () => {
    cy.contains('button', 'Library').click()
    cy.get('header h1').should('contain.text', 'My Library')
  })

  it('TC021 - Menampilkan daftar buku di Library', () => {
    cy.contains('button', 'Library').click()
    cy.get('.bg-white').should('exist')
  })

  it('TC022 - Menampilkan status buku di Library', () => {
    cy.contains('button', 'Library').click()
    cy.contains('Read').should('exist')
  })

  it('TC023 - Menampilkan jumlah halaman buku di Library', () => {
    cy.contains('button', 'Library').click()
    cy.contains('pages').should('exist')
  })

  it('TC024 - Navigasi antar tab Library', () => {
    cy.contains('button', 'Library').click()
    cy.get('header h1').should('contain.text', 'My Library')
  })

  it('TC025 - Menampilkan pesan jika tidak ada buku di Library', () => {
    cy.contains('button', 'Library').click()
    cy.contains('No books').should('exist')
  })

  it('TC026 - User dapat kembali ke Home dari Library', () => {
    cy.contains('button', 'Library').click()
    cy.contains('Home').click()
    cy.get('header h1').should('contain.text', 'BookTracker')
  })

})