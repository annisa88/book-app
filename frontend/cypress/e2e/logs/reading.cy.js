
describe('Book App - Reading Page', () => {
  beforeEach(() => {
    cy.visit('https://book-app.cinte.id/')
    cy.contains('Reading').click()
  })

it('TC037 - Navigasi ke halaman Reading', () => {
  cy.contains('button', 'Reading').click()
  cy.get('header h1').should('contain.text', 'Reading')
})

  it('TC038 - Menampilkan daftar progress membaca', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('Page').should('exist')
  })

  it('TC039 - Menampilkan progress bar buku', () => {
    cy.contains('button', 'Reading').click()
    cy.get('.bg-gradient-to-r').should('exist')
  })

  it('TC040 - Menampilkan tombol Play untuk lanjut baca', () =>{
    cy.contains('button', 'Reading').click()
    cy.get('button').should('exist')
  })

  it('TC041 - Menampilkan judul buku di Reading', () => {
    cy.contains('button', 'Reading').click()
    cy.get('h3').should('exist')
  })

 it('TC042 - Menampilkan author buku di Reading', () => {
  cy.contains('button', 'Reading').click()
  cy.get('p.text-sm.text-gray-600.mb-2').should('exist')
})

  it('TC043 - Menampilkan halaman saat ini di Reading', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('Page').should('exist')
  })

  it('TC044 - Menampilkan total halaman di Reading', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('of').should('exist')
  })

  it('TC045 - Menampilkan persen progress membaca', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('%').should('exist')
  })

  it('TC046 - Menampilkan informasi waktu terakhir membaca', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('ago').should('exist')
  })

  it('TC047 - User dapat kembali ke Home dari Reading', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('Home').click()
    cy.get('header h1').should('contain.text', 'BookTracker')
  })

  it('TC048 - User dapat navigasi dari Reading ke Library', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('Library').click()
    cy.get('header h1').should('contain.text', 'My Library')
  })

  it('TC049 - User dapat navigasi dari Reading ke Discover', () => {
    cy.contains('button', 'Reading').click()
    cy.contains('Discover').click()
    cy.get('header h1').should('contain.text', 'Discover')
  })

})