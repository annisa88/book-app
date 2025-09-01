
describe('Book App - Home Page', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
    cy.contains('button', 'Home').click()
  })

it('TC006 - Menampilkan judul aplikasi di Home', () => {
    cy.get('header h1').should('contain.text', 'BookTracker')
    cy.get('h2').should('contain.text', 'Welcome back!')
  })

  it('TC007 - Menampilkan daftar buku rekomendasi', () => {
    cy.get('.bg-white').should('exist')
  })

  it('TC008 - User dapat melihat rating buku', () => {
    cy.contains('★').should('exist')
  })

  it('TC009 - User dapat melihat jumlah halaman buku', () => {
    cy.contains('pages').should('exist')
  })

  it('TC010 - Menampilkan navigasi bawah', () => {
    cy.get('nav').should('be.visible')
    cy.contains('Home').should('exist')
  })

  it('TC011 - Klik tab Home', () => {
    cy.contains('Home').click()
    cy.get('header h1').should('contain.text', 'BookTracker')
  })

  it('TC012 - Menampilkan tombol Discover', () => {
    cy.contains('Discover').should('exist')
  })

  it('TC013 - Menampilkan tombol Library', () => {
    cy.contains('Library').should('exist')
  })

  it('TC014 - Menampilkan tombol Reading', () => {
    cy.contains('Reading').should('exist')
  })

  it('TC015 - Menampilkan tombol Profile', () => {
    cy.contains('Profile').should('exist')
  })

  it('TC016 - Navigasi ke Discover dari Home', () => {
    cy.contains('button', 'Discover').click()
    cy.get('header h1').should('contain.text', 'Discover')
  })

  it('TC017 - Navigasi ke Library dari Home', () => {
    cy.contains('Library').click()
    cy.get('header h1').should('contain.text', 'My Library')
  })

  it('TC018 - Navigasi ke Reading dari Home', () => {
    cy.contains('button', 'Reading').click()
    cy.get('header h1').should('contain.text', 'Reading')
  })

  it('TC019 - Navigasi ke Profile dari Home', () => {
    cy.contains('Profile').click()
    cy.get('header h1').should('contain.text', 'Profile')
  })
})