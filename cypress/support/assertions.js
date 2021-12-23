export class Assertions{
  alertWindowHasText(text){
    cy.on('window:alert', (str) => {
      expect(str).to.equal(text)
    })
  }
}