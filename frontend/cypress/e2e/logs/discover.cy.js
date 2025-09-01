
describe('Book App - Discover Page', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
    cy.contains('button', 'Discover').click()
  })

  it('TC027 - Navigasi ke halaman Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.get('header h1').should('contain.text', 'Discover')
  })

  it('TC028 - Menampilkan search bar di Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.get('input[placeholder="Search books..."]').should('exist')
  })

  it('TC029 - User dapat mencari buku dengan judul', () => {
    cy.contains('button', 'Discover').click()
    cy.get('input').type('Pride and Prejudice')
    cy.contains('Pride and Prejudice').should('exist')
  })

  it('TC030 - User dapat mencari buku dengan author', () => {
    cy.contains('button', 'Discover').click()
    cy.get('input').type('Austen')
    cy.contains('Jane Austen').should('exist')
  })

  it('TC031 - Menampilkan daftar buku di Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.get('.bg-white').should('exist')
  })

  it('TC032 - Menampilkan tombol tambah di Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.get('button').should('exist')
  })

  it('TC033 - Menampilkan status buku di Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.contains(/read|reading|want-to-read/i).should('exist')
  })

  it('TC034 - Menampilkan pesan tidak ada hasil pencarian', () => {
    cy.contains('button', 'Discover').click()
    cy.get('input').type('ZZZZZZ')
    cy.contains('No books found').should('exist')
  })

  it('TC035 - User dapat kembali ke Home dari Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.contains('Home').click()
    cy.get('header h1').should('contain.text', 'BookTracker')
  })

  it('TC036 - User dapat melihat genre buku di Discover', () => {
    cy.contains('button', 'Discover').click()
    cy.contains('Romance').should('exist')
  })

})