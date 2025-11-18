describe('Portfolyo açılış deneyimi', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Hero içeriği ve navigasyon linkleri yükleniyor', () => {
    cy.contains('nav a', 'Yetenekler').should('exist')
    cy.get('#hero').within(() => {
      cy.contains('Emir Şahin Aydın').should('exist')
    })
  })

  it('Dil düğmesi İngilizceye geçiş yapıyor', () => {
    cy.contains('button', 'ENGLISH').click()
    cy.contains('button', "TÜRKÇE'YE GEÇ").should('exist')
    cy.contains('#hero', "Hi, I’m Emir Şahin Aydın").should('exist')
  })

  it('Dark mode anahtarı görünür ve çalışıyor', () => {
    cy.contains('span', 'Dark Mode')
      .parent()
      .find('button')
      .as('darkToggle')

    cy.get('@darkToggle').should('exist')
    cy.get('@darkToggle').click()
    cy.get('html').should('have.class', 'dark')
  })

  it('Navigasyonda Projeler linki ilgili bölüme kaydırıyor', () => {
    cy.contains('nav a', 'Projeler').click()
    cy.url().should('include', '#projects')
    cy.get('#projects').should('be.visible')
  })
})

